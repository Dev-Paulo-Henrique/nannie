import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";
import { config } from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  config()
}

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const { name, email, country, state, option } = req.body;
  const output = `
  <p>Olá Nannie, eu me chamo <b>${name}</b> sou de <b>${state} - ${country}</b> e tenho interesse em <b>${option}</b>.</p><br>
  <b>E-mail: ${email}</b>
`;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NANNIE_EMAIL_AUTH,
      pass: process.env.NANNIE_EMAIL_PASS,
    }
  });

  const mailOptions = {
    from: `"${name} " <${process.env.NANNIE_EMAIL_AUTH}>`,
    to: process.env.NANNIE_EMAIL_AUTH,
    subject: name,
    text: option,
    html: output,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.status(500).send("Erro ao enviar o e-mail");
    } else {
      res.status(200).send("E-mail enviado com sucesso");
    }
  });
});

app.listen(9000, () => console.log("Servidor ativo..."));
