// Defining the components as JS function
//React components are required to start with uppercase letters.
const Header =  () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Player: 1</span>
    </header>
  );
}

const Player () => {
  return (
    <div className="player">
      <span className="player-name">
        Sanaz
      </span>
    </div>
  );
}


ReactDOM.render (
  <Header />,
  document.getElementById("root")
);
