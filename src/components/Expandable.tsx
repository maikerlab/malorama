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
        <div className="rounded-lg bg-surface shadow-lg">
          <Disclosure.Button
            className={`${
              open ? "rounded-t-lg" : "rounded-lg"
            } flex w-full bg-primary px-4 py-2 text-left text-sm font-medium text-skin-on-primary hover:bg-primary-variant focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
          >
            <HiChevronUp
              className={`${
                open ? "rotate-180 transform" : ""
              } mx-auto mr-3 h-5 w-5 text-skin-on-primary`}
            />
            <span className="w-full">{title}</span>
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 py-4 text-start text-sm text-skin-on-surface">
            {content}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
