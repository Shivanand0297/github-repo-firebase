import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

// firebase initialization
import { initializeApp } from "firebase/app";

// firebase config
import firebaseConfig from "./config/FirebaseConfig";

// firebase connected
initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState([]); //to store logged in user email

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
