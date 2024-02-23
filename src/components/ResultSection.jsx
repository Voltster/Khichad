import React from "react";
import Card from "./Card";
import image1 from "../assets/img1.png"
import image2 from "../assets/img2.png"


const cardDetails = [
    {
      img: `${image1}`,
      title: "Liferay",
      decription:
        "Build the solutions you envision with the Liferay Digital Experience Platform, known for its flexibility, composability, and authentication. Whether B2B, B2C, or B2E, empower your entire business.",
      url: `https://unsplash.com/`,
    },
    {
      img: `${image2}`,
      title: "Salesforce",
      decription:
      "Build the solutions you envision with the Liferay Digital Experience Platform, known for its flexibility, composability, and authentication. Whether B2B, B2C, or B2E, empower your entire business.",
      url: `https://unsplash.com/`,
    },
    {
      img:`${image2}`,
      title: "Appian",
      decription:
        "Appian is a software company that automates business processes. The Appian AI Process Platform includes everything you need to design, automate, and optimize even the most complex processes, from start to finish. ",
      url: `https://unsplash.com/`,
    },
    {
      img:`${image1}`,
      title: "Informatica MDM",
      decription:
      "Appian is a software company that automates business processes. The Appian AI Process Platform includes everything you need to design, automate, and optimize even the most complex processes, from start to finish. ",
      url: `https://unsplash.com/`,
    },
  ];
  

const ResultSection = () => {
  return (
    <section className="p-[4.25rem] bg-[#F3F6FF]">
        <h1 className="text-[#00154F] text-[2.5rem] leading-[5rem] text-center">Delivering Outstanding Results through Scalability and Versatility</h1>
        <p className="text-center text-[#1B1B1B] leading-[1.2rem] w-[80vw] mx-auto">Our development services and dedicated teams cover the full spectrum of software requirements and scale both for early-stage startups and large-scale global enterprises.</p>
      {
        <div className="flex flex-wrap justify-center gap-4">
          {cardDetails.map((detail, index) => (
            <Card key={index} detail={detail} />
          ))}
        </div>
      }
    </section>
  );
};

export default ResultSection;
