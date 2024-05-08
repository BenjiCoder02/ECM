import { SignIn } from "@/components/SignIn/SignIn";
import SignUpForm from "@/components/Signup/SignupForm";

export default function Home() {
  return (
    <main className="w-auto flex items-center justify-center h-4/5 bg-gray-200 flex-1">
      <div className="w-auto m-auto flex items-center justify-center h-1/2 p-4">
        <div className="w-auto">
          <h1 className="font-extrabold text-xl">ECM</h1>
          <h3>Connect with friends and the world around you on ECM.</h3>
        </div>
        <div className="w-3/6 flex items-center justify-center">
          <SignUpForm />
        </div>
      </div>
    </main>
  );
}
