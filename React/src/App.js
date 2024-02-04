import './App.css';
import React from 'react';
import { Header } from './Components/header';
import { Welcome } from './Components/welcome';
import { Services } from './Components/services';
import { Team } from './Components/team';
import { Rules } from './Components/rules';
import { Moments } from './Components/moments';

function App() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <title>Welcome to Calm Calamity Guild | Home </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Calm Calamity,Toram Guild,Toram online, Calm Calamity Guild, MMORPG Toram Guild"
        />
        <link rel="stylesheet" href="/new_css/style.css" />
        <script src="/new_js/Js.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Moon+Dance&display=swap"
          rel="stylesheet"
        />
        <link href="css/font-awesome.css" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <div className="intro">
          <div className="Logo">
            <h1>
              <a href="/Site.html">Calm Calamity</a>
            </h1>
          </div>
        </div>
        <Welcome />
        <Services />
        <Team />
        <Rules />
        <Moments />

      </body>
    </>
  );
}

export default App;