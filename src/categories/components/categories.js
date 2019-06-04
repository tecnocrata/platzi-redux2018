import React from "react";
import Category from "./category";
import "./categories.css";
import Search from "../../widgets/containers/search";
import Media from "../../playlist/components/media";
import MediaContainer from "../../playlist/containers/media";

function Categories(props) {
  const cats =
    props.searchVideos.size == 0 ? props.categories : props.searchVideos;
  if (props.searchVideos.size == 0)
    return (
      <div className="Categories">
        {props.loading === true && <div>Loading</div>}
        <Search />
        {cats.map(item => {
          //ITEM is now a MAP!!!!!
          return (
            <Category
              key={item.get("id")}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          );
        })}
      </div>
    );
  else {
    return (
      <div>
        <Search />
        {cats.map(item => {
          //return <Media key={item.get("id")} {...item.toJS()} />;
          //Usando MediaContainer para poder tener el despliegue de los modales
          return (
            <MediaContainer
              openModal={props.handleOpenModal}
              id={item.get("id")}
              key={item.get("id")}
            />
          );
        })}
      </div>
    );
  }
}

export default Categories;
