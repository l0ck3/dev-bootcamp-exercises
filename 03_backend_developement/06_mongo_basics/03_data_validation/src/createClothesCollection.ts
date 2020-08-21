import * as mongo from "mongodb";

export const sweaterProperties = {
  // write your sweater properties here
};

export const shoesProperties = {
  // write your shoes properties here
};

export const pantsProperties = {
  // write your pants properties here
};

export const clothesValidator = {
  // write your validator here
};

export function createClothesCollection(
  db: mongo.Db
): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
