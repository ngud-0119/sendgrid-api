https://www.tiny.cloud/blog/node-js-send-email/

Option 2 Tutorial: How to send email without a server using Node.js and a transactional email API service
With this second option, you don’t need an SMTP server to get started, so naturally it’s easier to set up. For this example, we’ll use SendGrid as our email service, but there are lots of other great options available.

1.Start off by setting up your Node.js app. If you already have an app, skip this step.

mkdir sendgrid-api
cd sendgrid-api
npm init -y

COPY
2.Next, sign up for a free SendGrid account. Their free plan lets you send up to 100 emails per day, which is perfect for testing. You’ll be asked to provide some contact information, then eventually be presented with this screen. Click Create a single sender to set up an email address to send emails fromSendgrid welcome screen

3.Enter your contact information, hit save and then check your email for the verification link.

4.Go back to your SendGrid account, and click Email API Integration Guide in the left sidebar

5.Select Web API, and then Node.js

6.Type in an API key name, and click Create key

Create a SendGrid API key screen

7.Copy the code under Create an environment variable,paste it into your terminal, and press the enter key to run it. This adds your SendGrid API key to your environment so that it can be retrieved by your app at runtime.

echo "export SENDGRID_API_KEY='YOUR-SENDGRID-API-KEY'" > sendgrid.env
echo "sendgrid.env" >> .gitignore
source ./sendgrid.env

COPY
8.Install the SendGrid mail NPM package:

npm install --save @sendgrid/mail

COPY
You should see something like this to confirm the package was installed:

added 6 packages, and audited 7 packages in 2s
found 0 vulnerabilities

COPY
9.Create a file called sendgrid-api.js and copy the code from the SendGrid integration page found under the send your first email heading. Paste this code from the SendGrid integration page into the sendgrid-api.js file. Update the ‘to’ setting to the email address you want to receive the test email (for example, your email address), and the ‘from’ setting to the email address you just set and verified as the sender.

const sgMail = require('@sendgrid/mail')<Br/>
sgMail.setApiKey(process.env.SENDGRID_API_KEY)<Br/>
const msg = {<Br/>
  to: 'your@email.com', // Change to your recipient<Br/>
  from: 'your.verified@sender.com', // Change to your verified sender<Br/>
  subject: 'Look! I’m sending from SendGrid',<Br/>
  text: 'Here’s the text version',<Br/>
  html: 'And here’s the <strong>HTML</strong> version',<Br/>
sgMail<Br/>
  .send(msg)<Br/>
  .then(() => {<Br/>
    console.log('Email sent')<Br/>
  })<Br/>
  .catch((error) => {<Br/>
    console.error(error)<Br/>
  })<Br/>
<Br/>
COPY
10.Check the "I've integrated the code above" checkbox, and click Next: Verify Integration.

11.In terminal, run your app.


<h2>Bonus: Add rich text editing to your email project</h2>
Now that you’re ready to start sending emails, have you considered how you can help your users to create those emails?

TinyMCE lets users create clean and compliant emails, in an easy-to-use WYSIWYG editor.

Best of all, it integrates seamlessly with 12+ frameworks, including Node.js + Express, React, Angular and Vue.

Check out our email editor starter config and demo or sign up for your FREE 14-day trial to test out TinyMCE’s premium features.