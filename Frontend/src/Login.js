import React, { useState } from "react";

function Login() {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const handleSubmit = () => {
    console.log(loginDetails)
  };
  return (
    <div className="p-3 ">
      <form>
        <div className="flex">
          <label className="">Email</label>
          <input
            type="text"
            className="border-gray-400 border-2 px-3 py-1 rounded-md"
            value={loginDetails.email}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value })
            }
          />
        </div>
        <div className="flex">
          <label className="">Password</label>
          <input
            type="password"
            className="border-gray-400 border-2 px-3 py-1 rounded-md"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
