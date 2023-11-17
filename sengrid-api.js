const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'your@email.com', // Change to your recipient
  from: 'your.verified@sender.com', // Change to your verified sender
  subject: 'Look! I’m sending from SendGrid',
  text: 'Here’s the text version',
  html: 'And here’s the <strong>HTML</strong> version',
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })