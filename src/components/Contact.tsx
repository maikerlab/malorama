import Image from "next/image";
import React from "react";
import test from "@assets/test.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import contact from "@assets/contact.jpg";
import maik from "@assets/maik.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="m-auto w-full max-w-[1240px] px-2 py-16">
        <p className="text-xl uppercase tracking-widest text-primary">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* LEFT SIDE */}
          <div className="col-span-3 h-full w-full rounded-xl bg-surface p-4 text-skin-on-surface shadow-xl shadow-shades lg:col-span-2">
            <div className="h-full lg:p-4">
              <div className="p-2">
                <Image
                  src={maik}
                  width={500}
                  height={500}
                  alt="Contact me"
                  className="rounded-xl duration-300 ease-in hover:scale-105"
                />
              </div>
              <div>
                <h2 className="py-2">Maik Lorenz</h2>
                <p>Student (Bachelor of Science)</p>
                <p>Computer Science for Technical Systems</p>
              </div>
              <div>
                <p className="pt-8 uppercase text-primary">
                  Let&apos;s connect!
                </p>
                <div className="flex items-center justify-evenly py-4">
                  <Link
                    href="https://www.linkedin.com/in/maik-lorenz-5b7780bb/"
                    target="_blank"
                  >
                    <div className="cursor-pointer rounded-full bg-primary p-4 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-110">
                      {/* color="#0e76a8" */}
                      <FaLinkedin size={24} />
                    </div>
                  </Link>
                  <Link href="https://github.com/maikerlab" target="_blank">
                    <div className="cursor-pointer rounded-full bg-primary p-4 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-110">
                      {/* color="#333" */}
                      <FaGithub size={24} />
                    </div>
                  </Link>
                  <Link href="mailto:maik.lorenz@protonmail.com">
                    <div className="cursor-pointer rounded-full bg-primary p-4 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-110">
                      <AiOutlineMail size={24} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="relative col-span-3 h-auto w-full rounded-xl bg-surface text-skin-on-surface shadow-xl shadow-shades lg:p-4">
            <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-center rounded-xl bg-black/30 text-center dark:bg-black/80">
              <h2 className="text-lg lg:text-3xl">
                Under Construction, sorry!
              </h2>
            </div>
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
                    rows={5}
                  ></textarea>
                </div>
                <button className="mt-4 w-full p-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="#">
            <div className="cursor-pointer rounded-full bg-primary p-4 text-skin-on-primary shadow-lg shadow-shades duration-300 ease-in hover:scale-110">
              <HiOutlineChevronDoubleUp size={30} className="m-auto" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
