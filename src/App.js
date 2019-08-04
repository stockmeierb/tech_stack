import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./reducers";
import { Header } from "./components/common";
import LibraryList from "./components/LibaryList";
import LibaryList from "./components/LibaryList";

const App = () => {
  return (
    <Provider store={createStore(Reducer)}>
      <View>
        <Header headerText="Tech Stack" />
        <LibaryList />
      </View>
    </Provider>
  );
};

export default App;
