import classes from "./Content.module.css";

export default function Item(props) {
  return (
    <div className={classes.item}>
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className={classes["sub-item"]}>
        <img src={props.image} alt="image" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at{" "}
        </p>
      </div>
      <p>
        ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
        ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
        massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
      </p>
    </div>
  );
}
