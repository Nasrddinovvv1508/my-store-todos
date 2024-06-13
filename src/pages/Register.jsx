// hooks
import useLogin from "../hooks/useLogin"

function Login() {
  let { signInWithGoogle } = useLogin()
  return (
    <div >
      <button onClick={signInWithGoogle} className="btn btn-primary">Google</button>
    </div>
  )
}

export default Login