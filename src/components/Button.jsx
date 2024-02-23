// import React from 'react'

const button = ({ customClass, text }) => {
  return (
    <button className={`text-white text-[0.875rem] font-bold py-[0.75rem] px-[2rem] rounded-md border-2 border-white bg-transparent ${customClass}`}>
      <a
        href="#"
      >
        {text}
      </a>
    </button>
  );
};

export default button;
