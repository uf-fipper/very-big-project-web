interface IResultBase {
  ret: number;
  message: string;
}

interface IResultSuccess<T = undefined> extends IResultBase {
  ret: 1;
  data: T;
}

interface IResultError<T = undefined> extends IResultBase {
  ret: 0;
  data: T;
}

type IResult<T = undefined, R = undefined> = IResultSuccess<T> | IResultError<R>;

interface IMember {
  memcode?: string;
  username: string;
  nickname: string;
  token?: string;
}
