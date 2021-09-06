import { JwtPayload } from '@superlink/shared';
import { JWT } from 'next-auth/jwt';

export async function jwt(
  clientJwtPayload: JWT,
  signInPayload: JwtPayload | undefined
) {
  if (signInPayload) {
    return { ...clientJwtPayload, ...signInPayload };
  }

  return clientJwtPayload;
}
