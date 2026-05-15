import LoginForm from '../components/LoginForm'
export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto mt-16">
      <div className="bg-white p-8 rounded-lg border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome back
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Log in to your account
        </p>
        <LoginForm />
      </div>
    </main>
  )
}