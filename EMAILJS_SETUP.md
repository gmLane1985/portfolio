# EmailJS Integration Setup Guide

Your contact form is ready to send emails! Follow these steps to complete the EmailJS integration.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign up for free"
3. Create an account using email, Google, or GitHub
4. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail**: Most common choice
   - **Outlook**
   - **Custom SMTP**
4. For Gmail:
   - Click "Gmail"
   - Connect your Gmail account
   - Give EmailJS permission to send through your account
5. Click **Create Service** and note your **Service ID** (looks like: `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Name it something like "Contact Form"
4. In the template, set up your email structure with these variables:

```
Subject: New Portfolio Contact

From: {{from_name}} ({{from_email}})
Phone: {{phone_number}}

Message:
{{message}}
```

**Important Template Variables to use:**

- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email
- `{{phone_number}}` - Client's phone
- `{{message}}` - Project description

5. Customize the email layout to match your preferences
6. Click **Save**
7. Note your **Template ID** (looks like: `template_xyz789`)

## Step 4: Get Your Credentials

1. Go to **Account** → **API** tab
2. Copy your **Public Key** (looks like: `abc123def456`)

## Step 5: Update Your Code

Edit the file `assets/scripts/contact.js` and replace these values:

1. **Line 2**: Replace `'YOUR_PUBLIC_KEY'` with your actual Public Key:

   ```javascript
   emailjs.init('abc123def456'); // Your real key
   ```

2. **Line 25-26**: Replace the Service ID and Template ID:
   ```javascript
   const response = await emailjs.send(
     'service_abc123', // Your Service ID
     'template_xyz789', // Your Template ID
     templateParams,
   );
   ```

## Example Configuration

```javascript
// Line 2
emailjs.init('pk_test_123456789'); // Your Public Key

// Lines 25-26
const response = await emailjs.send(
  'service_gmail_12345', // Your Service ID (from Email Services)
  'template_contact_form', // Your Template ID (from Email Templates)
  templateParams,
);
```

## Step 6: Test Your Form

1. Go to your portfolio website's contact page
2. Fill out the form with your own information
3. Click "Send Message →"
4. You should receive an email within seconds
5. The button will show "✓ Message Sent!" confirmation

## Troubleshooting

**"Failed to Send" error?**

- Check that your Service ID and Template ID are correct (no typos)
- Verify your Public Key is correct
- Make sure your email service is connected in EmailJS dashboard
- Check browser console (F12) for detailed error messages

**Email not arriving?**

- Check your spam/junk folder
- Verify the email service is connected and verified in EmailJS
- Check that template variables match the form field names

**Variables not filling in?**

- Make sure template variable names match EXACTLY: `{{from_name}}`, `{{from_email}}`, `{{phone_number}}`, `{{message}}`
- In contact.js, these names in `templateParams` must match: `from_name`, `from_email`, `phone_number`, `message`

## Free Plan Details

- **200 free emails/month** (more than enough for a portfolio)
- Requests are limited to 1 per second
- Great for static websites (no backend required)
- Upgrade anytime if you need more

## Next Steps

Once EmailJS is working, you can:

- Add form validation on the frontend
- Customize success/error messages
- Add email notifications to yourself
- Track submissions in EmailJS dashboard
