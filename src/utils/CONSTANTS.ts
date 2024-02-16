export const PATH = {
  root: "root",
  home: "home",
  register: "register",
  login: "Login",
  profile: "profile",
  help: "help",
} as const;

export const REQUEST_MESSAGES = {
  409: "L'utilisateur existe déjà. Veuillez choisir un autre nom d'utilisateur.",
  500: "Une erreur réseau est survenue",
  404: "Aucun utilisateur trouvé, vérifiez votre email",
  401: "Utilisateur non autorisé, vérifiez votre mot de passe",
} as const;
