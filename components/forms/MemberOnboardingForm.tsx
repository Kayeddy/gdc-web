// NextUI imports
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  SelectItem,
  Select,
  Divider,
  SelectSection,
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

// Validations imports
import { MemberOnboardingValidation } from "@/lib/validations/zod/onboarding";

// Constants imports
import {
  userAreaOfInterestOptions,
  userCareerOptions,
  userPreferredTechRoleOptions,
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

export default function MemberOnboardingForm({
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
  const [universityMailExtension, setUniversityMailExtension] = useState("");
  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialLink[]>([]);
  const [showOtherField, setShowOtherField] = useState(false);

  const { isLoaded: isUserSessionLoaded, session } = useSession();

  const { control, handleSubmit, reset } = useForm<Iuser>({
    resolver: zodResolver(MemberOnboardingValidation),
    defaultValues: {
      profileType: selectedProfileType ?? "",
      firstName: "",
      lastName: "",
      personalEmail: "",
      institutionalEmail: "",
      phone: "",
      university: "",
      country: "",
      preferredParticipationArea: "",
      preferredTechRole: "",
      developedProjects: "",
      career: "",
      careerSpecification: "",
      semester: "",
      workExperience: "",
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

      let { institutionalEmail } = data;

      if (
        universityMailExtension &&
        !institutionalEmail.includes(universityMailExtension)
      ) {
        institutionalEmail += universityMailExtension;
      }

      const finalData = {
        ...data,
        institutionalEmail,
        socials: socialMediaLinks,
      };

      if (data.career === "other" && data.careerSpecification) {
        finalData.career = data.careerSpecification;
      }

      onSubmitHandler(finalData);
    },
    [
      onSubmitHandler,
      isUserSessionLoaded,
      session,
      socialMediaLinks,
      universityMailExtension,
    ]
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
          Conecta, Colabora, Crece
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
                  Información académica
                </p>
                <Divider className="my-4" />
              </div>

              <Controller
                name="university"
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
                    label="Universidad"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      field.onChange(selectedValue);

                      // Find the university object by name
                      const selectedUniversity = userUniversityByCountryOptions
                        .flatMap((country) => country.institutions)
                        .find(
                          (university) => university.name === selectedValue
                        );

                      // Check if the university is found and has an email
                      if (selectedUniversity && selectedUniversity.email) {
                        setUniversityMailExtension(selectedUniversity.email); // Update another form field
                      }
                    }}
                  >
                    {userUniversityByCountryOptions.map((countries) => {
                      return (
                        <SelectSection
                          key={countries.country}
                          showDivider
                          title={countries.country}
                          className="capitalize"
                        >
                          {countries.institutions.map((university) => (
                            <SelectItem
                              key={university.name}
                              className="capitalize"
                            >
                              {university.name}
                            </SelectItem>
                          ))}
                        </SelectSection>
                      );
                    })}
                  </Select>
                )}
              />

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
                    label="Carrera"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      field.onChange(selectedValue);
                      setShowOtherField(selectedValue === "other");
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

              {showOtherField && (
                <Controller
                  name="careerSpecification"
                  rules={{ required: true }}
                  control={control}
                  render={({ field, fieldState: { error } }) => (
                    <Input
                      {...field}
                      required
                      isRequired
                      isDisabled={isSubmitting}
                      disabled={isSubmitting}
                      placeholder="Especifica tu carrera"
                      label="Nombre de tu carrera"
                      type="text"
                      isInvalid={!!error}
                      errorMessage={error?.message}
                    />
                  )}
                />
              )}

              <Controller
                name="semester"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    label="Semestre"
                    placeholder="Ej. 1"
                    type="number"
                    isInvalid={!!error}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error?.message}
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value, 10) || "")
                    }
                  />
                )}
              />
              <Controller
                name="institutionalEmail"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    {...field}
                    label="Correo institucional"
                    placeholder="Ej. johndoe"
                    isInvalid={!!error}
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    errorMessage={error?.message}
                    type="text"
                    onChange={(e) => {
                      field.onChange(e.target.value.split("@")[0]);
                      field.onChange(e.target.value); // Strips out '@' if user tries to enter it
                    }}
                    endContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">
                          {universityMailExtension
                            ? universityMailExtension
                            : "@gmail.com"}
                        </span>
                      </div>
                    }
                  />
                )}
              />

              <div className="w-full flex flex-col mt-4">
                <p className="text-small text-default-400">
                  Información laboral
                </p>
                <Divider className="my-4" />
              </div>

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
                    {userWorkExperienceOptions.map((option) => (
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
                name="preferredTechRole"
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
                    label="Perfil Tech"
                    onChange={(e) => {
                      const selectedValue = e.target.value;
                      field.onChange(selectedValue);
                    }}
                  >
                    {userPreferredTechRoleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </Select>
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
                    label="Área de participación"
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
                    isDisabled={isSubmitting}
                    disabled={isSubmitting}
                    isRequired
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
                className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] text-white mt-4"
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
