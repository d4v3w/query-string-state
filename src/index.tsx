import React from "react";
import * as ReactDOMClient from "react-dom/client";

import {App, Card} from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const cards: Card[] = [
  {
    id: '1',
    title: 'Card 1'
  },
  {
    id: '2',
    title: 'Card 2'
  }
];

root.render(
  <App cards={cards} />
);