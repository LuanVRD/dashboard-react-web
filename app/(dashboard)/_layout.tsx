import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import SideBar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <View style={styles.container}>
      <SideBar />
      <View style={styles.stackContainer}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: styles.stackContent, // Estilo para o conteúdo interno
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff", // Cor de fundo padrão
  },
  stackContainer: {
    flex: 1,
    overflow: "hidden", // Impede que conteúdo vaze
  },
  stackContent: {
    flex: 1, // Garante que o conteúdo interno do Stack ocupe todo o espaço
  },
});
