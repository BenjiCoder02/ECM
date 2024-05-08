import bcrypt from 'bcryptjs';

export const saltAndHashPassword = (password: String) => {
  return bcrypt.hash(password, 10);
}