import api from "../api.json";
import { normalize, schema } from "normalizr";

//const media = new schema.Entity(key,{schema definition}, {options} );
const media = new schema.Entity(
  "medias",
  {}, //schema
  {
    idAttribute: "id",
    processStrategy: (m, parent, key) => {
      //m is a media element
      return { ...m, categoryId: parent.id };
    }
  }
);
const category = new schema.Entity("categories", {
  playlist: new schema.Array(media)
});

const categories = { categories: new schema.Array(category) };

const normalizedData = normalize(api, categories);

export default normalizedData;
