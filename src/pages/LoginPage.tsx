import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {
   setIsLoggedIn : (isLoggedIn: boolean) => void;
}
const LoginPage = (props:LoginPageProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  function handleSubmit() {
    console.log("Email:", email);

    if (email === "") {
      setError("Email is Required");
      return;
    }

    console.log("Password", password);

    if (password === "") {
      setError("Password is Required");
      return;
    }

    setError(" ");
    // alert("Login successful!" + email);
    props.setIsLoggedIn(true);
    navigate("/home");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login Page
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="UserName"
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;