import { auth } from "@/auth";
import Link from "next/link";
import { Person } from '@mui/icons-material';


async function Avatar() {
  const session = await auth();
  if (!session?.user) {
    return null;
  }

  return (
    <li className="flex items-center justify-center">
      <Link
        href="/profile"
        className="rounded-full h-10 w-10 m-auto bg-slate-400 flex items-center justify-center">
        <Person />
      </Link>
    </li>
  );
}

export default Avatar;
