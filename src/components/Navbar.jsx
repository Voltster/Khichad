// import useState from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="text-[#222] flex  justify-around items-center bg-[#E9ECFF] leading-[ 1.375rem] h-[3.25rem]">
        <div className="flex gap-x-4">
          <a href="mailto:rohitkumarmishra954@gmail.com">sales@khichad.com</a>
          <a href="tel:+9540243331">(517) 248 - 2884</a>
        </div>
        <div className="flex gap-x-4">
          <select id="cars" className="bg-transparent">
            <option value="Global">Global Preserence</option>
            <option value="saab">India</option>
            <option value="opel">USA</option>
          </select>
          <select id="cars" className="bg-transparent">
            <option value="About">About Us</option>
            <option value="saab">Why us</option>
            <option value="opel">FAQ</option>
            <option value="audi">Careers</option>
          </select>
        </div>
      </div>
      <nav className="bg-gray-50 py-[0.625rem] px-[5.6875rem]">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center">
            <a href="#" className="text-[#222] text-xl font-bold">
              <img src={logo} alt="logo" />
            </a>
            <ul className="hidden md:flex items-center gap-4  mx-6 ml-10 2xl:ml-[8rem]">
              <li>
                <a href="/" className="px-2 py-2 ">
                  Why Kichad
                </a>
              </li>
              <li>
                <a href="/about" className="px-2 py-2 ">
                  Our Expertise
                </a>
              </li>
              <li className="relative group">
                <button
                  // onClick={toggleWhyUs}
                  className="px-2 py-2 focus:outline-none  flex items-center  rounded-md relative z-10"
                >
                  Solutions
                 
                </button>
                <ul className="absolute bg-gray-50 py-4 px-6 mt-2 rounded shadow-md w-48 hidden group-hover:block z-20 ">
                  <li>
                    <a href="/why-us/team" className="px-4 py-2 ">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="/why-us/work" className="px-4 py-2 ">
                      Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="/why-us/faq"
                      className="px-4 py-2 hover:bg-gray-700"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact" className="px-2 py-2 ">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="px-2 py-2 ">Our Journey Together</a>
              </li>
              <li>
                <a href="" className="px-2 py-2 ">Careers</a>
              </li>
            </ul>
            <a
              href=""
              className="py-[0.75rem] px-[2rem] bg-[#0EBB19] rounded-md"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
