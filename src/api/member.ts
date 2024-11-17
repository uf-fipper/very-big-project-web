import { aspClient } from './clients';

export async function login(
  username: string,
  password: string,
): Promise<IResult<IMember & { token: string }>> {
  return await aspClient.post('member/login');
}

export async function getMember(token: string): Promise<IResult<IMember>> {
  return await aspClient.post('member/getMember', undefined, { headers: { token } });
}

export default { login, getMember };
