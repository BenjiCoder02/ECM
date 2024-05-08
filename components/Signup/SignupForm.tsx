import { signIn, auth, signOut } from "../../auth.ts"

async function SignUpForm() {
  const session = await auth();
  const userAuthenticated = session !== null && session?.user !== null;
  const buttonText = userAuthenticated ? 'Sign out' : 'Sign In/Sign Up';
  console.log(session)
  return (
    <form
      action={async () => {
        "use server"
        if (userAuthenticated) {
          await signOut({ redirect: true, redirectTo: '/' });
        } else {
          await signIn('email', { redirect: true, redirectTo: `/` });
        }
      }}
    >
      <button type="submit" className="bg-blue-700 p-3 rounded text-white">{buttonText}</button>
    </form>
  )
}

export default SignUpForm;
