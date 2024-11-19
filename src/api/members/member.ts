import { aspClient } from '../clients';

export async function login(username: string, password: string) {
  return await aspClient.post<IResult<ILoginMember, string>>(
    'Member/Login',
    JSON.stringify({ username, password }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}

export async function register(username: string, password: string) {
  return await aspClient.post<IResult<IMember, string>>(
    'Member/Register',
    JSON.stringify({ username, password }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}

export async function getMember(token: string) {
  return await aspClient.get<IResult<IMember>>('Member/GetMember', {
    headers: { token },
  });
}

export async function logout(token: string) {
  return await aspClient.post<IResult<boolean>>('Member/Logout', undefined, {
    headers: { token },
  });
}

export default { login, register, getMember };
