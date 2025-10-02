import { useState } from "react";
import MainPhoto from "../components/main/main-photo";
import SignIn from "../components/main/sign-in";
import SignUp from "../components/main/sign-up";
const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex h-screen bg-[#27277d] ">
      {/* ekranın sağ tarafı  */}
      <div className="w-1/2">
        <MainPhoto />
      </div>
      {/* ekranın sol tarafı */}
      <div className="container w-1/2 flex flex-col items-center justify-center relative">
        {isSignUp ? <SignUp /> : <SignIn />}
        {/* GEÇİŞ BUTONU */}

        <button className="" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <span className="underline cursor-pointer text-pink-400 hover:text-pink-600">
                Sign In
              </span>
            </>
          ) : (
            <>
              No Account for Login?{" "}
              <span className="underline cursor-pointer text-pink-400 hover:text-pink-600">
                Create Account
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
