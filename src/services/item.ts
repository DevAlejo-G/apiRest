import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const inserCars = async (item: Car) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

const getCar = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

const updateCar = async (id: string, data: Car) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem
};

const deleteCar = async (id: string) => {
  const responseItem = await ItemModel.deleteMany({ _id: id });
  return responseItem;
}

export { inserCars, getCars, getCar, updateCar, deleteCar };
