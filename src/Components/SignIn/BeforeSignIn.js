import React, { useState } from "react";
const BeforeSignIn = ({ onLogin }) => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignInClick = () => {
    setShowForm(true);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "" && password.trim() !== "") {
      onLogin(email);
      return (
        <div>
          <h2>Sucessfull</h2>
        </div>
      );
    } else {
      alert("Please enter both email and password");
    }
  };
  return (
    <div className="before-signin">
      <button
        onClick={handleSignInClick}
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-[#3D3B3B]"
      >
        Sign In
      </button>
      <div className={`signin-form-container ${showForm ? "show" : ""}`}>
        {showForm && (
          <div
            className="rounded-lg bg-orange-200 flex justify-center items-center"
            style={{
              width: "400px",
              position: "absolute",
              marginTop: "300px",
              transform: "translate(-50%, -50%)",

            }}
          >
            <form onSubmit={handleFormSubmit}>
              <div className="">
                <h3 className="mt-7 text-2xl text-black font-semibold">SignIn</h3>
                <div className="flex flex-col py-10">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="text-black py-3 px-4 ml-3 w-full shadow-sm rounded-md"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <br />
                  <div className="my-5">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="text-black py-3 px-4 ml-3 w-full shadow-sm rounded-md"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <br />
                  <div className="my-5">
                    <button
                      className="bg-black text-white py-2 px-10 rounded-md hover:bg-[#3D3B3B]"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default BeforeSignIn;
