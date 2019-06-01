import React from "react";
import Category from "./category";
import "./categories.css";
import Search from "../../widgets/containers/search";
import Media from "../../playlist/components/media";

function Categories(props) {
  const cats =
    props.searchVideos.size == 0 ? props.categories : props.searchVideos;
  if (props.searchVideos.size == 0)
    return (
      <div className="Categories">
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
          return <Media key={item.get("id")} {...item.toJS()} />;
        })}
      </div>
    );
  }
}

export default Categories;
