import Image from "next/image";

const Projects = () => {
  return (
    <div className="container">
      <hgroup>
        <h2>Projects</h2>
        <h3>This is what I am/was working on.</h3>
      </hgroup>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus,
        mollitia delectus recusandae in dolor ad doloribus aut iusto nihil
        laborum unde eum adipisci nulla maiores, assumenda enim dolorum quis
        molestias alias incidunt exercitationem quia. Numquam eius est totam
        incidunt explicabo necessitatibus voluptatum reprehenderit laborum
        obcaecati, sequi quas suscipit, dolorum assumenda!
      </p>
      <div className="features">
        <article>
          <a href="#" className="image">
            <Image src="/images/pic01.jpg" alt="" width={250} height={250} />
          </a>
          <div className="inner">
            <h4>Possibly broke spacetime</h4>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer adipiscing ornare amet.
            </p>
          </div>
        </article>
        <article>
          <a href="#" className="image">
            <Image src="/images/pic02.jpg" alt="" width={250} height={250} />
          </a>
          <div className="inner">
            <h4>Terraformed a small moon</h4>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer adipiscing ornare amet.
            </p>
          </div>
        </article>
        <article>
          <a href="#" className="image">
            <Image src="/images/pic03.jpg" alt="" width={250} height={250} />
          </a>
          <div className="inner">
            <h4>Snapped dark matter in the wild</h4>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer adipiscing ornare amet.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Projects;
