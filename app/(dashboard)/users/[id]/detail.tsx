import { Status, User, UserRole } from "@/app/core/models/user";
import { UserService } from "@/app/core/services/userService";
import { Picker } from "@react-native-picker/picker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextInput, View } from "react-native";

export default function UserDetail2() {
  const { control, handleSubmit, reset } = useForm<User>({
    defaultValues: {
      name: "",
      role: 1,
      status: 1,
    },
  });

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
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <TextInput
            placeholder="Name"
            onChangeText={field.onChange}
            value={field.value}
          />
        )}
      />
      <Controller
        control={control}
        name="status"
        render={({ field }) => (
          <Picker
            selectedValue={field.value}
            onValueChange={(itemValue) => {
              const numericValue = Number(itemValue);
              field.onChange(numericValue);
            }}
          >
            {Object.values(Status)
              .filter((value) => typeof value === "number")
              .map((value) => (
                <Picker.Item key={value} label={Status[value]} value={value} />
              ))}
          </Picker>
        )}
      />
      <Controller
        control={control}
        name="role"
        render={({ field }) => (
          <Picker
            selectedValue={field.value}
            onValueChange={(itemValue) => {
              const numericValue = Number(itemValue);
              field.onChange(numericValue);
            }}
          >
            {Object.values(UserRole)
              .filter((value) => typeof value === "number")
              .map((value) => (
                <Picker.Item
                  key={value}
                  label={UserRole[value]}
                  value={value}
                />
              ))}
          </Picker>
        )}
      />
      <Button onPress={handleSubmit(onSubmit)} title="save" />
    </View>
  );
}
