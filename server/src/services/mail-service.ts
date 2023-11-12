// import * as nodemailer from 'nodemailer';
import { Transporter, createTransport } from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

class MailService {
  transporter: Transporter;
  constructor() {
    this.transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  async sendMail(to: string, link: string) {
    const url: string =
      process.env.SITE_URL_API + '/activation-account/' + link;

    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Activation link for site ' + process.env.SITE_URL,
      text: '',
      html: `
        <div>
            <h1>To activate your accaunt click on link</h1> 
            <a href="${url}">Activation link</a>
        </div>`
    });
  }
}
export default new MailService();
