//let counter=0; //global counter
class LikeCounter extends React.Component{
  //instead we create a state counter to keep track of the state of variable 
  state={
    counter : 0
  }
  
  LikeCounterHandler = () => {
    this.setState({counter: this.state.counter+1 }); // updates the state value and calls render again
  }
  render(){
    console.log('render is called at state/ with the state '+this.state.counter);
    return(
      <div>
      <button onClick={this.LikeCounterHandler}>❤️</button>
      <p>{this.state.counter} Likes </p>
        </div>
    )
  }
}

ReactDOM.render(
  <LikeCounter />,
  document.getElementById('root')
);
