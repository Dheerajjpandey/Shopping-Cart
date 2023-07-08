import "../App.css";



function Header(props) {
  return (
    <div className="flex shopping">
      <div className="cursor" onClick={() => props.handleShow(false)}>  Shopping App</div>
      <div className="cursor" onClick={() => props.handleShow(true)}>
        Cart
        <sup>{props.count}</sup>
      </div>
    </div>
  );
}

export default Header;
