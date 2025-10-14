import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Image,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.8));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Animated.View
        style={[
          styles.card,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3313/3313897.png",
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>🚀 Welcome to React Native!</Text>
        <Text style={styles.subtitle}>
          Build beautiful mobile apps using JS + React.
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.btnText}>Next ➜</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>📱 About Screen</Text>
      <Text style={styles.subtitle}>
        This is your second page. You can add info or features here.
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.btnText}>Go to Profile ➜</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>👤 Profile Screen</Text>
      <Text style={styles.subtitle}>
        This could be your user profile or settings page.
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>⬅ Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // hide default header for a cleaner look
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    width: "85%",
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: "#bbb",
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 15,
  },
  btn: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  page: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
