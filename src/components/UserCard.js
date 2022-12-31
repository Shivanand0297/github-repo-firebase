import React from "react";

const UserCard = ({userData}) => {

  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-700">
        <img
          className="rounded-t-lg h-auto"
          src={userData.avatar_url}
          alt="avatar_img"
        />
      <div className="p-5">
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          Name: {userData.name}
          </h5>
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          Location: {userData.location}
          </h5>
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          Bio: {userData.bio}
          </h5>
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
          Followers: {userData.followers}
          </h5>
      </div>
    </div>
  );
};

export default UserCard;
