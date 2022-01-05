import * as React from "react";
import { Address } from "web3x/address";
import Coordinate from "../../Coordinate/Coordinate";
import { Props } from "./Popup.types";
import "./Popup.css";

export default class Popup extends React.PureComponent<Props> {
  render() {
    const { x, y, visible, tile, position } = this.props;
    const isEstate = !!tile.estate_id;
    return (
      <div
        className={`AtlasPopup ${position} ${
          tile.owner ? "has-owner" : "no-owner"
        }`}
        style={{ top: y, left: x, opacity: visible ? 1 : 0 }}
      >
        <div className="land-name">
          <div className="name-row">
            <span className="name">
              {tile.name || (!isEstate ? "global.parcel" : "global.estate")}
            </span>
            <Coordinate className="coordinates" x={tile.x} y={tile.y} />
          </div>
        </div>

        <div className="owner">
          <div>{"owner"}</div>
          <div>{tile.owner}</div>
          {/* <Profile
            address={tile.owner || Address.ZERO.toString()}
            debounce={500}
          /> */}
        </div>

        {tile.price ? (
          <div className="price">
            <div>{"price"}</div>
            <div>{tile.price.toLocaleString()}</div>
          </div>
        ) : null}
      </div>
    );
  }
}
