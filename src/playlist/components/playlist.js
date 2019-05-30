import React from "react";
import Media from "./media.js";
import MediaContainer from "../containers/media";
import "./playlist.css";

function Playlist(props) {
  return (
    <div className="Playlist">
      {props.playlist.map(id => {
        //return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
        return <MediaContainer openModal={props.handleOpenModal} id={id} />;
      })}
    </div>
  );
}

export default Playlist;
