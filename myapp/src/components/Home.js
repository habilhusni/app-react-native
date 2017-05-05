import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Icon, Button, Left, Header, Body, Title, Right } from 'native-base';

import Headers from './Header';
import Footer from './Footer';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Coldplay Albums'
    }
  }
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <Container style={{ width: '100%',  backgroundColor: 'white' }}>
          <Header style={{ width: '100%' }}>
            <Left>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
            </Left>
            <Body>
              <Title>Coldplay Albums</Title>
            </Body>
          </Header>
        </Container>
        <Headers nama={this.state.name} navigation={this.props.navigation}/>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default Home;
