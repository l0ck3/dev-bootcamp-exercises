import * as mongo from "mongodb";

export const moviesValidator = {
  // write your validator here
};

export function createMoviesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("movies", moviesValidator);
}
