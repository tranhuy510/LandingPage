import classes from "./Sidebar.module.css";

const content = ["Home", "Services", "News", "Blog", "Contact"];

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      {content.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
}
