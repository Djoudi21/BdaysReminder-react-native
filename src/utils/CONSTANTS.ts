export const PATH = {
  home: "home",
  register: "register",
  login: "login",
} as const;

export const REQUEST_MESSAGES = {
  409: "L'utilisateur existe déjà. Veuillez choisir un autre nom d'utilisateur.",
  500: "Une erreur est survenue",
  404: "Aucun utilisateur n'a été trouvé. Veuillez vérifier vos identifiants",
} as const;
