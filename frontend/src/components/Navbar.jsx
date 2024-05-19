import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="text-black bg-white body-font  max-w-[1280px] mx-auto">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 1024 1024"
              className="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M511.3 676.9m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z"
                fill="#E73B37"
              />
              <path
                d="M960 756V138.5H64V756h320.1v85.5H256.2v44h511.9v-44h-128V756H960zM108 182.5h808v427.1H108V182.5z m488.1 659h-168V756h168v85.5zM108 712v-82.5h808V712H108z"
                fill="#39393A"
              />
              <path
                d="M167.536 327.703l90.72-90.721 14.143 14.142-90.721 90.72zM172.959 423.469l181.159-181.16 14.142 14.143L187.1 437.61z"
                fill="#E73B37"
              />
            </svg>
            <span className="ml-3 text-xl text-black">Skillshala</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center gap-4 ml-4 text-xl justify-center">
            <a className="mr-5 hover:text-pink-500">Home</a>
            <a className="mr-5 hover:text-pink-500">Courses</a>
            <a className="mr-5 hover:text-pink-500">Pricing</a>
            <a className="mr-5 hover:text-pink-500">Contact Us</a>
          </nav>
          <button className="inline-flex items-center bg-pink-500 border-0 py-3 px-5 focus:outline-none hover:bg-pink-600 rounded text-xl text-white mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
