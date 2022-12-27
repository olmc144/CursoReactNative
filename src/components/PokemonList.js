import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={Style.flatListContentContainer}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && <ActivityIndicator size="large" style={Style.spinner} />
      }
    />
  );
}

const Style = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 10 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
