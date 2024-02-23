import React from "react";
import story from "../assets/story.png";

const StorySection = () => {
  return (
    <section className="bg-[#F3F6FF] p-[4.25rem] pb-[10rem]">
      <h2 className="text-[#00154F] text-[2.5rem] leading-[3rem] text-center font-semibold ">
        Success Story <br />
        Empowering IT Excellence with Khichad Technologies
      </h2>
      <div className="w-11/12 mt-12 relative">
        <img src={story} alt="" />
        <div className=" absolute w-6/12 bg-white right-10 top-[40%] px-[3.5rem] py-[5rem] rounded-md">
          <h3 className="text-[1.5rem] text-gray-800">XYZ Solutions</h3>
          <p className="text-[#6D758F] mt-4">
            A prominent IT firm, XYZ Solutions, sought our expertise at Khichad
            Technologies to streamline a critical project requiring specialized
            knowledge in the Liferay platform. Faced with tight deadlines and
            resource limitations, they turned to us for immediate access to
            skilled developers capable of seamlessly integrating with their
            team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
