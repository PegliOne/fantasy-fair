import { useState } from "react";
import LoginForm from "./LoginForm";

const LogIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return ( 
    <main>
      <h1>Log In</h1>
      <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
    </main>
  );
}
 
export default LogIn;