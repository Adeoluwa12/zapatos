import nodemailer from 'nodemailer';
import { ShoeData } from './mongodb';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function sendDataEmail(data: ShoeData, recommendations: string) {
  const emailContent = `
    <h2>New Zapatos Customer Data</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Shoe Size:</strong> ${data.shoeSize}</p>
    <p><strong>Favorite Shoe Type:</strong> ${data.shoeType}</p>
    <p><strong>Submitted:</strong> ${new Date(data.createdAt).toLocaleString()}</p>
    
    <h3>AI-Generated Recommendations:</h3>
    <p>${recommendations}</p>
  `;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_FROM_EMAIL,
      to: 'adeoyeoluwaferanmi31@gmail.com,deoyefoods@gmail.com',
      subject: `New Zapatos Customer: ${data.name}`,
      html: emailContent,
    });

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
