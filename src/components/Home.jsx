import Button from "./Button";
import herobg from "../assets/herobg.png";

const Home = () => {
  return (
    <>
      <section
        className="w-[100vw] h-[80vh] relative"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <div className="w-[50vw] bg-[#00154F80] h-[80vh] flex justify-center items-center ">
          <div className="ml-16">
            <h1 className="text-[3rem] text-white">
              BUILDING SCALABLE, <br />
              <span className=" font-bold">CUSTOMER CENTRIC SOFTWARE</span>{" "}
            </h1>
            <Button customClass="mt-12" text="Learn More" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
