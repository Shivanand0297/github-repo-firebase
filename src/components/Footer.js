import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-white fixed bottom-0 w-full shadow md:p-6 dark:bg-gray-800">
      <p className="text-sm text-gray-500 text-center w-full dark:text-gray-400">
        © { new Date().getFullYear()} {" "}
        <Link to="/" className="hover:underline">
          GitHub Search with firebase
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
