import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import LoginForm from "../../components/Accounts/LoginForm";
import Toast from "react-native-easy-toast";

export default function Login(props) {
  const { navigation } = props;
  const toastRef = useRef();

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/images/logo.png")}
        resizeMode="contain"
        style={{ width: "100%", height: 150, marginTop: 70 }}
      />
      <View style={{ marginRight: 40, marginLeft: 40 }}>
        <LoginForm toastRef={toastRef} />
        <CreateAccount />
      </View>
      <Divider style={{ backgroundColor: "#00a680", margin: 40 }} />
      <Toast ref={toastRef} position="center" opacity={0.5} />
    </ScrollView>
  );
}

function CreateAccount(props) {
  const {} = props;

  return (
    <Text style={{ marginTop: 15, marginLeft: 10, marginRight: 10 }}>
      ¿Aún no tienes una cuenta ?{" "}
      <Text
        styles={{ color: "#00a680", fontWeight: "bold" }}
        onPress={console.log("Navegando al formulario de registro")}
      >
        Régistrarte
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    marginRight: 40,
    marginLeft: 40
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold"
  }
});
