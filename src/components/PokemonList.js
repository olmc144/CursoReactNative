import { StyleSheet, FlatList, Text } from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemons.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={Style.flatListContentContainer}
    />
  );
}

const Style = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  },
});
