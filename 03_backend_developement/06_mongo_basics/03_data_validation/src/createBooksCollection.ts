import * as mongo from "mongodb";

export const booksValidator = {
  // write your validator here
};

export function createBooksCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("books", booksValidator);
}
