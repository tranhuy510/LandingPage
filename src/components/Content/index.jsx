import logo from "../../assets/logoNCC.svg";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import Banner from "./Banner";

import classes from "./Content.module.css";
import Item from "./Item";

const image = [image1, image2, image3];

export default function Content() {
  return (
    <div className={classes.content}>
      <img src={logo} alt="logo" style={{ margin: "20px" }} />;
      <Banner />
      <div className={classes["wrap-item"]}>
        {image.map((img, index) => {
          return <Item key={index} image={img} />;
        })}
      </div>
    </div>
  );
}
