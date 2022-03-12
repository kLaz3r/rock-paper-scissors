import React from 'react';
import styled from 'styled-components';
import bg from '../assets/images/bg-triangle.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';
const Wrapper = styled.div`
  transition: all 200ms ease-in-out;
  display: inline;
  position: relative;
  width: auto;
  margin: 3rem auto;
  height: 90%;
  img {
    height: 90%;
    width: auto;
  }
  @media (max-width: 500px) {
    height: 33%;
    margin: auto;
  }
`;
const Rock = styled.div`
  transition: all 200ms ease-in-out;
  width: 12rem;
  position: absolute;
  cursor: pointer;
  bottom: 0;
  left: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  border: 20px solid hsl(349, 71%, 52%);
  background-color: white;
  background-image: url(${rock});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  height: 12rem;
  z-index: 1;
  img {
    width: 50%;
    height: 50%;
  }
  &:hover,
  &:active {
    transform: scale(1.2);
  }
  @media (max-width: 500px) {
    left: 27%;
  }
`;
const Paper = styled.div`
  transition: all 200ms ease-in-out;
  width: 12rem;
  position: absolute;
  cursor: pointer;

  top: -5rem;
  left: -5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  border: 20px solid hsl(230, 89%, 62%);
  background-color: white;
  background-image: url(${paper});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  height: 12rem;
  z-index: 1;
  img {
    width: 50%;
    height: 50%;
  }
  &:hover,
  &:active {
    transform: scale(1.2);
  }
`;
const Scissors = styled.div`
  transition: all 200ms ease-in-out;
  width: 12rem;
  cursor: pointer;
  display: block;
  position: absolute;
  right: -5rem;
  top: -5rem;
  justify-content: center;
  align-items: center;
  border-radius: 6rem;
  border: 20px solid hsl(39, 89%, 49%);
  background-color: white;
  background-image: url(${scissors});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  height: 12rem;
  z-index: 1;
  img {
    width: 50%;
    height: 50%;
  }
  &:hover,
  &:active {
    transform: scale(1.2);
  }
`;

const Game = ({ playerChoseHandler }) => {
  //   const rockHandler = () => {
  //     setPlayerChoice('rock');
  //     playerChoseHandler();
  //   };
  //   const paperHandler = () => {
  //     console.log('paper');
  //     setPlayerChoice('paper');
  //     playerChoseHandler();
  //   };
  //   const scissorsHandler = () => {
  //     console.log('scissors');
  //     setPlayerChoice('scissors');
  //     playerChoseHandler();
  //   };
  return (
    <Wrapper>
      <img src={bg} alt='' />
      <Rock data-id='rock' onClick={playerChoseHandler}></Rock>
      <Paper data-id='paper' onClick={playerChoseHandler}></Paper>
      <Scissors data-id='scissors' onClick={playerChoseHandler}></Scissors>
    </Wrapper>
  );
};

export default Game;
