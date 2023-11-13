import { NextFunction, Request, Response } from 'express';
import { Model, Document } from 'mongoose';
import { ValidationChain } from 'express-validator';

export type Route = {
  method: string;
  path: string;
  func: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  validator?: ValidationChain[];
};

export interface IModule {
  routes: Route[];
  model: Model<Document>; //check what return model on export
}
