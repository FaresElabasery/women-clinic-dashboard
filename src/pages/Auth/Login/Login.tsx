import LoginForm from "./Login.form";
export default function Login() {
  return (
    <div className="bg-[url('/src/assets/images/Auth-bg.svg')] bg-cover">
      <div className="container">
        <div className="flex-center h-screen">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
