import normalized from "../schemas";
import { fromJS } from "immutable";

const initialState = fromJS({
  //...data
  entities: normalized.entities,
  categories: normalized.result.categories,
  searchVideos: [] //Esto lo metio dentro de data para tener un unico reducer para data
});

const main = (state = initialState, acction) => {
  const { type, payload } = acction;
  switch (type) {
    case "SEARCH_VIDEO":
      let categories = [];
      let c1 = 0;
      state
        .get("data")
        .get("categories")
        .forEach(c => {
          let c2 = 0;
          categories[c1] = {
            ...c,
            playlist: []
          };
          c.playlist.forEach(p => {
            if (p.title.toLowerCase().includes(payload.query.toLowerCase())) {
              categories[c1].playlist[c2] = p;
              c2++;
            }
          });
          c1++;
        });
      state
        .get("data")
        .get("categories")
        .map(c => {
          return c;
        });
      return {
        ...state,
        // searchVideos: state.data.categories.filter(
        //   c =>
        //     c.playlist.filter(p =>
        //       p.title.toLowerCase().includes(payload.query.toLowerCase())
        //     ).length > -1
        // )
        searchVideos: categories
      };

    default:
      return state;
  }
};

export default main;
