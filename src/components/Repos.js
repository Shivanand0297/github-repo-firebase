import axios from "axios";
import React, { useEffect, useState } from "react";

const Repos = ({repos_url}) => {

    const [repos, setRepos] = useState([])

    // as soon as the component load it should display the repos
     const fetchRepos = async () =>{
        const {data} = await axios.get(repos_url)
        setRepos(data)
     }

     useEffect(() => {
       fetchRepos()
     }, [repos_url])
     

  return (
    <ul className="w-auto divide-y divide-gray-200 dark:divide-gray-700">
      { repos.map(repo=>(
        <li className="pb-3 sm:pb-4" key={repo.id} >
        <div className="flex items-center space-x-4">
          <div className=" min-w-0">
            <p className=" mt-4 text-xs sm:text-sm font-medium text-gray-900 truncate dark:text-white">
              {repo.name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {repo.description}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {repo.language}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              watchers: {repo.watchers}
            </p>
          </div>
        </div>
      </li>
      )) }
    </ul>
  );
};

export default Repos;
