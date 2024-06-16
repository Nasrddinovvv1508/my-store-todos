import useLogin from "../hooks/useLogin"
import FormInput from "../components/FormInput"

import { Form, useActionData } from "react-router-dom"

export let action = async ({ request }) => {
  let formData = await request.formData();
  let displayName = formData.get(`displayName`);
  let email = formData.get(`email`);
  let password = formData.get(`password`);

  return { displayName, email, password }
}

function Login() {
  let data = useActionData();

  let { signInWithGoogle } = useLogin();

  return (
    <div className="w-[500px] border-2 p-9 rounded-xl border-slate-400 flex flex-col justify-center gap-8 items-center mx-auto mt-[120px]">
      <Form method="post" className="flex flex-col gap-7">
        <h1 className="text-3xl mb-2 text-center font-semibold">Login</h1>
        <FormInput name={`email`} type={`email`} inputPlaceholder={`Your Email`} />
        <FormInput name={`password`} type={`password`} inputPlaceholder={`Your Password`} />
        <button className="btn btn-primary">Submit</button>
      </Form>
      {/* <button onClick={signInWithGoogle} className="btn btn-secondary btn-block">Contiunie With Google</button> */}
    </div>
  )
}

export default Login