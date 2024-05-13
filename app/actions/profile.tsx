'use server'


import clientPromise from '../helpers/api/database';
import { profileFormSchema } from '../lib/definitions';


export async function profileUpdate(formData: FormData) {
  // Validate form fields
  const validatedFields = profileFormSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    profilePic: formData.get('profilePicture'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { username, profilePic, email } = validatedFields.data

  try {
    const client = await clientPromise;
    const db = client.db("ImpactToDB");
    const updatedValue = { $set: { profilePic: btoa(profilePic), username } };
    const userCollection = db.collection('users');
    const user = await userCollection.findOne({ email: email });
    if (user) {
      await userCollection.updateOne({ _id: user._id }, updatedValue);
    } else {
      throw new Error("User not found!")
    }
  } catch (err) {
    console.log(err);
  }
}
