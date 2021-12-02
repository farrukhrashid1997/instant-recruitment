export interface UserAttributes extends UserBaseAttributes {
  id?: number;
  companyName: string;
  name: string;
}

export interface UserBaseAttributes {
  email: string;
  password: string;
}

export interface UserTokenInterface extends Request {
  userId?: number;
  email?: string;
}
