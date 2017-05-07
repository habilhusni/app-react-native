import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import Header from './Header';
import Content from './Content';
import BrunoMars from './Contents/BrunoMars';
import Coldplay from './Contents/Coldplay';
import EdSheeran from './Contents/EdSheeran';
import Eminem from './Contents/Eminem';
import Paramore from './Contents/Paramore';
import PayungTeduh from './Contents/PayungTeduh';
import Raisa from './Contents/Raisa';
import RedJumpsuit from './Contents/RedJumpsuit';
import Tulus from './Contents/Tulus';
import TwentyOne from './Contents/TwentyOne';
import Zayn from './Contents/Zayn';
import Footer from './Footer';
import Home from './Home';

const App = StackNavigator({
  Home       : { screen: Home },
  Content    : { screen: Content },
  BrunoMars  : { screen: BrunoMars },
  Coldplay   : { screen: Coldplay },
  EdSheeran  : { screen: EdSheeran },
  Eminem     : { screen: Eminem },
  Paramore   : { screen: Paramore },
  PayungTeduh: { screen: PayungTeduh },
  Raisa      : { screen: Raisa },
  RedJumpsuit: { screen: RedJumpsuit },
  Tulus      : { screen: Tulus },
  TwentyOne  : { screen: TwentyOne },
  Zayn       : { screen: Zayn },
})

export default App;
