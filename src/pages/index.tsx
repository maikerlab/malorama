import About from "@src/sections/about";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import maik from "public/images/maik.jpg";
import openSource from "public/images/open-source.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="hero" className="lg:flex">
        <div>
          <div className="p-10 text-center">
            <h2 className="py-2 text-5xl font-medium text-teal-600">
              Hi, I am Maik!
            </h2>
            <h3 className="py-2 text-2xl">Student of Computer Science</h3>
            <p className="text-md mx-auto max-w-xl py-5 leading-8 text-gray-800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore totam excepturi ducimus natus nihil odio mollitia ab ea
              perferendis quia placeat delectus consequuntur aliquam saepe
              dolorem eligendi, quisquam commodi sit minima. Rerum nulla sit
              accusantium eveniet ipsa, consequuntur ducimus earum iure
              voluptate? Soluta, commodi. A cumque quo asperiores quos enim.
            </p>
          </div>
          <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600">
            <Link
              href="https://github.com/maikerlab"
              className="hover:text-gray-900"
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
        <div className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-teal-500">
          <Image
            src={maik}
            fill={true}
            style={{ objectFit: "cover" }}
            alt="Maik"
          />
        </div>
      </section>
      <section id="skills" className="mt-20">
        <div>
          <h3 className="py-1 text-3xl">My Skills</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            From my professional background as an Electronic Engineer, I have 10
            years of experience with{" "}
            <span className="text-teal-500">Embedded Systems</span>.
            <br />I learned a lot about{" "}
            <span className="text-teal-500">Java</span> during my study.
          </p>
          <p className="text-md max-w-xl py-2 leading-8 text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ut, incidunt qui quis corporis cumque in earum error quae ipsam
            atque aut rem. Fuga aut voluptatibus officiis quas eos molestias
            accusamus consequatur! Odio, fugiat rerum tempore deserunt veritatis
            alias eveniet repellat, suscipit velit minima cum veniam eaque
            doloribus, placeat dignissimos!
          </p>
        </div>
        <div className="gap-10 lg:flex">
          <div className="my-10 rounded-xl p-10 text-center shadow-lg">
            <Image
              src={openSource}
              width={200}
              height={200}
              alt="Open Source"
              className="mx-auto"
            />
            <h3 className="pd-2 pt-8 text-lg font-medium">
              Open-Source Software
            </h3>
            <p className="py-2">
              Creating free and open source software (FOSS), usable for
              everyone!
            </p>
            <h4 className="py-4 text-teal-600">Tools I use</h4>
            <p className="py-1 text-gray-800">VisualStudio Code</p>
            <p className="py-1 text-gray-800">IntelliJ IDEA</p>
          </div>
        </div>
      </section>
    </>
  );
}
