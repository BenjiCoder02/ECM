import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between items-center bg-black text-white">
      <Link href="/"><h1 className="tracking-widest text-xl ml-2 font-extrabold">ECM</h1></Link>
      <ul className="flex w-80 justify-evenly">
        <li className="p-5">
          <Link href='/about'>About</Link>
        </li>
        <li  className="p-5">
          <Link href='/login'>Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
