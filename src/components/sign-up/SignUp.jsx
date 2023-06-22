import { useState } from "react";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return ( 
    <main>
      <h1>Sign Up</h1>
      <SignUpForm username={username} setUsername={setUsername} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
    </main>
  );
}
 
export default SignUp;