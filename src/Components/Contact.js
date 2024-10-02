import React from "react";

function Contact() {
  return (
    <div className="flex flex justify-center bg-gray-800 text-blue-200 w-screen">
      <div className=" mt-4 ml-4 h-96 w-96 border-2 rounded-md text-center">
        <div className="mt-8">
          <strong className=" mb-4 text-4xl">Contact Us</strong>
          <p className="text-lg mt-4">
            <i>Alex street Near watch bring</i>
          </p>
          <p className="text-xl">
            <i>Washington</i>
          </p>
          <p className="mt-8 text-lg">
            For more help
            <br></br>
            
          </p>
        </div>
      </div>
      <div className=" mt-4 ml-4 h-96 w-96 border-2 rounded-md">
        <div className="flex-col flex justify-center mt-16 ">
          <input
            className="ml-4 mb-2 h-10 w-72"
            text=""
            placeholder=" Full Name"
          ></input>
          <input
            className="ml-4 mb-2 h-10 w-72"
            text=""
            placeholder=" Email"
          ></input>
          <input
            className="ml-4 mb-2 h-10 w-72"
            text=""
            placeholder=" Address"
          ></input>
          <button className="text-lg mt-4  w-48 ml-16 bg-gray-600 h-10 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
