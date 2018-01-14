import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import news from './News';
import { CardsLayoutManager } from 'configurable-interactive-layout';
import '../node_modules/configurable-interactive-layout/dist/cards-framework.css';

const cardLayoutProperties = {
  config: {
    draggable: true,
    resizable: false,
    rowHeight: 100,
    cardMargin: [10, 10],
    cardPadding: [10, 10],
    breakpoints: [
      {
        id: 'lg',
        col: 12,
        width: 1400,
      },
      {
        id: 'md',
        col: 10,
        width: 1200,
      },
      {
        id: 'sm',
        col: 6,
        width: 1024,
      },
    ],
  },
  cards: [
    {
      i: 'aa',
      title: 'Card A',
      type: 'ReactComponent',
      Content: news
    },
    {
      i: 'bb',
      title: 'Card B',
      type: 'ReactComponent',
      Content: news
    },

  ],
  layouts: [
    {
      breakpoint: 'lg',
      layout: [
        {
          i: 'aa', w: 6, h: 4,
        },
        {
          i: 'bb', w: 6, h: 4,
        }
      ],
    },
    {
      breakpoint: 'md',
      layout: [
        {
          i: 'aa', w: 6, h: 4,
        },
        {
          i: 'bb', w: 4, h: 4,
        }
      ],
    },
    {
      breakpoint: 'sm',
      layout: [
        {
          i: 'aa', w: 6, h: 2,
        },
        {
          i: 'bb', w: 6, h: 2,
        }
      ],
    },
  ],
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CardsLayoutManager
            layoutProps={cardLayoutProperties}

        />


      </div>
    );
  }
}

export default App;
