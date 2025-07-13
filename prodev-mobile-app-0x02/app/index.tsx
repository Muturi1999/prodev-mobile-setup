import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background1-image.jpg")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Logo */}
            <View style={styles.companyLogo}>
              <Image
                source={require("@/assets/images/icon.png")}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
              />
            </View>

            {/* Text */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2</Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            {/* Buttons and Prompt */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ ...styles.textSmall, color: "black" }}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 40,
  },
  textGroup: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 36,
    textAlign: "center",
    marginBottom: 10,
  },
  textSmall: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 10,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    marginHorizontal: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
});
