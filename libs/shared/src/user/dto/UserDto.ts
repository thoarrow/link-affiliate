import { User } from '@prisma/client';

export interface UserDto extends Omit<User, 'password' | 'status' | 'salt'> {
  status: string;
}
