# EmailJS Setup Guide

This guide will help you set up EmailJS to handle email functionality in your Daira website.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```html
Subject: New Contact Form Submission - {{from_name}}

Hello Daira Team,

You have received a new contact form submission:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Company:** {{company}}
**Services:** {{services}}
**Project Description:** {{project_description}}

Best regards,
Daira Website
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Configuration Complete ✅

Your EmailJS is now configured with:
- **Service ID**: `service_jmuk6xs`
- **Template ID**: `template_5w8v9ly`
- **Public Key**: `qTsmpIbWHVef2p9fu`
- **Recipient Email**: `Daira.pk@gmail.com`

The configuration is already set up in `client/lib/emailjs.ts`

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Select services and try the "DIRECT MESSAGE" button
4. Or go to `/contact-form` and fill out the form
5. Check your email to see if the test message was received

## Features Added

✅ **Contact Form Integration** - Sends detailed form submissions via email  
✅ **Direct Message Feature** - Quick contact without filling full form  
✅ **Loading States** - Shows "SENDING..." while email is being sent  
✅ **Success/Error Messages** - User feedback for email status  
✅ **Form Validation** - Required fields and service selection validation  
✅ **Form Reset** - Clears form after successful submission  

## Email Template Variables

The following variables are available in your email template:

- `{{from_name}}` - Contact person's name
- `{{from_email}}` - Contact person's email
- `{{company}}` - Company name
- `{{services}}` - Selected services (comma-separated)
- `{{project_description}}` - Project description
- `{{message}}` - Full formatted message

## Troubleshooting

1. **Email not sending**: Check your EmailJS credentials in the config file
2. **Template not found**: Verify your Template ID is correct
3. **Service not working**: Make sure your Email Service is properly configured
4. **Rate limiting**: Free EmailJS accounts have limits, consider upgrading for production

## Production Considerations

- Consider upgrading to a paid EmailJS plan for production use
- Add rate limiting to prevent spam
- Consider adding CAPTCHA for additional security
- Set up email notifications for failed sends
