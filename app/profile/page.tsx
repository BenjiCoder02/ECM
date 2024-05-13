'use client'

import { Input } from "@mui/material";
import { useCallback, useState } from "react";
import { useSession } from 'next-auth/react';
import { profileUpdate } from "../actions/profile";

export default function Profile() {
  const session = useSession();
  const [imageSrc, setImageSrc] = useState();
  const [username, setUsername] = useState('');
  const getUrlForImagePreview = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setImageSrc(event.target.files[0])
  }, []);

  return (
    <main className="w-auto flex items-center justify-center h-4/5 flex-1">
      <div className="w-auto m-auto flex items-center justify-center h-1/2 p-4 bg-gray-200 rounded-md">
        <form action={profileUpdate} className="w-auto flex flex-col justify-evenly items-start">
          <label htmlFor="username" className="m-4 w-11/12">
            <Input type="text" placeholder="Username" name="username" style={{ width: '100%' }} />
          </label>
          <label htmlFor="email" className="m-4 w-11/12">
            <Input type="text" disabled={false} className="cursor-not-allowed pointer-events-none" style={{ width: '100%' }} name="email" value={session?.data?.user?.email} />
          </label>
          <label htmlFor="profilePicture" className="m-4">
            <Input onChange={getUrlForImagePreview} type="file" placeholder="profilePicture" name="profilePicture" />
          </label>
          <button className="bg-blue-700 p-3 rounded text-white m-auto" type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
