import { NextFunction, Request, Response } from 'express';
import { Model, Document } from 'mongoose';

export type Route = {
  method: string;
  path: string;
  func: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};

export interface IModule {
  routes: Route[];
  model: Model<Document>; //check what return model on export
}
