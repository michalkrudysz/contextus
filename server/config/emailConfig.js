import "dotenv/config";
import nodemailer from "nodemailer";

const emailTransportConfig = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

export const transporter = nodemailer.createTransport(emailTransportConfig);
