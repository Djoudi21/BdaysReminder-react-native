import React from "react";
import { Provider } from "react-redux";
import { createAppStore } from "./src/store/store.ts";
import { RootStackRouter } from "./src/routes/RootStack.tsx";
import { NavigationContainer } from "@react-navigation/native";
import { FetchAuthRepository } from "./src/repositories/fetchAuthRepository.ts";

const authRepository = new FetchAuthRepository();

const dependencies = {
  authRepository,
};
export const store = createAppStore(dependencies);

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackRouter />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
