import React from "react";
import Pit from "./Pit/Pit";
import {PitEnum} from "./Pit/constant";

const Pits = (props) => {
  return (
    <div className={["row", "player-" + props.player].join(' ')}>
      {
        props.pits
          .filter(pit => pit.type === PitEnum.LITTLE)
          .map((pit, idx) =>
            <Pit key={`${props.player}-${idx}`}
                 index={idx}
                 isActive={props.activePlayer === props.player}
                 stones={pit.stoneCount}
                 clicked={props.moveStones}/>)
      }
    </div>
  );
};

export default Pits;