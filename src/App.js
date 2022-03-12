import './App.css';
import logo from './assets/images/logo.svg';
import styled from 'styled-components';
import Game from './components/Game';
import EndGame from './components/EndGame';
import React, { useState, useEffect } from 'react';

const DarkText = 'hsl(229, 25%, 31%)';
const ScoreText = 'hsl(229, 64%, 46%)';
const HeaderOutline = 'hsl(217, 16%, 45%)';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Header = styled.div`
  padding: 1rem;
  display: flex;
  border: 1px solid ${HeaderOutline};
  border-radius: 10px;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;
`;
const Logo = styled.img`
  width: auto;
  height: 100%;
  margin: auto 0;
  padding-left: 0.5rem;
`;
const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 0.5rem 3rem;
  border-radius: 10px;
  color: ${DarkText};
  h4 {
    letter-spacing: 1.5;
    font-size: 1.2rem;
    font-weight: bold;
    padding-top: 0.2rem;
  }
  p {
    font-size: 4rem;
    font-weight: bold;
  }
`;

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);
  const [win, setWin] = useState('tie');
  const [score, setScore] = useState(0);
  const [screen, setScreen] = useState('play');
  const houseRandom = () => {
    let arr = ['rock', 'paper', 'scissors'];
    let pick = arr[Math.floor(Math.random() * 3)];
    setHouseChoice(pick);
  };
  const playAgain = () => {
    setScreen('play');
    setWin(null);
    setPlayerChoice(null);
    houseRandom();
  };
  const playerChoseHandler = (e) => {
    let playerChoiceNow = e.target.dataset.id;
    if (playerChoiceNow === 'rock' && houseChoice === 'rock') {
      setWin('tie');
      setScore(score);
      setScreen('end');
    } else if (playerChoiceNow === 'rock' && houseChoice === 'paper') {
      setWin('lost');
      setScore(score - 1);
      setScreen('end');
    } else if (playerChoiceNow === 'rock' && houseChoice === 'scissors') {
      setWin('win');
      setScore(score + 1);
      setScreen('end');
    } else if (playerChoiceNow === 'paper' && houseChoice === 'rock') {
      setWin('win');
      setScore(score + 1);
      setScreen('end');
    } else if (playerChoiceNow === 'paper' && houseChoice === 'paper') {
      setWin('tie');
      setScore(score);
      setScreen('end');
    } else if (playerChoiceNow === 'paper' && houseChoice === 'scissors') {
      setWin('lost');
      setScore(score - 1);
      setScreen('end');
    } else if (playerChoiceNow === 'scissors' && houseChoice === 'rock') {
      setWin('lost');
      setScore(score - 1);
      setScreen('end');
    } else if (playerChoiceNow === 'scissors' && houseChoice === 'paper') {
      setWin('win');
      setScore(score + 1);
      setScreen('end');
    } else if (playerChoiceNow === 'scissors' && houseChoice === 'scissors') {
      setWin('tie');
      setScore(score);
      setScreen('end');
    }
    setPlayerChoice(e.target.dataset.id);
  };
  useEffect(() => {
    houseRandom();
  }, []);
  let display = <Game playerChoseHandler={playerChoseHandler}></Game>;
  if (screen === 'end') {
    display = (
      <EndGame
        playerChoice={playerChoice}
        houseChoice={houseChoice}
        win={win}
        playAgain={playAgain}
      ></EndGame>
    );
  }

  return (
    <div className='App'>
      <Container>
        <Header>
          <Logo src={logo} alt='logo'></Logo>
          <ScoreBoard>
            <h4>SCORE</h4>
            <p>{score}</p>
          </ScoreBoard>
        </Header>
        {display}
      </Container>
    </div>
  );
}

export default App;
