import React from "react";

const About = () => {
  return (
    <div id="about" className="flex w-full items-center p-2 py-16 md:h-screen">
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-primary ">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">// My story so far...</p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut
            eaque eligendi voluptatibus ea vel, suscipit a corporis deleniti
            expedita esse, culpa reprehenderit inventore voluptatem quos,
            assumenda unde molestiae voluptates ducimus. Quas sunt omnis,
            voluptas doloremque alias totam suscipit molestiae quod reiciendis
            voluptatum velit illo deserunt assumenda voluptatem dicta maiores.
          </p>
          <p className="cursor-pointer py-2 text-gray-600 underline">
            Check out some of my latest projects!
          </p>
        </div>
        <div className="m-auto flex h-auto w-full items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Notebook"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
