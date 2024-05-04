'use client'
import { signup } from '@/app/actions/auth'
import { useFormState, useFormStatus } from 'react-dom';

function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex justify-center items-center bg-sky-500 h-10 w-32 text-white border-2 m-1 p-2 rounded-3xl"
    >
      {pending ? 'Submitting...' : 'Login'}
    </button>
  );
}

export default function LoginPage() {
  const [state, action] = useFormState(signup, undefined)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')


    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })

    if (response.ok) {
    } else {
      // Handle errors
    }
  }

  return (
    <div className="h-full flex justify-center items-center">
      <form action={signup} className="flex flex-col justify-evenly items-center">
      <input className="h-10 w-50 border-slate-400 border-2 m-1 p-2 rounded-sm" type="text" name="name" placeholder="Name" required />
        <input className="h-10 w-50 border-slate-400 border-2 m-1 p-2 rounded-sm" type="email" name="email" placeholder="Email" required />
        <input className="h-10 border-slate-400 border-2 m-1 p-2 rounded-sm" type="password" name="password" placeholder="Password" required />
        <SignupButton />
        {state?.errors?.name && <p>{state.errors.email}</p>}
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  )
}
