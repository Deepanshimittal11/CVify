import React, { useEffect } from "react";
import logo from "/logo.png";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/Services/login";
import { addUserData } from "@/features/user/userFeatures";

function Header({user}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      console.log("Printing From Header User Found");
    }
    else{
      console.log("Printing From Header User Not Found");
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response.statusCode == 200) {
        dispatch(addUserData(""));
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      id="printHeader"
      className="flex justify-between px-10 py-5 shadow-md items-center"
    >
      <img src={logo} alt="logo" width={150} height={150} />
      {user ? (
        <div className="flex items-center gap-4">
          <Button
            className="bg-green-400 hover:bg-green-500 text-white"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <Button
            className="bg-green-400 hover:bg-green-500 text-white"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Dashboard
          </Button>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            className="bg-green-400 hover:bg-green-500 text-white"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>
          <Link to="/auth/sign-in">
            <Button>Get Started</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
