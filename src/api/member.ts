import { aspClient } from './clients';

export async function login(username: string, password: string) {
  return await aspClient.post<IResult<IMember & { token: string }>>(
    'member/login',
    JSON.stringify({ username, password }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}

export async function getMember(token: string) {
  return await aspClient.post<IResult<IMember>>('member/getMember', undefined, {
    headers: { token },
  });
}

export default { login, getMember };
