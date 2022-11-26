import { Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

export default function Saludar(props) {
  const { firstname, lastname } = props;
  console.log(firstname + " " + lastname);
  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}

Saludar.defaultProps = {
  firstname: "Usuario",
  lastname: "Incognito",
};

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};
