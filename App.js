import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProductDetails from "./src/screens/Products/ProductDetails";
import Home from "./src/screens/Products/Home";
import Login from "./src/screens/Auth/Login";
import Register from "./src/screens/Auth/Register";
import Profile from "./src/screens/Profile/Profile";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";
import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
import ProfileNavigation from "./src/navigation/ProfileNavigation/ProfileNavigation";
import MainNavigation from "./src/navigation/MainNavigation";
import { useEffect, useState } from "react";
import { deleteToken, getToken } from "./src/api/storage";
import UserContext from "./src/context/UserContext";
export default function App() {
  const queryClient = new QueryClient();
  const [user, setUser] = useState(false);

  const checkToken = async () => {
    const token = await getToken();

    if (token) {
      setUser(true);
    }
  };
  useEffect(() => {
    checkToken();
  });

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={[user, setUser]}>
          <SafeAreaProvider>
            <SafeAreaView
              style={{
                flex: 1,
              }}
            >
              {user ? <MainNavigation /> : <AuthNavigation />}
            </SafeAreaView>
          </SafeAreaProvider>
        </UserContext.Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

// div -> View
// p,  h1-h6 -> Text
// buttons -> Button / Touchable Opacity
// img -> Image
