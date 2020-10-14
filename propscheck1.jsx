const smileyArray=[
  {
    smiley:"😉", 
    text:"happy"
  },
  {
    smiley:"😠", 
    text:"angry"
  },
  {
    smiley:"❤️", 
    text:"love"
  },
  {
    smiley:"🙃", 
    text:"silly"
  },
  {
    smiley:"😶", 
    text:"speechless"
  },
  {
    smiley:"😈", 
    text:"devilish"
  }
]

class SmallSmiley extends React.Component {
  render() {//props tranfer from parent to child from top to bottom data transfer
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
         {
          smileyArray.map( item => (
          <SmallSmiley smiley={item.smiley} text={item.text}/>
          ))    
          } 
        </div>
   )

  }
}

// Only once
ReactDOM.render(
  <Smiley />,
  document.getElementById('root')
);
