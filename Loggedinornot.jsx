let isUserLoggedIn = false;

isUserLoggedIn = true;

let username = "Chaitra"

class UserStatus extends React.Component {
  render() {
    return (
      <div>
       {
        isUserLoggedIn && <h1>Hey! {username}</h1>
         }{
        !isUserLoggedIn  && <button>LogIn</button>}
      </div>
        )
  }
}

ReactDOM.render(
  <UserStatus />,
  document.getElementById('root')
);

//html:<div id="root"></div>
