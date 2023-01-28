import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest text-primary uppercase ">
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
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
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
