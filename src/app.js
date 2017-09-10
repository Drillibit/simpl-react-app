import React from 'react';
import ReactDom from 'react-dom';
require('./style/css/main.sass');

function Header(props){
  return(
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};



function Application(props) {
  return (
    <div className="scoreboard">
      <Header title={props.title} />
      <div className="players">
        <div className="player">
          <div className="player-name">
            Jim Hoskins
          </div>
          <div className="player-score">
            <div className="counter">
            <div className="counter-action decrement"> - </div>
            <div className="counter-score">31</div>
            <div className="counter-action increment"> + </div>
            </div>
          </div>
        </div>
      </div>

      <div className="players">
        <div className="player">
          <div className="player-name">
            Ann Marsh
          </div>
          <div className="player-score">
            <div className="counter">
            <div className="counter-action decrement"> - </div>
            <div className="counter-score">43</div>
            <div className="counter-action increment"> + </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Application.propTypes = {
  title: React.PropTypes.string ,
};
Application.defaultProps = {
  title: "Scoreboard",
}
ReactDom.render(<Application />, document.querySelector('.container'));
