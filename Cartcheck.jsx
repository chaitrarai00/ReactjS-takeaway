
let numCartItems = 0;
numCartItems = 5  // Cmd / Ctrl + / slash

function getCartStatus(){
  if(numCartItems)
    return "Has Items " +numCartItems;
  else
    return "Empty cart";
}

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h1> Your cart </h1>
        <h2> Status : {getCartStatus()}</h2>
      </div>
        )
  }
}

ReactDOM.render(
  <Cart />,
  document.getElementById('root')
);
