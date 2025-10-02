import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5052/users?email=${email}&password=${password}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          console.log("Login successful:", data[0]);
          navigate("/home");
        } else {
          console.log("Invalid credentials");
        }
      });
  };
  return (
    <div className="container mb-2 mr-40">
      <div className="mb-10">
        <h1
          className="font-bold text-pink-100 text-3xl ml-24 "
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          LOGIN
        </h1>
        <h2 className="text-sm text-zinc-400">
          Please enter your password to continue
        </h2>
      </div>
      <form
        className="w-3/4 flex flex-col gap-6 pt-1 pb-2"
        onSubmit={handleLogin}
      >
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-pink-400 hover:bg-pink-700 cursor pointer text-white p-2 rounded-full w-30 ml-15"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
