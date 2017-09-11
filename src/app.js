import React from 'react';
import ReactDom from 'react-dom';
require('./style/css/main.sass');

var PLAYERS = [
  {
    name: "Horhe Rodriges",
    score: 31,
    id: 1,
  },
  {
    name: "Migel Escobar",
    score: 34,
    id: 2,
  },
  {
    name: "Anna Kudos",
    score: 27,
    id: 3,
  },
  {
    name: "Bob Marley",
    score: 43,
    id: 4,
  }
]


function Header(props){
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
}

function Player(props){
  return(
    <div className="player">
      <div className="player-name">{props.name}</div>
      <div className="player-score">
        <div className="counter">
          <div className="counter-action decrement"> - </div>
          <div className="counter-score"> {props.score} </div>
          <div className="counter-action increment"> + </div>
        </div>
      </div>
    </div>
  );
}
Player.propTypes ={
  name: React.PropTypes.string,
  score: React.PropTypes.number,
}
function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title}/>
      <div className="players">
        {props.players.map(function(player){
          return <Player name={player.name} score={player.score} key={player.id} />
        })}
      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
};

Application.defaultProps = {
  title: 'Scoreboard',
};


ReactDom.render(<Application players={PLAYERS} />, document.querySelector('.container'));
