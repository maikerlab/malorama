import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

interface ITimelineEvent {
  date: string;
  title: string;
  description: string;
  location?: string;
}

const timeLineData: ITimelineEvent[] = [
  {
    date: "since 2020",
    title: "B. Sc. Computer Science for Technical Systems",
    description: "Computer Science with specialization for Embedded Systems",
    location: "HAW Hamburg, Germany",
  },
  {
    date: "2020-2022",
    title: "Working Student Software Development",
    location: "SICK AG, Remote",
    description:
      "Development of Linux Software, running in Docker Containers on an Embedded System, develop a Web Application with ASP.NET Core",
  },
  {
    date: "2016-2020",
    title: "Return Process Engineering",
    location: "SICK AG, Waldkirch, Germany",
    description:
      "Technical Support of international subsidiaries and the local repair department, development of a system aimed to assist Service Technicians while making device diagnostics",
  },
  {
    date: "2011-2016",
    title: "Calibration Technician",
    description:
      "Calibration and development of calibration procedures: Oscilloscopes, HF and LF measuring equipment",
    location: "testo industrial services GmbH, Kirchzarten, Germany",
  },
  {
    date: "2007-2011",
    title: "Apprenticeship",
    description: "Electronics technician for devices and systems",
    location: "BEHA-Amprobe GmbH, Glottertal, Germany",
  },
];

const Timeline = () => {
  return (
    <div>
      <p className="text-xl uppercase tracking-widest text-primary ">
        Timeline
      </p>
      <h2 className="py-4">What I already did in my career</h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {timeLineData.map((ev: ITimelineEvent, idx) => (
          <li className="mb-10 ml-4" key={idx}>
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {ev.date}
            </time>
            <h3 className="text-lg font-semibold leading-5 text-gray-900 dark:text-white">
              {ev.title}
            </h3>
            <span className="text-xs text-gray-500">{ev.location}</span>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {ev.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
