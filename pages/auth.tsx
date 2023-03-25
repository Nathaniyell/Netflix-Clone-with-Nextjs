import { useCallback, useState } from "react";
import Input from "@/components/Input";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-6 md:p-16 self-center mt-10 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-3xl mb-8 font-semibold">
              {variant === "login" ? "Sign in" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
                {variant === 'register' && <Input
                type="username"
                label="Username"
                onChange={(e: any) => {
                  setUserName(e.target.value);
                }}
                id="username"
                value={userName}
              />}
              
              <Input
                type="email"
                label="Email"
                onChange={(e: any) => {
                  setEmail(e.target.value);
                }}
                id="email"
                value={email}
              />
              <Input
                type="password"
                label="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                id="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white w-full rounded-md mt-8 hover:bg-red-700 tansition">
              {variant === "login"? "Login": "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-10">
             {variant === "login"? 'First time using Netflix?' : "Already have an account?" } 
              <span
                onClick={toggleVariant}
                className="text-white hover:underline ml-1 cursor-pointer"
              >
                 {variant === "login"? "Create an account": "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
