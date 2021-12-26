import {render} from '@testing-library/react';
import Board from "./Board";
import {UserEnum} from "../User/constant";
import {PitEnum} from "./Pits/Pit/constant";

test('renders nothing if it should be hidden', () => {
  const handleClick = jest.fn();
  const state = getGameState();
  const {container} = render(<Board show={false} activePlayer={UserEnum.FIRST} state={state} moveStones={handleClick}/>);
  const board = container.getElementsByClassName("board");
  expect(board.length).toBe(0);
});

test('renders board correctly', () => {
  const handleClick = jest.fn();
  const state = getGameState();
  const {container} = render(<Board show={true} activePlayer={UserEnum.FIRST} state={state} moveStones={handleClick}/>);
  const board = container.getElementsByClassName("board");
  expect(board.length).toBe(1);

  const children = board.item(0).children;
  expect(children.length).toBe(3);
  expect(children.item(0)).toHaveClass("big-pit", "player-1");
  expect(children.item(1)).toHaveClass("rows");
  expect(children.item(1).children.length).toBe(2);
  expect(children.item(2)).toHaveClass("big-pit", "player-0");
});

const getState = (state, i) => {
  const defaultStoneCount = 6;
  return {
    pits: [
      {type: PitEnum.LITTLE, stoneCount: state ? state[i][0] : defaultStoneCount},
      {type: PitEnum.LITTLE, stoneCount: state ? state[i][1] : defaultStoneCount},
      {type: PitEnum.LITTLE, stoneCount: state ? state[i][2] : defaultStoneCount},
      {type: PitEnum.LITTLE, stoneCount: state ? state[i][3] : defaultStoneCount},
      {type: PitEnum.LITTLE, stoneCount: state ? state[i][4] : defaultStoneCount},
      {type: PitEnum.LITTLE, stoneCount: state ? state[i][5] : defaultStoneCount},
      {type: PitEnum.BIG, stoneCount: state ? state[i][6] : 0}
    ]
  }
};

export const getGameState = (state) => {
  return [
    getState(state, 0),
    getState(state, 1),
  ]
};