import { signIn } from "../../auth.ts"

function SignUpForm() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button type="submit" className="bg-blue-700 p-3 rounded text-white">Sign In</button>
    </form>
  )
}

export default SignUpForm;
