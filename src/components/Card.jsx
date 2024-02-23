/* eslint-disable react/prop-types */
import React from "react";

const Card = ({ detail }) => {
  return (
    <div
      className="bg-contain bg-no-repeat w-[33.8125%] h-[350px]  relative  mx-4 my-12 rounded-lg"
      style={{ backgroundImage: `url(${detail.img})` }}
    >
      <div className="card-content absolute -bottom-[20%] mx-5 p-[1.25rem] rounded-md bg-white ">
        <h3 className="card-title text-2xl font-bold">{detail.title}</h3>
        <p className="card-description text-base">{detail.decription}</p>
        <button className="mt-8">
          <a
            href={detail.url}
            className="card-link text-gray-800 hover:underline cursor-pointer mt-8"
          >
            Read More
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
