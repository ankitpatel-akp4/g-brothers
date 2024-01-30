import nodemailer from 'nodemailer'

var transporter = nodemailer.createTransport({
  service: "aryabhata",
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});




export async function sendMail(mailOptions:any) {
  transporter.sendMail(mailOptions, function (error:any, info:any) {
    if (error) {
      console.log(info)
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
  console.log("hi")
}

// const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;
const from = process.env.EMAIL_FROM;

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
) => {
  await sendMail({
    from: from,
    to: email,
    subject: "2FA Code",
    html: `<p>Your 2FA code: ${token}</p>`
  });
};

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`

  await sendMail({
    from: from,
    to: email,
    subject: "Reset your password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`
  });
};

export const sendVerificationEmail = async (
  email: string, 
  token: string
) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await sendMail({
    from: from,
    to: email,
    subject: "Confirm your email",
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
  });
};
