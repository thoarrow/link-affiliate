import { JWT } from 'next-auth/jwt';

export interface UserInfo {
  readonly id: string;
  readonly email: string;
  readonly exp?: number;
  readonly iat?: number;
}

export interface JwtPayload extends JWT {
  accessToken: string;
  userInfo: UserInfo;
}
