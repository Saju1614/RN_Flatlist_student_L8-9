import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../styles/colors";
import { dataType,DATA } from "../data/appData";

type propsDataType = {
  item:dataType,
  isCollected: boolean,
  onPress: (item:dataType)=> void
}
const ListItem: React.FC<propType>= ({item,isCollected,onPress}) => {
  return (<View>
    <TouchableOpacity onPress={(()=>onPress(item))}>
  <View style={[styles.titleContainer,
    {backgroundColor:
      selectedId
      ? colors.primary
      :colors.secondary
    }
  ]}>
    <Text>
      styles.titleText,
      {
        color:
        item.id ===selectedId
        ? colors.primary
        :colors.secondary
    }
    </Text>
  </View>
</TouchableOpacity></View>);
};

export default ListItem;

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});