import React from "react";
import Tilt from "react-parallax-tilt";

const MultipleCard = () => {
  return (
    <Tilt
      className="onecard multiple"
      perspective={5000}
      tiltMaxAngleX={5}
      tiltMaxAngleYl={5}
    >
      <h1>Test</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam obcaecati
        sit necessitatibus nulla animi ipsam suscipit consequatur beatae veniam
        id incidunt blanditiis corrupti quos fugiat, ducimus, voluptatem tempora
        est eligendi aut nisi natus odit commodi autem modi. Pariatur explicabo
        tempora reprehenderit officia eum doloremque quidem dolorem vel impedit
        consectetur inventore ipsum accusamus voluptas culpa omnis atque
        possimus tenetur voluptates aliquam cupiditate reiciendis nostrum
        dolorum, autem nesciunt? Doloribus veniam quo non molestias odit facere
        mollitia voluptatem nemo incidunt fugiat ullam excepturi omnis,
        voluptatum ipsa nisi! Quidem voluptatum repellendus ratione tempore,
        dolores dolore quae dolorem cupiditate magni! Amet enim sit rem omnis.
      </p>
    </Tilt>
  );
};

export default MultipleCard;
