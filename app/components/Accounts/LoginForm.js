import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { Icon, Button, getIconType } from "react-native-elements";
import { withNavigation } from "react-navigation";
import * as firebase from "firebase";
import Loading from "../Loading";

function LoginForm(props) {
  const { toastRef, navigation } = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibleLoading, setIsVisisbleLoading] = useState(false);

  const login = async () => {
    setIsVisisbleLoading(true);
    if (!user || !password) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else {
      await firebase
        .auth()
        .signInWithEmailAndPassword(user, password)
        .then(() => {
          navigation.navigate("MyAccount");
        })
        .catch(() => {
          toastRef.current.show("Usuario y/o contraseña incorrecta");
        });
    }
    setIsVisisbleLoading(false);
  };
  return (
    <View>
      <TextInput
        placeholder="Usuario"
        containerStyle={{ width: "100%", marginTop: 200 }}
        onChange={e => setUser(e.nativeEvent.text)}
        righIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={{ flex: 1, color: "#c1c1c1" }}
          />
        }
      />
      <TextInput
        placeholder="Contraseña"
        containerStyle={{ width: "100%", marginTop: 200 }}
        password="true"
        secureTextEntry={hidePassword}
        onChange={e => setPassword(e.nativeEvent.text)}
        righIcon={
          <Icon
            type="material-community"
            inconName={hidePassword ? "eye-outline" : "eye-off-outline"}
            iconStyle={{ flex: 1, color: "#c1c1c1" }}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Button title="Iniciar sesión" onPress={login} />
      <Loading isVisible={isVisibleLoading} text="Iniciando sesión" />
    </View>
  );
}
export default withNavigation(LoginForm);

const styles = StyleSheet.create({
  inputForm: {
    width: "100%",
    marginTop: 20
  },
  iconRight: {
    flex: 1,
    color: "#c1c1c1"
  }
});
