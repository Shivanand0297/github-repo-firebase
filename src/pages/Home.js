import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Repos from "../components/Repos";
import UserCard from "../components/UserCard";
import { UserContext } from "../context/UserContext";

const Home = () => {

  const [search, setSearch] = useState("")  //to store and update the search value
  const [userData, setUserData] = useState(null)  //to store the api data
  const {user} = useContext(UserContext)

  const fetchDetails = async() =>{
    try {
      const {data} = await axios.get(`https://api.github.com/users/${search}`) // making get request
      console.log(data);
      setUserData(data)

    } catch (error) {
      console.log(error.message);
      toast(`User not found
        ${error.message}`, {
          type: "error",
          position: "bottom-center"
        })
    }
  }

  const navigate = useNavigate()

  if(!user.uid){
    return navigate("/signin")
  }

  return (
    <div className="w-auto m-4 p-2 ">
      <div className="flex flex-col items-center justify-around gap-10" >
        <div className=" flex flex-row items-center relative w-full sm:w-1/2 mx-auto">
          <div className="absolute left-0 bottom-14 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            className="block w-full p-4 mb-10 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by GitHub user name"
            required
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
          />
          <button
            type="submit"
            className="text-white absolute right-2 bottom-12 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={fetchDetails}
          >
            Fetch user
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10 p-4" >
        { userData ? <UserCard userData={userData} /> : null }
        { userData ? <Repos repos_url={userData.repos_url} /> : null }
        </div>
      </div>
    </div>
  );
};

export default Home;
