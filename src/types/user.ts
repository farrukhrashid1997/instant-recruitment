export interface UserAttributes extends UserBaseAttributes {
  id?: number;
  companyName: string;
  name: string;
}

export interface UserBaseAttributes {
  email: string;
  password: string;
}
