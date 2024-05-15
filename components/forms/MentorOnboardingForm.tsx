// NextUI imports
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  SelectItem,
  Select,
  RadioGroup,
  Radio,
  Divider,
  Button,
  Checkbox,
} from "@nextui-org/react";

// Types imports
import { Iuser } from "@/lib/types/user";

// Clerk imports
import { useSession } from "@clerk/nextjs";

// React hook form imports
import { useForm, Controller } from "react-hook-form";

// Zod imports
import { zodResolver } from "@hookform/resolvers/zod";
import { MentorOnboardingValidation } from "@/lib/validations/zod/onboarding";

// Constants imports
import {
  userAreaOfInterestOptions,
  userAssociatedEnterprises,
  userCareerOptions,
  userSocialOptions,
  userTypeOptions,
  userUniversityByCountryOptions,
  userWorkExperienceOptions,
} from "@/constants";

// React imports
import { useCallback, useEffect, useState } from "react";

// Components imports
import CustomSocialMediaController from "../custom/CustomSocialMediaController";

// Utils imports
import { updateSocialMediaLinks } from "@/utils/onboarding";

interface SocialLink {
  provider: string;
  link: string;
}

export default function MentorOnboardingForm({
  onSubmitHandler,
  selectedProfileType,
  onProfileTypeChange,
  isSubmitting,
}: {
  onSubmitHandler: (userData: Iuser) => void;
  selectedProfileType: any;
  onProfileTypeChange: (profileType: string) => void;
  isSubmitting: boolean;
}) {
  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialLink[]>([]);
  const [showOtherCareerField, setShowOtherCareerField] = useState(false);
  const [showOtherEnterpriseField, setShowOtherEnterpriseField] =
    useState(false);

  const { isLoaded: isUserSessionLoaded, session } = useSession();

  const { control, handleSubmit, reset } = useForm<Iuser>({
    resolver: zodResolver(MentorOnboardingValidation),
    defaultValues: {
      profileType: selectedProfileType ?? "",
      firstName: "",
      lastName: "",
      personalEmail: "",
      phone: "",
      country: "",
      preferredParticipationArea: "",
      preferredClub: "",
      career: "",
      careerSpecification: "",
      workExperience: "",
      associatedEnterpriseName: "",
      specifiedAssociatedEnterpriseName: "",
      mentoringExperience: "",
      acceptsEmailUpdates: "",
    },
  });

  /**
   * Handles adding or updating social media links within the form's state.
   * If the social media provider already exists in the state, the link is updated.
   * Otherwise, a new entry is added.
   *
   * @param {string} provider - The social media platform provider.
   * @param {string} link - The user's link to the social media platform.
   */
  const handleSocialMediaAddition = useCallback(
    (provider: string, link: string) => {
      const updatedLinks = updateSocialMediaLinks(
        socialMediaLinks,
        provider,
        link
      );
      setSocialMediaLinks(updatedLinks);
    },
    [socialMediaLinks]
  );

  /**
   * Handles the submission of the form. It prepares and validates the data,
   * including the combination of the institutional email with its extension if necessary.
   * If the user selects "other" as their career, it uses the specified career instead.
   *
   * @param {Iuser} data - The data collected from the form.
   */
  const onSubmit = useCallback(
    (data: Iuser) => {
      if (!isUserSessionLoaded || !session) {
        return;
      }

      const finalData = {
        ...data,
        socials: socialMediaLinks,
      };

      if (data.career === "other" && data.careerSpecification) {
        finalData.career = data.careerSpecification;
      }

      if (
        data.associatedEnterpriseName === "other" &&
        data.specifiedAssociatedEnterpriseName
      ) {
        //@ts-ignore
        finalData.associatedEnterpriseName = data.careerSpecification;
      }

      onSubmitHandler(finalData);
    },
    [onSubmitHandler, isUserSessionLoaded, session, socialMediaLinks]
  );

  /**
   * Resets the form's profile type to the selected profile type whenever it changes.
   * This effect ensures that the form reflects the current state of the selected profile type.
   */
  useEffect(() => {
    reset({ profileType: selectedProfileType });
  }, [selectedProfileType, reset]);

  return (
    <div>
      <Card className="lg:w-[500px] lg:min-h-[400px] lg:h-[70vh] h-[90vh] p-8 overflow-y-auto">
        <CardHeader className="flex-col items-center justify-center gap-1 px-4 pt-2 pb-0 lg:gap-0">
          Guía, Empodera, Alcanza
        </CardHeader>
        <CardBody className="flex items-center justify-center gap-6 py-2 overflow-visible mt-4">
          <section className="w-full">
            <form
              className="flex flex-col items-center justify-center w-full gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col lg:hidden items-center w-full">
                {selectedProfileType && (
                  <Controller
                    name="profileType"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState: { error } }) => (
                      <Select
                        {...field}
                        label="Puesto ideal en el GDC"
                        variant="bordered"
                        className="max-w-xs"
                        isInvalid={error ? true : false}
                        isDisabled={isSubmitting}
                        disabled={isSubmitting}
                        errorMessage={error?.message}
                        selectedKeys={field.value ? [field.value] : []}
                        onChange={(e) => {
                          const selectedValue = e.target.value;
                          field.onChange(selectedValue);
                          onProfileTypeChange(selectedValue);
                        }}
                      >
                        {userTypeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />
                )}
              </div>

              <div className="w-full flex flex-col mt-4">
                <p className="text-small text-default-400">
                  Información personal
                </p>
                <Divider className="my-4" />
              </div>

              <Controller
                name="firstName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    label="Nombres"
                    placeholder="Ej. John Arthur"
                    isInvalid={!!error}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error?.message}
                    type="text"
                  />
                )}
              />

              <Controller
                name="lastName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    label="Apellidos"
                    placeholder="Ej. Doe Beningham"
                    isInvalid={!!error}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error?.message}
                    type="text"
                  />
                )}
              />

              <Controller
                name="personalEmail"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    label="Correo personal"
                    placeholder="Ej. johndoe@gmail.com"
                    isInvalid={!!error}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error?.message}
                    type="email"
                  />
                )}
              />

              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    label="Número de teléfono"
                    placeholder="Ej. +57 3201004456"
                    isInvalid={!!error}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error ? error.message : ""}
                    type="text"
                  />
                )}
              />
              <Controller
                name="country"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    {...field}
                    label="País"
                    variant="bordered"
                    isInvalid={error ? true : false}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error?.message}
                    selectedKeys={field.value ? [field.value] : []}
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      field.onChange(selectedValue);
                    }}
                  >
                    {userUniversityByCountryOptions.map((country) => (
                      <SelectItem
                        key={country.country}
                        value={country.country}
                        className="capitalize"
                      >
                        {country.country}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />

              {/* Social media section */}
              <div className="w-full flex flex-col gap-2">
                <p className="text-default-500">
                  Añade las redes sociales de tu preferencia
                </p>
                <div className="w-full flex flex-row gap-4 flex-wrap">
                  {userSocialOptions.map((social) => (
                    <CustomSocialMediaController
                      key={social.provider}
                      TriggerIcon={<social.Icon className="w-5 h-6" />}
                      socialMediaProvider={social.provider}
                      handleSocialMediaAddition={(link) =>
                        handleSocialMediaAddition(social.provider, link)
                      }
                      isSubmitting={isSubmitting}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col mt-4">
                <p className="text-small text-default-400">
                  Información laboral
                </p>
                <Divider className="my-4" />
              </div>

              <Controller
                name="associatedEnterpriseName"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    {...field}
                    variant="bordered"
                    labelPlacement="inside"
                    isInvalid={error ? true : false}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error?.message}
                    selectedKeys={field.value ? [field.value] : []}
                    label="Empresa"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      field.onChange(selectedValue);
                      setShowOtherEnterpriseField(selectedValue === "other");
                    }}
                  >
                    {userAssociatedEnterprises.map((option) => (
                      <SelectItem key={option.value} value={option.name}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />

              {showOtherEnterpriseField && (
                <Controller
                  name="specifiedAssociatedEnterpriseName"
                  rules={{ required: true }}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      {...field}
                      required
                      isRequired
                      placeholder="Especifica el nombre de tu empresa"
                      type="text"
                      isInvalid={!!error}
                      isDisabled={isSubmitting}
                      disabled={isSubmitting}
                      errorMessage={error?.message}
                    />
                  )}
                />
              )}

              <Controller
                name="career"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    {...field}
                    variant="bordered"
                    labelPlacement="inside"
                    isInvalid={error ? true : false}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error?.message}
                    selectedKeys={field.value ? [field.value] : []}
                    label="Campo de labor"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      field.onChange(selectedValue);
                      setShowOtherCareerField(selectedValue === "other");
                    }}
                  >
                    {userCareerOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />

              {showOtherCareerField && (
                <Controller
                  name="careerSpecification"
                  rules={{ required: true }}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      {...field}
                      required
                      isRequired
                      placeholder="Especifica tu campo"
                      type="text"
                      isInvalid={!!error}
                      isDisabled={isSubmitting}
                      disabled={isSubmitting}
                      errorMessage={error?.message}
                    />
                  )}
                />
              )}

              <Controller
                name="workExperience"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    {...field}
                    variant="bordered"
                    labelPlacement="inside"
                    isInvalid={error ? true : false}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error?.message}
                    selectedKeys={field.value ? [field.value] : []}
                    label="Experiencia"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      field.onChange(selectedValue);
                    }}
                  >
                    {userWorkExperienceOptions
                      .filter(
                        (experienceOption) =>
                          experienceOption.value !== "0 years"
                      )
                      .map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.name}
                        </SelectItem>
                      ))}
                  </Select>
                )}
              />

              <div className="w-full flex flex-col mt-4">
                <p className="text-small text-default-400">
                  Información para el club
                </p>
                <Divider className="my-4" />
              </div>

              <Controller
                name="mentoringExperience"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <RadioGroup
                    {...field}
                    label="¿Tienes experiencia mentorando equipos/personas?"
                    className="w-full"
                    isInvalid={error ? true : false}
                    isDisabled={isSubmitting}
                    errorMessage={error?.message}
                  >
                    <Radio value="yes">Sí</Radio>
                    <Radio value="no">No</Radio>
                  </RadioGroup>
                )}
              />

              <Controller
                name="preferredParticipationArea"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    {...field}
                    variant="bordered"
                    labelPlacement="inside"
                    isInvalid={error ? true : false}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error?.message}
                    selectedKeys={field.value ? [field.value] : []}
                    label="Área de mentoría"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      field.onChange(selectedValue);
                    }}
                  >
                    {userAreaOfInterestOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />

              <div className="w-full flex flex-col mt-4">
                <p className="text-small text-default-400">Preferencias</p>
                <Divider className="my-4" />
              </div>

              <Controller
                name="acceptsEmailUpdates"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Checkbox
                    {...field}
                    isInvalid={!!error}
                    isRequired
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      const checked = e.target.checked;
                      field.onChange(checked ? "yes" : "no");
                    }}
                  >
                    Recibir actualizaciones por correo
                  </Checkbox>
                )}
              />
              <Button
                type="submit"
                isDisabled={isSubmitting}
                disabled={isSubmitting}
                isLoading={isSubmitting}
                className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] text-white mt-4 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando" : "Enviar"}
              </Button>
            </form>
          </section>
        </CardBody>
      </Card>
    </div>
  );
}
