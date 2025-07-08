import { Link } from "expo-router";
import { JSX } from "react";
import { FlatList, Text, View } from "react-native";

interface ListProps {
  data: any[];
  columns: string[];
  enums?: Record<string, Record<number | string, any>>;
}

export default function List({
  data,
  columns,
  enums = {},
}: ListProps): JSX.Element {
  const formatValue = (column: string, value: any) => {
    if (enums[column] && enums[column][value] !== undefined) {
      return enums[column][value];
    }
    return value;
  };

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
        <View key={i} style={{ flex: 1 }}>
          {x === "options" ? (
            <>
              <Link key={i} href={`./${item["id"]}/detail` as any}>
                <Text key={i} style={{ flex: 1 }}>
                  Editar
                </Text>
              </Link>
            </>
          ) : (
            <Text key={i} style={{ flex: 1 }}>
              {formatValue(x, item[x])}
            </Text>
          )}
        </View>
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
