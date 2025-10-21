import { NextRequest } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Define validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100, 'Company name must be less than 100 characters').optional(),
  phone: z.string().max(20, 'Phone number is too long').optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

// Create a reusable transporter for email sending
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate and sanitize input
    const validatedData = contactFormSchema.parse(body);

    // Create email content
    const emailContent = `
      Name: ${validatedData.name}
      Email: ${validatedData.email}
      Company: ${validatedData.company || 'N/A'}
      Phone: ${validatedData.phone || 'N/A'}
      Service of Interest: ${validatedData.service || 'N/A'}
      Message: ${validatedData.message}
    `;

    // Send email if SMTP configuration is available
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = createTransporter();
        
        const mailOptions = {
          from: process.env.SMTP_USER,
          to: process.env.CONTACT_EMAIL || 'info@fandba.us', // Default to company email
          subject: `New Contact Form Submission from ${validatedData.name}`,
          text: emailContent,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Company:</strong> ${validatedData.company || 'N/A'}</p>
            <p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p>
            <p><strong>Service of Interest:</strong> ${validatedData.service || 'N/A'}</p>
            <p><strong>Message:</strong><br>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Continue with success response even if email fails - form data was still received
      }
    } else {
      // If no SMTP configuration, log the data (for testing)
      console.log('Email not sent - SMTP not configured. Form data:', validatedData);
    }

    console.log('Validated contact form data:', validatedData);

    return new Response(JSON.stringify({ message: 'Form submitted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.errors);
      return new Response(
        JSON.stringify({ 
          message: 'Validation error', 
          errors: error.errors 
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
    
    console.error('Error processing contact form:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}