import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();
  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyle = { backgroundColor: pokemonColor, ...styles.bgStyle };

  const goToPokemon = () => {
    //console.log(`Vamos al pokemon: ${pokemon.id}`);
    navigation.navigate("Pokemon", { id: pokemon.id });
  };
  //   console.log(props);
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyle}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}
            </Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
            <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: { flex: 1, borderRadius: 15, padding: 10 },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: { color: "#fff", fontWeight: "bold", fontSize: 15, paddingTop: 10 },
  image: {
    position: "absolute",
    bottom: 4,
    right: 2,
    width: 90,
    height: 90,
  },
});
