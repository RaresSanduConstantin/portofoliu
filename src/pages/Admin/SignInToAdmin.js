import React, {useState} from "react";

const SignInToAdmin = ({setConnection}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === process.env.REACT_APP_ADMIN_EMAIL && password === process.env.REACT_APP_ADMIN_PASSWORD) {
          setConnection(true)
        } else {
          setConnection(false)
        }
    }


  return (
    <div>
      <h1>Sign In</h1>
      <form style={{display:'flex',flexDirection:'column', width:'50vw', margin:'auto'}}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <hr/>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={handleSubmit}>Sign In</button>
      </form>

    </div>
  );
}

export default SignInToAdmin;
