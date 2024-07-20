import React from "react";

const Teacher = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="">
        <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
            Key Person
        </p>
      </div>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      Meet our teachers
      </p>
      <div className="grid p-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <img className="rounded-3xl" src="/assets/t1.svg" alt="Teacher 1" />
          <p className="text-2xl font-semibold">Christian Howard</p>
          <div className="flex items-center gap-2">
            <img src="/assets/italy.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          Italian teacher
          </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <img className="rounded-3xl" src="/assets/t2.svg" alt="Teacher 2" />
          <p className="text-2xl font-semibold">Sandra Wilson</p>
          <div className="flex items-center gap-2">
            <img src="/assets/spain.svg" alt="itersfgjds" />
            <p className="text-gray-500">
            Spanish teacher
          </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <img className="rounded-3xl" src="/assets/t3.svg" alt="Teacher 3" />
          <p className="text-2xl font-semibold">Jimmy Cooper</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          English teacher
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;