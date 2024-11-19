interface IMember {
  memcode?: string;
  username: string;
  nickname: string;
}

interface ILoginMember extends IMember {
  token: string;
  isUpdate: boolean;
}
