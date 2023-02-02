export interface IError {
  msg: string;
  params?: object;
}

export interface IErrorBag {
  [key: string]: IError;
}
