import Image from "next/image";
import React from "react";
import test from "@assets/test.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="m-auto w-full max-w-[1240px] px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2">
            <div className="h-full lg:p-4">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  className="rounded-xl duration-300 ease-in hover:scale-105"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Frontend Developer</p>
                <p className="py-4">
                  I am available for freelance or part-time positions.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect with me!</p>
                <div className="flex items-center justify-between py-4">
                  <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                    <FaLinkedin />
                  </div>
                  <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                    <FaGithub />
                  </div>
                  <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                    <FaTwitter />
                  </div>
                  <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                    <AiOutlineMail />
                  </div>
                  <div className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="py-2 text-sm uppercase">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="text"
                      className="flex rounded-lg border-2 border-gray-300 p-3"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="py-2 text-sm uppercase">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex rounded-lg border-2 border-gray-300 p-3"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="py-2 text-sm uppercase">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="flex rounded-lg border-2 border-gray-300 p-3"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="py-2 text-sm uppercase">
                    Message
                  </label>
                  <textarea
                    className="rounded-lg border-2 border-gray-300 p-3"
                    name="message"
                    id="message"
                    rows={10}
                  ></textarea>
                </div>
                <button className="mt-4 w-full p-4 text-gray-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="#">
            <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <HiOutlineChevronDoubleUp
                size={30}
                className="m-auto text-primary"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
