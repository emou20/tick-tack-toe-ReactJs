
function Square(props) {
  return (
    <button className="square" onClick={props.bttClick}>
      {props.value}
    </button>
  );
}

export default Square;