import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { BiCopy } from "react-icons/bi";
import toast from "react-hot-toast";

const CodeHighlight = ({
  language,
  codeString,
  caption,
}: {
  language: string;
  codeString: string;
  caption?: string;
}) => {
  const copyCode = () => {
    toast.success("Code was copied to clipboard", {
      id: "copy-code-success",
    });
    navigator.clipboard.writeText(codeString);
  };

  return (
    <div className="flex flex-col rounded-md border-2 border-gray-300 p-1 dark:border-gray-700">
      <div className="flex flex-row justify-between text-gray-500">
        <p className="ml-2 text-sm italic">{language}</p>
        <button
          className="flex items-center justify-center rounded-md px-1 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={copyCode}
        >
          <BiCopy className="mr-1" /> Copy
        </button>
      </div>
      <div className="rounded-xl">
        <SyntaxHighlighter
          language={language}
          style={darcula}
          customStyle={{ margin: "0rem", padding: "1.2rem" }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
      {caption && (
        <p className="text-center text-sm italic text-gray-500">{caption}</p>
      )}
    </div>
  );
};

export default CodeHighlight;
