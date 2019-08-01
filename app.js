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

const Counter () => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score"> 35</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}


ReactDOM.render (
  <Header />,
  document.getElementById("root")
);
