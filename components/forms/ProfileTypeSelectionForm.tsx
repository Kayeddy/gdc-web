// NextUI imports
import {
  Select,
  SelectItem,
  Card,
  CardHeader,
  CardBody,
  Image,
  Skeleton,
} from "@nextui-org/react";

// Types imports
import { Iuser } from "@/lib/types/user";

// Clerk imports
import { useSession } from "@clerk/nextjs";

// React hook form imports
import { useForm, Controller } from "react-hook-form";

// Zod imports
import { zodResolver } from "@hookform/resolvers/zod";

// Validation imports
import { ProfileSelectionValidation } from "@/lib/validations/zod/onboarding";

// React imports
import { useEffect, useState } from "react";

// Constants imports
import { userTypeOptions } from "@/constants";

// NextJS imports
import dynamic from "next/dynamic";

// Icons imports
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

// Components imports
const CustomDrawer = dynamic(() => import("@/components/custom/CustomDrawer"), {
  ssr: false,
});

/**
 * Renders descriptions for user type options.
 * This is used in the CustomDrawer component to provide additional information to the user.
 * @returns {React.ReactElement} The component with the user type descriptions.
 */
const userTypeOptionsDescriptions = () => (
  <div className="flex flex-col items-start justify-start lg:justify-around w-full gap-8 p-4 lg:flex-row max-h-[400px] overflow-y-auto py-4 lg:py-0">
    {userTypeOptions.map(({ label, value, description }) => (
      <div key={value} className="flex flex-col gap-4">
        <h2 className="text-lg">{label}</h2>
        <p className="text-base-regular">{description}</p>
      </div>
    ))}
  </div>
);

/**
 * Renders a selection form for users to choose their profile type upon joining or returning to the platform.
 * It leverages the Clerk session for user authentication and dynamic content, and provides
 * a user-friendly interface with a reactive form managed by React Hook Form and Zod for validation.
 *
 * @param {Props} props - The properties passed to the component.
 * @param {Iuser | null} props.userData - The user data, if available, loaded from the session or passed to the component.
 * @param {(profileType: string) => void} props.onProfileTypeChange - Callback function to handle changes in the selected profile type.
 * @param {string} props.externallySelectedProfileType - The profile type selected outside of the form, used for initializing the form state.
 * @param {boolean} props.isSubmitting - Indicates whether the form is currently submitting.
 *
 */
export default function ProfileTypeSelectionForm({
  userData,
  onProfileTypeChange,
  externallySelectedProfileType,
  isSubmitting,
}: {
  userData: Iuser | any;
  onProfileTypeChange: (profileType: string) => void;
  externallySelectedProfileType: string;
  isSubmitting: boolean;
}) {
  const [imageLoading, setImageLoading] = useState(false);

  const { isLoaded: isUserSessionLoaded, session } = useSession();

  const { control, setValue } = useForm<Iuser>({
    resolver: zodResolver(ProfileSelectionValidation),
    defaultValues: {
      profileType: externallySelectedProfileType || "",
    },
  });

  /**
   * Effect to update the form state when the externally controlled profile type changes.
   * It ensures the form reflects the current state of the selected profile type accurately.
   */
  useEffect(() => {
    setValue("profileType", externallySelectedProfileType);
  }, [externallySelectedProfileType, setValue]);

  return (
    <div>
      <Card className="w-full p-[calc(0.5rem+0.5vw)] md:paddings">
        <CardHeader className="flex-col items-center justify-center gap-1 px-4 pt-2 pb-0 lg:gap-0">
          <small className="text-heading3-bold lg:text-default-500">
            {userData ? "Bienvenido de nuevo," : "Bienvenido"}
          </small>
          <span className="flex flex-row items-center gap-4">
            <h4 className="font-bold text-heading3-bold lg:text-heading2-bold">
              {isUserSessionLoaded ? (
                userData?.firstName || session?.publicUserData.firstName
              ) : (
                <Skeleton className="h-3 w-10 rounded-lg" />
              )}
            </h4>

            {imageLoading ? (
              <Skeleton className="h-24 w-24 rounded-lg" />
            ) : (
              <Image
                alt="Card background"
                width={24}
                height={24}
                onLoad={() => setImageLoading(false)}
                className="max-w-md object-fit max-h-md"
                src="https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png"
              />
            )}
          </span>
        </CardHeader>
        <CardBody className="flex items-center justify-center gap-6 py-2 overflow-visible">
          <section className="flex flex-col items-center gap-4 lg:flex-row">
            <p className="relative max-w-md my-2 text-sm text-center text-default-500">
              {userData
                ? "Por favor completa tu perfil para ingresar al portal"
                : "¿Listo para ser parte de esta gran iniciativa?"}
            </p>
            <CustomDrawer
              triggerElement={
                <div className="flex flex-row items-center gap-1 cursor-pointer hover:scale-105 animate-pulse">
                  <QuestionMarkCircledIcon />
                  <p className="text-base-regular lg:hidden">Info</p>
                </div>
              }
              title="Tu curiosidad te llevará a descubrir grandes cosas!"
              description="A continuación, te ofrecemos una descripción detallada de cada perfil disponible para que elijas el que más resuene contigo."
              content={userTypeOptionsDescriptions()}
            />
          </section>
          <section className="w-full">
            <form className="flex flex-col items-center justify-center w-full gap-4">
              <Controller
                name="profileType"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <Select
                    {...field}
                    label="¿Cuál es tu puesto ideal en el GDC?"
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
            </form>
          </section>
        </CardBody>
      </Card>
    </div>
  );
}
