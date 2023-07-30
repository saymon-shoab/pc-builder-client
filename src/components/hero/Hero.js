import { useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
// import caro1 from "@/assest/images/caro1.jpg";
const contentStyle = {
  height: "460px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Hero = () => {
  const [dotPosition, setDotPosition] = useState("bottom");
  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  return (
    <>
      <Carousel dotPosition={dotPosition}>
        <div>
          <Image
            style={contentStyle}
            src="https://i.ibb.co/hs7YrMy/carro1.jpg"
            // src={caro1}
            width={1550}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            style={contentStyle}
            src="https://i.ibb.co/HFDvgtD/caro2.jpg"
            // src={caro1}
            width={1550}
            height={300}
            alt="Picture of the author"
          />
        </div>
        <div>
          <Image
            style={contentStyle}
            src="https://i.ibb.co/Q9yVFRJ/acro3.jpg"
            // src={caro1}
            width={1550}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </Carousel>
    </>
  );
};

export default Hero;
