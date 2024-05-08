import Link from "next/link";
import SignUpForm from "./Signup/SignupForm";

function Header() {
  return (
    <div className="flex justify-between items-center bg-black text-white fixed w-full">
      <Link href="/"><h1 className="tracking-widest text-xl ml-2 font-extrabold">ECM</h1></Link>
      <ul className="flex w-80 justify-evenly">
        <li className="p-5 flex justify-center items-center">
          <Link href='/about'>About</Link>
        </li>
        <li className="p-5">
          <SignUpForm />
        </li>
      </ul>
    </div>
  );
}

export default Header;
