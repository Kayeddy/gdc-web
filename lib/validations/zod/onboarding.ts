// Zod imports

import * as z from "zod";

// Validations for profile type selection
export const ProfileSelectionValidation = z.object({
  profileType: z.enum(["mentor", "leader", "member"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona un tipo de perfil.",
      };
    },
  }),
});

// Validations for Leader onboarding form
export const LeaderOnboardingValidation = z.object({
  profileType: z.enum(["mentor", "leader", "member"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona un tipo de perfil.",
      };
    },
  }),

  firstName: z
    .string({
      required_error: "Ingresa por lo menos tu primer nombre",
    })
    .min(1, { message: "El nombre es obligatorio." })
    .max(15, { message: "El nombre es demasiado largo." }),

  lastName: z
    .string({
      required_error: "Ingresa por lo menos tu primer apellido",
    })
    .min(1, { message: "El apellido es obligatorio." })
    .max(15, { message: "El apellido es demasiado largo." }),

  personalEmail: z
    .string({
      required_error: "El correo es obligatorio",
    })
    .email({ message: "Formato de correo inválido." }),

  institutionalEmail: z
    .string()
    .regex(
      /^[^@]+$/,
      "Por favor eliminar el dominio de la universidad antes de procder."
    ),

  phone: z
    .string({
      required_error: "El número de celular es obligatorio",
    })
    .min(1, { message: "El número de teléfono es obligatorio." })
    .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, {
      message: "Formato de número de teléfono inválido.",
    }),

  country: z.enum(["Colombia", "México"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona un País.",
      };
    },
  }),

  developedProjects: z.string().optional(),

  university: z.enum(
    [
      "universidad de medellín",
      "tecnológico nacional de méxico campus zacatecas norte",
      "universidad de guadalajara",
      "universidad de antioquia",
      "eafit",
    ],
    {
      errorMap: () => {
        return {
          message: "Por favor selecciona una universidad.",
        };
      },
    }
  ),

  career: z.enum(
    [
      "systems engineer",
      "software engineer",
      "telecommunications engineer",
      "electronics engineer",
      "computation",
      "digital entertainment",
      "other",
    ],
    {
      errorMap: () => {
        return {
          message: "Por favor selecciona una carrera.",
        };
      },
    }
  ),

  careerSpecification: z.string().optional(),

  semester: z
    .number({
      required_error: "El semestre es obligatorio",
      invalid_type_error: "El semestre debe ser un número",
    })
    .int({ message: "El semestre debe ser un número entero." })
    .min(1, { message: "Especifique su semestre actual." }),

  workExperience: z.enum(["0 years", "1 year", "2 years", "3 years"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona una opción válida.",
      };
    },
  }),

  leadershipExperience: z.enum(["yes", "no"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona una opción válida.",
      };
    },
  }),

  preferredTechRole: z.enum(
    [
      "frontend",
      "backend",
      "fullstack",
      "mobile",
      "ui/ux",
      "design",
      "data science",
      "machine learning",
      "cloud computing",
      "cybersecurity",
      "game development",
      "robotics",
      "iot",
      "blockchain",
      "telecommunications",
    ],
    {
      errorMap: () => {
        return {
          message: "Por favor selecciona un rol.",
        };
      },
    }
  ),

  preferredParticipationArea: z.enum(
    [
      "web",
      "mobile",
      "vr/ar",
      "robotics",
      "videogames",
      "cybersecurity",
      "competitive programming",
    ],
    {
      errorMap: () => {
        return {
          message: "Por favor selecciona un área de participación.",
        };
      },
    }
  ),

  acceptsEmailUpdates: z.enum(["yes", "no"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona una opcion",
      };
    },
  }),
});

// Validations for Member onboarding form
export const MemberOnboardingValidation = z.object({
  profileType: z.enum(["mentor", "leader", "member"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona un tipo de perfil.",
      };
    },
  }),

  firstName: z
    .string({
      required_error: "Ingresa por lo menos tu primer nombre",
    })
    .min(1, { message: "El nombre es obligatorio." })
    .max(15, { message: "El nombre es demasiado largo." }),

  lastName: z
    .string({
      required_error: "Ingresa por lo menos tu primer apellido",
    })
    .min(1, { message: "El apellido es obligatorio." })
    .max(15, { message: "El apellido es demasiado largo." }),

  personalEmail: z
    .string({
      required_error: "El correo es obligatorio",
    })
    .email({ message: "Formato de correo inválido." }),

  institutionalEmail: z
    .string()
    .regex(
      /^[^@]+$/,
      "Por favor eliminar el dominio de la universidad antes de procder."
    ),

  phone: z
    .string({
      required_error: "El número de celular es obligatorio",
    })
    .min(1, { message: "El número de teléfono es obligatorio." })
    .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, {
      message: "Formato de número de teléfono inválido.",
    }),

  country: z.enum(["Colombia", "México"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona un País.",
      };
    },
  }),

  university: z.enum(
    [
      "Universidad de Medellín",
      "Tecnológico Nacional de México Campus Zacatecas Norte",
      "Universidad de Guadalajara",
      "Universidad de Antioquia",
      "Eafit",
    ],
    {
      errorMap: () => {
        return {
          message: "Por favor selecciona una universidad.",
        };
      },
    }
  ),

  career: z.enum(
    [
      "systems engineer",
      "software engineer",
      "telecommunications engineer",
      "electronics engineer",
      "computation",
      "digital entertainment",
      "other",
    ],
    {
      errorMap: () => {
        return {
          message: "Por favor selecciona una carrera.",
        };
      },
    }
  ),

  careerSpecification: z.string().optional(),

  semester: z
    .number({
      required_error: "El semestre es obligatorio",
      invalid_type_error: "El semestre debe ser un número",
    })
    .int({ message: "El semestre debe ser un número entero." })
    .min(1, { message: "Especifique su semestre actual." }),

  workExperience: z.enum(["0 years", "1 year", "2 years", "3 years"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona una opción válida.",
      };
    },
  }),

  preferredTechRole: z.enum(
    [
      "frontend",
      "backend",
      "fullstack",
      "mobile",
      "ui/ux",
      "design",
      "data science",
      "machine learning",
      "cloud computing",
      "cybersecurity",
      "game development",
      "robotics",
      "iot",
      "blockchain",
      "telecommunications",
    ],
    {
      errorMap: () => {
        return {
          message: "Por favor selecciona un rol.",
        };
      },
    }
  ),

  preferredParticipationArea: z.enum(
    [
      "web",
      "mobile",
      "vr/ar",
      "robotics",
      "videogames",
      "cybersecurity",
      "competitive programming",
    ],
    {
      errorMap: () => {
        return {
          message: "Por favor selecciona un área de participación.",
        };
      },
    }
  ),

  acceptsEmailUpdates: z.enum(["yes", "no"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona una opcion",
      };
    },
  }),
});

// Validations for Mentor onboarding form
export const MentorOnboardingValidation = z.object({
  profileType: z.enum(["mentor", "leader", "member"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona un tipo de perfil.",
      };
    },
  }),

  firstName: z
    .string({
      required_error: "Ingresa por lo menos tu primer nombre",
    })
    .min(1, { message: "El nombre es obligatorio." })
    .max(15, { message: "El nombre es demasiado largo." }),

  lastName: z
    .string({
      required_error: "Ingresa por lo menos tu primer apellido",
    })
    .min(1, { message: "El apellido es obligatorio." })
    .max(15, { message: "El apellido es demasiado largo." }),

  personalEmail: z
    .string({
      required_error: "El correo es obligatorio",
    })
    .email({ message: "Formato de correo inválido." }),

  phone: z
    .string({
      required_error: "El número de celular es obligatorio",
    })
    .min(1, { message: "El número de teléfono es obligatorio." })
    .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/, {
      message: "Formato de número de teléfono inválido.",
    }),

  country: z.enum(["Colombia", "México"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona un País.",
      };
    },
  }),

  career: z.enum(
    [
      "systems engineer",
      "software engineer",
      "telecommunications engineer",
      "electronics engineer",
      "computation",
      "digital entertainment",
      "other",
    ],
    {
      errorMap: () => {
        return {
          message: "Por favor selecciona una carrera.",
        };
      },
    }
  ),

  careerSpecification: z.string().optional(),

  workExperience: z.enum(["0 years", "1 year", "2 years", "3 years"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona una opción válida.",
      };
    },
  }),

  preferredParticipationArea: z.enum(
    [
      "web",
      "mobile",
      "vr/ar",
      "robotics",
      "videogames",
      "cybersecurity",
      "competitive programming",
    ],
    {
      errorMap: () => {
        return {
          message: "Por favor selecciona un área de participación.",
        };
      },
    }
  ),

  // preferredClub

  associatedEnterpriseName: z.string(),
  specifiedAssociatedEnterpriseName: z.string().optional(),

  acceptsEmailUpdates: z.enum(["yes", "no"], {
    errorMap: () => {
      return {
        message: "Por favor selecciona una opcion",
      };
    },
  }),
});
