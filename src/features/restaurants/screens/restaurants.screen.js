/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import styled from "styled-components/native";
// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../../src/components/spacer/spacer.component";
import {
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;  
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export default function RestaurantsScreen() {

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => <Spacer position={"bottom"} size="large"><RestaurantInfoCard /></Spacer>}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
