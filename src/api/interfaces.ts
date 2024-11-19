interface IResultBase {
  ret: number;
  timestamp: number;
}

interface IResultSuccess<T> extends IResultBase {
  ret: 1;
  data: T;
}

interface IResultError<T> extends IResultBase {
  ret: 0;
  data: T;
}

interface IBadRequest {
  errors: Record<string, string[]>[];
  status: 400;
  title: string;
  traceId: string;
  type: string;
}

type IResult<T, R = undefined> = R extends undefined
  ? IResultSuccess<T>
  : IResultSuccess<T> | IResultError<R>;
type IResultWithBadRequest<T, R = undefined> = IBadRequest | IResult<T, R>;
