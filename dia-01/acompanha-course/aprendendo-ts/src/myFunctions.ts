import { User } from './types/User';
import users from './data';

export const getUserNames = (userList: User[]): string[] => userList.map((user: User) => user.name);

export const getUserByRepoQtd = (userList: User[], num: number): User[] => {
  return userList.filter((user: User) => user.repositories >= num)
};

export const isMOstActiveUser = (userName: string, userList: User[]): boolean => {
  const [userNameRepo]: User[] = userList.filter((user: User) => user.name === userName);

  return userList.some((user: User) => user.repositories > userNameRepo.repositories) ? false : true
}
