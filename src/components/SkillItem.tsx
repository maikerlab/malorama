import React, { ReactElement } from "react";

interface ISkillItem {
  title: string;
  details: string;
  icon: ReactElement;
}

const SkillItem = ({ title, details, icon }: ISkillItem) => {
  return (
    <div className="group h-full rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
      <div className="grid h-full grid-cols-2 items-center justify-center gap-4 group-hover:opacity-0">
        <div className="m-auto">{icon}</div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="absolute top-[50%] left-[50%] hidden h-auto w-full translate-x-[-50%] translate-y-[-50%] group-hover:block">
        <p className="m-1 text-center text-sm dark:text-gray-400">{details}</p>
      </div>
    </div>
  );
};

export default SkillItem;
