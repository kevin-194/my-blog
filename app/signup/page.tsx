import SignupForm from '../components/SignupForm'
export default function SignupPage() {
  return (
    <main className="max-w-md mx-auto mt-16">
      <div className="bg-white p-8 rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Create account
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Sign up to get started
        </p>
        <SignupForm />
      </div>
    </main>
  )
}