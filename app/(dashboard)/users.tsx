import List from "@/app/components/List";
import { Text, View } from "react-native";

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

type User = {
  id: string;
  name: string;
  status: Status;
  role: UserRole;
};

const USERS_DATA: User[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Luan Victor",
    status: Status.ACTIVE,
    role: UserRole.ADMIN,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Lorena",
    status: Status.ACTIVE,
    role: UserRole.ADMIN,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Louise",
    status: Status.ACTIVE,
    role: UserRole.ADMIN,
  },
];

const columns = ["name", "status", "role"];

export default function Users() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Usuários</Text>
      <List data={USERS_DATA} columns={columns}></List>
    </View>
  );
}
