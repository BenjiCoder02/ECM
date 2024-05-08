import { SignIn } from "@/components/SignIn/SignIn";

export default function Home() {
  return (
    <main className="w-auto flex items-center justify-center h-full bg-gray-200">
      <div className="w-auto m-auto flex items-center justify-center h-1/2">
        <div className="w-3/6">
          <h1 className="font-extrabold text-xl">ECM</h1>
          <h3>Connect with friends and the world around you on ECM.</h3>
        </div>
        <div className="w-3/6">
          <SignIn />
        </div>
      </div>
    </main>
  );
}
