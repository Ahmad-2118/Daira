# EmailJS Template Configuration Fix

The error "The recipients address is empty" means your EmailJS template needs to be configured with the recipient email address.

## Fix Your EmailJS Template

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Navigate to Email Templates**
3. **Edit Template**: `template_udfc07l`
4. **Add Recipient Email**: In the template settings, add `Daira.pk@gmail.com` as the recipient email

## Template Configuration Steps

### Option 1: Set Default Recipient (Recommended)
1. In your EmailJS template settings
2. Find "Default Values" or "Template Settings"
3. Add a field called `to_email` with value `Daira.pk@gmail.com`
4. Or set the default recipient email to `Daira.pk@gmail.com`

### Option 2: Update Template Variables
Your template should include these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{reply_to}}` - Reply-to email
- `{{to_name}}` - Recipient name
- `{{message}}` - Email message
- `{{company}}` - Company name
- `{{services}}` - Selected services
- `{{project_description}}` - Project description

## Alternative: Use EmailJS Service Configuration

1. Go to "Email Services" in your EmailJS dashboard
2. Edit your service `service_jmuk6xs`
3. Make sure the service is configured to send emails to `Daira.pk@gmail.com`
4. Set the default "To" email in the service settings

## Test After Configuration

After updating your template:
1. Refresh your website
2. Try the contact form again
3. Check if emails are received at `Daira.pk@gmail.com`

## If Still Not Working

If the error persists, try this alternative approach:
1. Create a new EmailJS template
2. Set the recipient email directly in the template
3. Update the template ID in your code

