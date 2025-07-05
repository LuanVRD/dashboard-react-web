import { Colors } from "@/constants/Colors";
import { Link, useSegments } from "expo-router";
import { JSX, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type SidebarItem = {
  name: string;
  href: string;
};

export default function SideBar(): JSX.Element {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const styles = createStyles();
  const sidebar = createSidebar();

  let segments = useSegments();

  const elements = sidebar.map((x, i) => (
    <Pressable
      key={i}
      onHoverIn={() => setHoverIndex(i)}
      onHoverOut={() => setHoverIndex(null)}
    >
      <Link
        key={i}
        style={[
          styles.item,
          hoverIndex === i && styles.itemHovered,
          segments[segments.length - 1] === x.href && styles.itemSelected,
        ]}
        href={`/${x.href}` as any}
      >
        <Text
          key={i}
          style={[
            styles.text,
            segments[segments.length - 1] === x.href && styles.textSelected,
          ]}
        >
          {x.name}
        </Text>
      </Link>
    </Pressable>
  ));

  return <View style={styles.container}>{elements}</View>;
}

function createStyles() {
  return StyleSheet.create({
    container: {
      width: 250,
      height: "100%",
      backgroundColor: Colors.darkBlue,
    },
    item: {
      width: "100%",
      height: 50,
      padding: 10,
      alignContent: "center",
    },
    text: {
      fontSize: 15,
      fontWeight: "bold",
      color: Colors.white,
    },
    itemHovered: {
      backgroundColor: Colors.hovered,
    },
    itemSelected: {
      backgroundColor: Colors.yellow,
    },
    textSelected: {
      color: Colors.darkBlue,
    },
  });
}

function createSidebar(): SidebarItem[] {
  return [
    {
      name: "Home",
      href: "home",
    },
    {
      name: "Usuários",
      href: "users",
    },
    {
      name: "Página 3",
      href: "page3",
    },
    {
      name: "Página 4",
      href: "page4",
    },
  ];
}
