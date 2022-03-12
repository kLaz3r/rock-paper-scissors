import React from 'react';
import styled from 'styled-components';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const Rock = styled.div`
  transition: all 200ms ease-in-out;
  width: 16rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8rem;
  border: 20px solid hsl(349, 71%, 52%);
  background-color: white;
  background-image: url(${rock});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  height: 16rem;
  z-index: 1;
  img {
    width: 50%;
    height: 50%;
  }
  &:hover {
    opacity: 0.8;
  }
`;
const Paper = styled.div`
  transition: all 200ms ease-in-out;
  width: 16rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8rem;
  border: 20px solid hsl(230, 89%, 62%);
  background-color: white;
  background-image: url(${paper});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  height: 16rem;
  z-index: 1;
  img {
    width: 50%;
    height: 50%;
  }
  &:hover {
    opacity: 0.8;
  }
`;
const Scissors = styled.div`
  transition: all 200ms ease-in-out;
  width: 16rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8rem;
  border: 20px solid hsl(39, 89%, 49%);
  background-color: white;
  background-image: url(${scissors});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  height: 16rem;
  z-index: 1;
  img {
    width: 50%;
    height: 50%;
  }
  &:hover {
    opacity: 0.8;
  }
`;
const Container = styled.div`
  transition: all 200ms ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  height: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const Button = styled.button`
  transition: all 200ms ease-in-out;
  display: block;
  background-color: white;
  color: hsl(229, 25%, 31%);
  font-size: 2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  &:hover,
  &:active {
    opacity: 0.8;
  }
`;
const Middle = styled.div`
  transition: all 200ms ease-in-out;
  padding: 2rem;
  h1 {
    color: white;
    padding: 1rem;
  }
`;

const EndGame = ({ playerChoice, houseChoice, win, playAgain }) => {
  let leftSide = null;
  let middleSide = null;
  let rightSide = null;
  switch (playerChoice) {
    case 'rock':
      leftSide = <Rock></Rock>;
      break;
    case 'paper':
      leftSide = <Paper></Paper>;
      break;
    case 'scissors':
      leftSide = <Scissors></Scissors>;
      break;

    default:
      leftSide = null;
      break;
  }
  switch (houseChoice) {
    case 'rock':
      rightSide = <Rock></Rock>;
      break;
    case 'paper':
      rightSide = <Paper></Paper>;
      break;
    case 'scissors':
      rightSide = <Scissors></Scissors>;
      break;

    default:
      rightSide = null;
      break;
  }
  switch (win) {
    case 'win':
      middleSide = (
        <Middle>
          <h1>You Win</h1>
          <Button onClick={playAgain}>Play Again</Button>
        </Middle>
      );
      break;
    case 'tie':
      middleSide = (
        <Middle>
          <h1>Tie</h1>
          <Button onClick={playAgain}>Play Again</Button>
        </Middle>
      );
      break;
    case 'lost':
      middleSide = (
        <Middle>
          <h1>You Lost</h1>
          <Button onClick={playAgain}>Play Again</Button>
        </Middle>
      );
      break;

    default:
      middleSide = null;
      break;
  }
  return (
    <Container>
      {leftSide}
      {middleSide}
      {rightSide}
    </Container>
  );
};

export default EndGame;
