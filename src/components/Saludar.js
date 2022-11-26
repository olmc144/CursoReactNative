import { Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { firstname = "Usuario", lastname = "Incognito" } = props;
  console.log(firstname + " " + lastname);
  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};
