import { Colors } from "@/constants/Colors";
import { Control, Controller } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputTextProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
}
export default function InputText({
  control,
  name,
  placeholder,
}: InputTextProps) {
  const styles = createStyles();

  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            onChangeText={field.onChange}
            value={field.value || ""}
          />
        )}
      />
    </View>
  );
}

function createStyles() {
  return StyleSheet.create({
    title: {
      fontSize: 13,
      fontWeight: "bold",
      color: Colors.gray,
      textTransform: "capitalize",
    },
    textInput: {
      fontSize: 17,
      width: 500,
      height: 40,
      marginBottom: 10,
      borderBottomColor: Colors.gray,
      borderBottomWidth: 1,
      borderStyle: "solid",
    },
  });
}
