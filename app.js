// Defining the components as JS function
//React components are required to start with uppercase letters.
const Header =  () => 
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Player: 1</span>
    </header>



ReactDOM.render (
  <Header />,
  document.getElementById("root")
);
