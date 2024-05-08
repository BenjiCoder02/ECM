'use server'

import bcrypt from 'bcryptjs';

import { SignupFormSchema } from '@/app/lib/definitions'
import { db } from '../helpers/api/database';


const { User } = db;

export async function signup(formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { name, email, password } = validatedFields.data

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = new User({ email, password: hashedPassword, username: name });
    user.save();
  } catch (err) {
    console.log(err)
  }
}
