import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create transporter for nodemailer
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email template
const createEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
        }
        .header {
          background: linear-gradient(135deg, #E92B26 0%, #1B1749 100%);
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background: white;
          padding: 30px;
          border-radius: 0 0 8px 8px;
        }
        .field {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        .field-label {
          font-weight: bold;
          color: #E92B26;
          margin-bottom: 5px;
        }
        .field-value {
          color: #333;
        }
        .message-box {
          background-color: #f5f5f5;
          padding: 15px;
          border-radius: 5px;
          border-left: 4px solid #E92B26;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Nouveau Message de Contact - X-Zone Technologie</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Nom:</div>
            <div class="field-value">${formData.nom}</div>
          </div>
          <div class="field">
            <div class="field-label">Prénom:</div>
            <div class="field-value">${formData.prenom}</div>
          </div>
          <div class="field">
            <div class="field-label">Adresse:</div>
            <div class="field-value">${formData.adresse}</div>
          </div>
          <div class="field">
            <div class="field-label">Email:</div>
            <div class="field-value">${formData.email}</div>
          </div>
          <div class="field">
            <div class="field-label">Message:</div>
            <div class="message-box">${formData.message.replace(/\n/g, '<br>')}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { nom, prenom, adresse, email, message } = req.body;

    // Validation
    if (!nom || !prenom || !adresse || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Tous les champs sont requis' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email invalide' 
      });
    }

    const transporter = createTransporter();

    // Email options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `Nouveau message de contact - ${nom} ${prenom}`,
      html: createEmailTemplate({ nom, prenom, adresse, email, message }),
      text: `
        Nouveau message de contact - X-Zone Technologie
        
        Nom: ${nom}
        Prénom: ${prenom}
        Adresse: ${adresse}
        Email: ${email}
        
        Message:
        ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Votre message a été envoyé avec succès!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi du message. Veuillez réessayer plus tard.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

