import { JSX } from "react";
import { FlatList, Text, View } from "react-native";

interface ListProps {
  data: any[];
  columns: string[];
}

export default function List({ data, columns }: ListProps): JSX.Element {
  const listHeader = columns.map((x, i) => (
    <Text
      key={i}
      style={{ flex: 1, fontWeight: "bold", textTransform: "capitalize" }}
    >
      {x}
    </Text>
  ));

  const Item = (item: any) => (
    <View style={{ flex: 1, flexDirection: "row", padding: 10 }}>
      {columns.map((x, i) => (
        <Text key={i} style={{ flex: 1 }}>
          {item[x]}
        </Text>
      ))}
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View style={{ flexDirection: "row", padding: 10 }}>{listHeader}</View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item {...item} />}
      ></FlatList>
    </View>
  );
}
