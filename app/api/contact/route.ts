import { NextRequest } from 'next/server';
import { z } from 'zod';

// Define validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100, 'Company name must be less than 100 characters').optional(),
  phone: z.string().max(20, 'Phone number is too long').optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate and sanitize input
    const validatedData = contactFormSchema.parse(body);

    // TODO: Implement actual email sending or database storage
    // For now we're just validating and sanitizing the data
    console.log('Validated contact form data:', validatedData);

    // In a real implementation, you would send an email or save to database here
    // Use a service like SendGrid, AWS SES, or similar for email
    
    return new Response(JSON.stringify({ message: 'Form submitted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
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