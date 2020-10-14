

class Cart extends React.Component {
 state= {
   cart:0
 }
  addcarthandler = () => {
    this.setState({cart: this.state.cart+1});
  }
  removecarthandler = () =>{
    this.setState({cart: this.state.cart-1});
  }
  render() {
    return (
      <div>
        <h1> Sugar </h1>
        <button onClick={this.addcarthandler}> Add to Cart 
           </button>
        <button onClick={this.removecarthandler}> Remove from Cart </button>
        <h1>{this.state.cart} </h1>
      </div>
     )
  }
}

ReactDOM.render(
  <Cart />,
  document.getElementById('root')
);
