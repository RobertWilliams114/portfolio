import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Organizations() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { organizations } = portfolioData;
  return (
    <div>
      <SectionTitle title="Organizations" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className=" flex flex-col gap-10 border-l-2 border-[#1c2541] w-1/6 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {organizations.map((organization, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer">
              <h1
                className={` text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1c2541] py-3 sm:w-40"
                    : "text-white"
                } text-xl`}>
                {organization.company}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {organizations[selectedItemIndex].position}
          </h1>
          <h1 className="text-tertiary text-xl">
            {organizations[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            {organizations[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Organizations;
