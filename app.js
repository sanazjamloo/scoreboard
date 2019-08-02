const players = [
  {
  name: "Sanaz",
  score: 50
},
{
  name: "Rosie",
  score: 90
},
{
  name: "Emilliano",
  score: 80
},
{
  name: "Tina",
  score: 85
}
];

// Defining the components as JS function
//React components are required to start with uppercase letters.
const Header =  (props) => {
  console.log(props);
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: { props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.name}
      </span>
      <Counter score={ props.score } />
    </div>
  );
}

const Counter =  (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score"> {props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={1}
      />

      {/* Players list*/}
      {props.initialPlayers.map( player =>
        <Player
          name={player.name}
          score={player.score}
        />

      )}
    </div>
  );
}


ReactDOM.render (
  <App initialPlayers={players} />,
  document.getElementById("root")
);
