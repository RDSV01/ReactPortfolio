import React from "react";
import Tilt from "react-parallax-tilt";

const Card = () => {
  return (
    <div className="card">
      <Tilt
        className="onecard"
        perspective={5000}
        tiltMaxAngleX={5}
        tiltMaxAngleYl={5}
      >
        <h1>Test</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti
          similique in recusandae! Beatae ex aut expedita dignissimos nobis
          accusamus laboriosam dolore, nihil ad officiis! Et minima facilis
          accusamus maxime ullam, repellendus nam reprehenderit commodi atque
          quam libero unde distinctio obcaecati eos magnam, sapiente ipsa
          laboriosam, corrupti iure aliquam deserunt blanditiis odit eum? Totam
          consequuntur odit praesentium molestiae. Commodi, illo explicabo dolor
          debitis velit, esse sequi consectetur fugit cumque, omnis deleniti
          excepturi impedit ex soluta ipsa architecto rem aut eos nostrum
          placeat ad laborum praesentium distinctio! Quibusdam hic in nulla
          corrupti assumenda voluptatem, doloribus harum consectetur fugit
          tempora quisquam consequuntur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Hic deleniti similique in recusandae! Beatae ex aut
          expedita dignissimos nobis accusamus laboriosam dolore, nihil ad
          officiis! Et minima facilis accusamus maxime ullam, repellendus nam
          reprehenderit commodi atque quam libero unde distinctio obcaecati eos
          magnam, sapiente ipsa laboriosam, corrupti iure aliquam deserunt
          blanditiis odit eum? Totam consequuntur odit praesentium molestiae.
          Commodi, illo explicabo dolor debitis velit, esse sequi consectetur
          fugit cumque, omnis deleniti excepturi impedit ex soluta ipsa
          architecto rem aut eos nostrum placeat ad laborum praesentium
          distinctio! Quibusdam hic in nulla corrupti assumenda voluptatem,
          doloribus harum consectetur fugit tempora quisquam consequuntur.
        </p>
      </Tilt>
    </div>
  );
};

export default Card;
