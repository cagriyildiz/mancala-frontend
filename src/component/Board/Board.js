import React from "react";
import Pits from "./Pits/Pits";
import BigPit from "./Pits/Pit/BigPit";
import {UserEnum} from "../User/constant";
import {PitEnum} from "./Pits/Pit/constant";

const Board = (props) => {

  const reverseArray = arr => arr.slice(0).reverse();
  const getPits = player => props.state[player].pits;
  const getBigPit = player => getPits(player).find(pit => pit.type === PitEnum.BIG);

  return (
    props.show ?
      <div className="board">
        <BigPit store={getBigPit(UserEnum.SECOND).stoneCount} player={UserEnum.SECOND}/>

        <div className="rows">
          {
            reverseArray(props.state)
              .map((state, idx) =>
                <Pits key={idx}
                      pits={state.pits}
                      player={props.state.length - 1 - idx}
                      activePlayer={props.activePlayer}
                      moveStones={props.moveStones}/>)
          }
        </div>

        <BigPit store={getBigPit(UserEnum.FIRST).stoneCount} player={UserEnum.FIRST}/>
      </div> : null
  );
};

export default Board;