import React from "react";

const SchoolCard = ({ school }) => {
  const BASE_URL = "http://localhost:5000";

  return (
    <div>
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div>
          <img
            src={`${BASE_URL}/${school.image}`}
            alt="School"
            className="h-52 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72 h-40">
            <span className="text-blue-300 mr-3 uppercase text-xs">
              {school.city}
            </span>
            <p className="text-lg font-bold text-black truncate block capitalize mt-2">
              {school.name}
            </p>

            <p className="text-sm text-gray-600 cursor-auto ml-1 mt-1">
              Add: {school.address}
            </p>
            <p className="text-sm text-gray-600 cursor-auto ml-1 mt-1">
              Ph: {school.contact}
            </p>
            <p className="text-sm text-gray-600 cursor-auto ml-1 mt-1">
              Email: {school.email_id}
            </p>
          </div>
          <div className="flex justify-center pb-3">
            <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                View Details
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
