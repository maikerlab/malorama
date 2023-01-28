import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

interface IBoxContent {
  title: string;
  content: string;
}

const CollapseBox = ({ title, content }: IBoxContent) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="group my-3 w-full rounded-xl shadow-lg">
      <div
        className={`${
          expanded ? "rounded-b-none" : "rounded-b-xl"
        } relative flex cursor-pointer items-center rounded-t-xl bg-gradient-to-br from-gray-300 to-gray-200 py-4 px-5 text-left text-gray-800`}
        onClick={toggleExpanded}
      >
        <div className="mr-2">
          {expanded ? <HiChevronUp size={30} /> : <HiChevronDown size={30} />}
        </div>
        <h4 className="text-md font-bold">{title}</h4>
      </div>
      {expanded && <div className="py-4 px-5">{content}</div>}
    </div>
  );
};

export default CollapseBox;
