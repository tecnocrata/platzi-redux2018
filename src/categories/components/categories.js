import React from "react";
import Category from "./category";
import "./categories.css";
import Search from "../../widgets/containers/search";

function Categories(props) {
  const cats =
    props.searchVideos.length == 0 ? props.categories : props.searchVideos;
  return (
    <div className="Categories">
      <Search />
      {cats.map(item => {
        return (
          <Category
            key={item.id}
            {...item}
            handleOpenModal={props.handleOpenModal}
          />
        );
      })}
    </div>
  );
}

export default Categories;
