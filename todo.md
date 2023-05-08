# NEXT

- Actions github marche
  1. Faire passer la private key en var à l'action
  1. ssh-add dans le fichier .sh I guess
  1. Essayer de se connecter via le docker dans le runner github
  - maintenant faire une belle CI/CD
  - Passer les env var
- Gérer les env var du docker-compose (env var github?)
- le back ne doit plus charger les env var (en mode prod only), depuis dotenv, car les env var sont définies plus haut via docker
