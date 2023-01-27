import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import maik from "public/images/maik.jpg";

export default function Hero() {
  return (
    <section id="hero" className="lg:flex">
      <div>
        <div className="p-10 text-center">
          <h2 className="py-2 text-3xl font-medium">Hi, I am Maik!</h2>
          <h3 className="py-2 text-xl">Student of Computer Science</h3>
          <p className="text-md mx-auto max-w-xl py-2 leading-8 text-gray-800 dark:text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            totam excepturi ducimus natus nihil odio mollitia ab ea perferendis
            quia placeat delectus consequuntur aliquam saepe dolorem eligendi,
            quisquam commodi sit minima. Rerum nulla sit accusantium eveniet
            ipsa, consequuntur ducimus earum iure voluptate? Soluta, commodi. A
            cumque quo asperiores quos enim.
          </p>
        </div>
        <div className="flex justify-center gap-12 py-2 text-3xl text-gray-600">
          <Link
            href="https://github.com/maikerlab"
            className="hover:text-blue-500"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/maik-lorenz-5b7780bb/"
            className="hover:text-blue-500"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            href="https://twitter.com/malorama"
            className="hover:text-blue-500"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
      </div>
      <div className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full">
        <Image
          src={maik}
          fill={true}
          style={{ objectFit: "cover" }}
          alt="Maik"
        />
      </div>
    </section>
  );
}
