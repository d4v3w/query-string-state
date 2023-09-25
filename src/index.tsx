import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

import { App, Card } from "./App";
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