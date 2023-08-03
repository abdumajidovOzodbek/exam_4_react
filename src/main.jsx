/* eslint-disable no-unused-vars */
import React from "react";
import * as ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from "./App";
import Context from "./components/context";
import "./index.css";
import store from "./store/store";
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
const httpLink = createUploadLink({
  uri: 'http://localhost:4000/graphql',
  headers:{
    authorization:`${localStorage.getItem('token')}`
  }
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
      <Provider store={store}>
        <Context>
          <App />
        </Context>
      </Provider>
    </ApolloProvider>
);
