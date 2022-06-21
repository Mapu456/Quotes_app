import classes from "./Card.module.css";

const Card = (props) => {
  const style = {
    width: props.width + "%",
    padding: props.padding,
    backgroundColor: props.color || "white"
  };
  return (
    <div className={classes.card} style={style}>
      {props.children}
    </div>
  );
};

export default Card;
