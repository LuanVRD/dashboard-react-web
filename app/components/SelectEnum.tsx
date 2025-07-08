import { Colors } from "@/constants/Colors";
import { Picker } from "@react-native-picker/picker";
import { Control, Controller } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

interface SelectEnumProps<T extends Record<string, any>> {
  control: Control<any>;
  name: string;
  enum: T;
  label?: string;
}
export default function SelectEnum<T extends Record<string, any>>({
  control,
  name,
  enum: enumObj,
  label,
}: SelectEnumProps<T>) {
  const styles = createStyles();
  return (
    <View>
      <Text style={styles.title}>{label || name}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Picker
            style={styles.textInput}
            selectedValue={field.value}
            onValueChange={(itemValue) => {
              const numericValue = Number(itemValue);
              field.onChange(numericValue);
            }}
          >
            {Object.values(enumObj)
              .filter((value) => typeof value === "number")
              .map((value) => (
                <Picker.Item key={value} label={enumObj[value]} value={value} />
              ))}
          </Picker>
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
