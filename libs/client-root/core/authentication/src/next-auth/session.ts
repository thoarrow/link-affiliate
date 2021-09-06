import { JwtPayload, UserInfo } from '@superlink/shared';
import { Session } from 'next-auth';
import clientApi from 'next-auth/client';

export interface CustomSession extends Session {
  accessToken: string;
  user: UserInfo;
}

export async function session(
  session: CustomSession,
  clientJwtPayload: JwtPayload
): Promise<CustomSession> {
  session.accessToken = clientJwtPayload.accessToken;
  session.user = clientJwtPayload.userInfo;

  return session;
}

export const getSession = async (
  ...args: Parameters<typeof clientApi.getSession>
): Promise<CustomSession | null> => {
  return (await clientApi.getSession(...args)) as CustomSession;
};

export const useSession = (): [CustomSession | null, boolean] => {
  return clientApi.useSession() as [CustomSession | null, boolean];
};
