import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3981e4d74bbea5",
    pass: "0afa61d5e3c309",
  },
});
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedback.com>",
      to: "Vinicius Silva <viniciusconc@gmail.com>",
      subject,
      html: body,
    });
  }
}
