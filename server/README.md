# X-Zone Technologie - Backend Server

Serveur Express pour gérer l'envoi d'emails depuis les formulaires de contact.

## Installation

```bash
cd server
npm install
```

1. Modifiez le fichier `.env` avec vos informations:
   - `SMTP_USER`: Votre adresse email
   - `SMTP_PASS`: Votre mot de passe d'application (pour Gmail, utilisez un App Password)
   - `CONTACT_EMAIL`: L'adresse email où recevoir les messages de contact

### Configuration Gmail

Pour utiliser Gmail:
1. Activez la vérification en 2 étapes
2. Générez un mot de passe d'application: https://myaccount.google.com/apppasswords
3. Utilisez ce mot de passe comme `SMTP_PASS`

## Démarrage

```bash
# Mode développement (avec watch)
npm run dev

# Mode production
npm start
```

Le serveur démarre sur le port 3001 par défaut.

## API Endpoints

### POST /api/contact

Envoie un email avec les données du formulaire de contact.

**Body:**
```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "adresse": "123 Rue Example",
  "email": "jean.dupont@example.com",
  "message": "Votre message ici"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Votre message a été envoyé avec succès!"
}
```

### GET /api/health

Vérifie que le serveur fonctionne.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

