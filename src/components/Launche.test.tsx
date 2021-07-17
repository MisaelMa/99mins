import {screen} from "@testing-library/react";
import React from "react";
import App from "../pages/index";
import {MockedProvider} from '@apollo/react-testing';
import {ApolloLink} from "@apollo/client/link/core";
import {Provider} from 'react-redux'
import {render} from "./test-utils";

describe("App", () => {
  it("renders without crashing", () => {
    const timeStartLink = new ApolloLink((operation, forward) => {
      operation.setContext({
        start: new Date(),
      });
      return forward(operation);
    });
    render(
        <MockedProvider link={timeStartLink}>
          <App/>
        </MockedProvider>
    );
    expect(screen.getByRole("heading", {name: "Welcome to Next.js!"})).toBeInTheDocument();
  });
});
