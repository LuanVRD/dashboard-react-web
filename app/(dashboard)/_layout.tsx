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
            contentStyle: styles.stackContent,
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
    backgroundColor: "#fff",
  },
  stackContainer: {
    flex: 1,
    overflow: "hidden",
  },
  stackContent: {
    flex: 1,
  },
});
