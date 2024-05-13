import clientPromise from "../helpers/api/database"
import { NextApiRequest, NextApiResponse } from 'next';
import { saltAndHashPassword } from "../helpers/authHelpers";

class UsersRepository {

  getUserFromDb = async(email: String, password: String) => {
    try {
      const client = await clientPromise;
      const db = client.db("ImpactToDB");
      const user = await (await db.collections('users')).find({ email: email });

      if (!user) {
        return Promise.reject('User does not exist');
      }

      if (user && saltAndHashPassword(password) !== user.password) {
        return Promise.reject('Invalid Credentials');
      }

      return Promise.resolve('SUCCESS');
      
      
    } catch (e) {
      console.error(e);
    }
  }
}

export default UsersRepository;
