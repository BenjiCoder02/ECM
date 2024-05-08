import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { db } from '../../../helpers/api/database';

const { User } = db;

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {

    const data = req.body.formData();
    //const user = new User({ email: body.email, password: body.password });
    //user.save();

    return NextResponse.json({ status: "SUCCESS" });

  } catch (err) {
    console.log(err)
    return NextResponse.json({ status: err });
  }
}
