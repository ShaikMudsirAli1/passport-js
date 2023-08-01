import { useEffect, useState } from "react"; // Import useState
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null); // Use state to store the user status

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:3000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed"); // Return error if user is not logged in or an error occurs
        })
        .then((resObject) => {
          setUser(resObject.user); // Set the user state based on the response
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUser(); // Call the function to check user status on component mount
  }, []);

  return (
    <>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
