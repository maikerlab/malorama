import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";

export default function Expandable({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <HiChevronUp
              className={`${
                open ? "rotate-180 transform" : ""
              } mx-auto mr-3 h-5 w-5 text-purple-500`}
            />
            <span className="w-full">{title}</span>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-start text-sm text-gray-500">
            {content}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
