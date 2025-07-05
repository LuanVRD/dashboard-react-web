export type User = {
  id: string;
  name: string;
  status: Status;
  role: UserRole;
};

export enum UserRole {
  ADMIN = 1,
  USER = 2,
  GUEST = 3,
}

export enum Status {
  ACTIVE = 1,
  INACTIVE = 2,
  PENDING = 3,
}
