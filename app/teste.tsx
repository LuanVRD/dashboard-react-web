import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type SidebarItem = {
  name: string;
  href: string;
};

function createSidebar(): SidebarItem[] {
  return [
    { name: "Página 1", href: "/page1" },
    { name: "Página 2", href: "/page2" },
    { name: "Página 3", href: "/page3" },
    { name: "Página 4", href: "/page4" },
  ];
}

export default function Sidebar() {
  const items = createSidebar();

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <Link key={index} href={item.href as any} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{item.name}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  button: {
    padding: 12,
    marginVertical: 4,
    backgroundColor: "#6200ee",
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
