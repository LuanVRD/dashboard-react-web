import List from "@/app/components/List";
import { User } from "@/app/core/models/user";
import { UserService } from "@/app/core/services/userService";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const columns = ["name", "status", "role", "options"];

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      const res = await UserService.getUsers();
      setUsers(res);
    };
    loadUsers();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Link href={`./new/detail` as any}>
        <Button title={"New User"} />
      </Link>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Usuários</Text>
      <List data={users} columns={columns}></List>
    </View>
  );
}
