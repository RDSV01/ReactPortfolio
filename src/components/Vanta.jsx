import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";

const Vanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          waveSpeed: 0.3,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div className="background" ref={myRef}></div>;
};

export default Vanta;
