import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_jmuk6xs',
  TEMPLATE_ID: 'template_5w8v9ly',
  PUBLIC_KEY: 'qTsmpIbWHVef2p9fu',
  RECIPIENT_EMAIL: 'Daira.pk@gmail.com',
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
};

// Send email function
export const sendEmail = async (templateParams: any) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    console.log('Email sent successfully:', response);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};

// Send contact form email
export const sendContactFormEmail = async (formData: {
  name: string;
  company: string;
  email: string;
  project: string;
  selectedServices: string[];
}) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    reply_to: formData.email,
    to_name: 'Daira Team',
    company: formData.company,
    project_description: formData.project,
    services: formData.selectedServices.join(', '),
    message: `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Services: ${formData.selectedServices.join(', ')}
Project Description: ${formData.project}
    `,
  };

  return await sendEmail(templateParams);
};

// Send direct message email
export const sendDirectMessageEmail = async (services: string[]) => {
  const templateParams = {
    from_name: 'Website Visitor',
    from_email: 'noreply@daira.com',
    reply_to: 'noreply@daira.com',
    to_name: 'Daira Team',
    services: services.join(', '),
    message: `
A visitor from your website is interested in the following services:
${services.join(', ')}

This is a direct message from the contact page.
    `,
  };

  return await sendEmail(templateParams);
};
