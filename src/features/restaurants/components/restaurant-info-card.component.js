/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */
import * as React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../../src/components/typography/text.component";
import { Spacer } from "../../../../src/components/spacer/spacer.component";
import { Icon, Address, RestaurantCard, RestaurantCardCover, Rating, Section, SectionEnd, Info } from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {

  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    ],
    address = "100 some random street, NY, USA",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <RestaurantCard>
        <RestaurantCardCover
          key={name}
          source={{ uri: photos[0] }}
        />
        <Info>
          <Text variant={"label"}>{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant={"error"}>CLOSED TEMPORARILY</Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};

{/* <Card.Content>
                    <Title>{name}</Title>
                    <Paragraph>{name}</Paragraph>
                </Card.Content> */}
