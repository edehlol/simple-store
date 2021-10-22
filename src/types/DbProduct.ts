import { ObjectId } from 'bson';

export interface DbProduct {
  _id: ObjectId;
  name: string;
  price: { $numberDecimal: string };
  img: string;
}
