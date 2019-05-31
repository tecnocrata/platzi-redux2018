import React from "react";
import Category from "./category";
import "./categories.css";
import Search from "../../widgets/containers/search";

function Categories(props) {
  const cats =
    props.searchVideos.size == 0 ? props.categories : props.searchVideos;
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
}

export default Categories;
