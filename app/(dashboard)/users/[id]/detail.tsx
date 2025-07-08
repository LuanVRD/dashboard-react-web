import InputText from "@/app/components/InputText";
import SelectEnum from "@/app/components/SelectEnum";
import { Status, User, UserRole } from "@/app/core/models/user";
import { UserService } from "@/app/core/services/userService";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function UserDetail() {
  const { control, handleSubmit, reset } = useForm<User>({
    defaultValues: {
      name: "",
      role: 1,
      status: 1,
    },
  });

  const styles = createStyles();

  const router = useRouter();

  const onSubmit = async (data: User) => {
    if (id === "new") {
      await UserService.create(data);
    } else {
      await UserService.update(data);
    }
    router.push("/users/list");
  };

  const { id } = useLocalSearchParams<{ id: string }>();

  useEffect(() => {
    const fetchUserData = async () => {
      if (id === "new") return;
      const response = await UserService.getUserbyId(id);
      reset(response);
    };

    fetchUserData();
  }, [reset]);

  return (
    <View>
      <InputText control={control} name="name" placeholder="Name"></InputText>

      <SelectEnum control={control} name="status" enum={Status}></SelectEnum>

      <SelectEnum control={control} name="role" enum={UserRole}></SelectEnum>

      <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

function createStyles() {
  return StyleSheet.create({
    button: {
      width: 500,
      height: 40,
      backgroundColor: Colors.green,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: Colors.white,
      fontWeight: "bold",
    },
  });
}
