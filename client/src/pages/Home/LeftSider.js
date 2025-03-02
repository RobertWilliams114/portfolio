import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row sm:py-10">
          <a href="https://robertwilliams.onrender.com/resume">
            <i class="ri-article-line text-[#8E99E3] text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/robert-williams-503165236/">
            <i class="ri-linkedin-box-fill text-[#8E99E3] text-xl"></i>
          </a>
          <a href="https://github.com/RobertWilliams114">
            <i class="ri-github-fill text-[#8E99E3] text-xl"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#1c2541] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
