/* eslint-disable prettier/prettier */
import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantCard = styled(Card)`
  elevation: 5;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[1]};
  flex-direction: row;
`;

export const SectionEnd = styled.View`
  ${"" /* padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[1]};
flex-direction: row; */
    }
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
