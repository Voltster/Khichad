import React from "react";
import teamImg from "../assets/team.png";
import Button from "./Button";

const Team = () => {
  return (
    <section className=" p-[4.25rem]">
      <h2 className="text-[#00154F] text-[2.5rem] leading-[3rem] text-center font-semibold ">
        Build Your Team in Accordance with <br /> Your Corporate vision.
      </h2>
      <img src={teamImg} alt="" className="mt-12" />
      <p className="text-[#6D758F] text-center mt-8">
        Welcome to Khichad Technologies, your premier destination for top-tier
        IT services and staffing solutions. With a focus on excellence and
        innovation, we're excited to introduce a range of specialized offerings
        designed to elevate your organization's projects to new heights.
      </p>
      <div className="flex justify-center items-center gap-8 mt-10">
        <Button
          customClass=" border-1 border-blue-700  bg-blue-700 py-4 px-8 font-normal"
          text="Build Your Team"
        />
        <Button
          customClass=" border-1 border-blue-700 text-blue-700 py-4 px-8 font-normal hover:bg-blue-700 hover:text-white"
          text="Our Engagement Model"
        />
      </div>
    </section>
  );
};

export default Team;
