import React from "react";
import why from "../assets/why.png";
import Button from "./Button";

const WhyKhichad = () => {
  return (
    <section className=" p-[4.25rem]">
      <h2 className="text-[#00154F] text-[2.5rem] leading-[3rem] text-center font-semibold ">
        Why Khichad ?
      </h2>
      <p className="text-center text-[#556987] font-semibold leading-[1.2rem] w-[80vw] mx-auto mt-4">
        Khichad is a full service IT company with a wide range of services and
        solutions. We add efficiency to your operations with our enterprise
        solutions, increase visibility of your online presence to expand your
        reach, provide innovative digital learning solutions so your teams
        perform better, and keep your infrastructure.
      </p>
      <img src={why} alt="" className="mx-auto mt-12" />
      <div className="flex justify-center mt-12">
        <Button
          customClass=" border-1 border-blue-700  bg-blue-700 py-4 px-8 font-normal"
          text="Build Your Team"
        />
      </div>
    </section>
  );
};

export default WhyKhichad;
