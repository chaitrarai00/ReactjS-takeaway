class SmallSmiley extends React.Component {
  render() {//props tranfer from parent to child
    return (
      
        <h1> {this.props.smiley}  
          <small> {this.props.text} </small> 
        </h1>
    )
  }
}

class Smiley extends React.Component {
  render() {
      return (
        <div>
          <SmallSmiley smiley={"😉"} text={"happy"} />
          <SmallSmiley smiley={"😠"} text={"angry"} />
          <SmallSmiley smiley={"❤️"} text={"love"} />
          <SmallSmiley smiley={"🙃"} text={"silly"} />
          <SmallSmiley smiley={"😶"} text={"speechless"} />
          <SmallSmiley smiley={"😈"} text={"devilish"} />
        </div>
   )

  }
}

// Only once
ReactDOM.render(
  <Smiley />,
  document.getElementById('root')
);
