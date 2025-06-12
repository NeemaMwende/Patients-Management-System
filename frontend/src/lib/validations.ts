import { z } from 'zod';

export const patientFormSchema = z.object({
  first_name: z.string().min(2, 'First name must be at least 2 characters'),
  last_name: z.string().min(2, 'Last name must be at least 2 characters'),
  date_of_birth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['M', 'F', 'O'], {
    required_error: 'Please select a gender',
  }),
  phone_number: z.string().min(10, 'Phone number must be at least 10 digits'),
  email: z.string().email('Invalid email address').optional().or(z.literal('')),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  emergency_contact_name: z.string().min(2, 'Emergency contact name is required'),
  emergency_contact_phone: z.string().min(10, 'Emergency contact phone is required'),
  blood_type: z.string().optional(),
  allergies: z.string().optional(),
  medical_history: z.string().optional(),
});

export type PatientFormValues = z.infer<typeof patientFormSchema>;