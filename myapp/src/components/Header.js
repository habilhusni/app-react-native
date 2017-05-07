import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Icon, Button, Left, Body, Thumbnail, ListItem, Right } from 'native-base';

import Contents from './Content'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.navbar}>
        <Container style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#b7efff' }}>
          <Content>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('Coldplay')}
            >
              <Left>
                <Thumbnail source={require('../img/coldplay.jpg')} />
              </Left>
              <Body>
                <Text>Coldplay</Text>
              </Body>
            </ListItem>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('PayungTeduh')}
            >
              <Left>
                <Thumbnail source={require('../img/payung-teduh.jpg')} />
              </Left>
              <Body>
                <Text>Payung Teduh</Text>
              </Body>
            </ListItem>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('EdSheeran')}
            >
              <Left>
                <Thumbnail source={require('../img/edSheeran.jpg')} />
              </Left>
              <Body>
                <Text>Ed Sheeran</Text>
              </Body>
            </ListItem>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('Zayn')}
            >
              <Left>
                <Thumbnail source={require('../img/zayn.jpg')} />
              </Left>
              <Body>
                <Text>Zayn</Text>
              </Body>
            </ListItem>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('Paramore')}
            >
              <Left>
                <Thumbnail source={require('../img/paramore.jpg')} />
              </Left>
              <Body>
                <Text>Paramore</Text>
              </Body>
            </ListItem>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('Eminem')}
            >
              <Left>
                <Thumbnail source={require('../img/eminem.jpg')} />
              </Left>
              <Body>
                <Text>Eminem</Text>
              </Body>
            </ListItem>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('RedJumpsuit')}
            >
              <Left>
                <Thumbnail source={require('../img/redJumpsuit.jpg')} />
              </Left>
              <Body>
                <Text>Red Jumpsuit Apparatus</Text>
              </Body>
            </ListItem>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('BrunoMars')}
            >
              <Left>
                <Thumbnail source={require('../img/brunoMars.jpg')} />
              </Left>
              <Body>
                <Text>Bruno Mars</Text>
              </Body>
            </ListItem>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('TwentyOne')}
            >
              <Left>
                <Thumbnail source={require('../img/twentyOne.jpg')} />
              </Left>
              <Body>
                <Text>Tweny One Pilot</Text>
              </Body>
            </ListItem>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('Raisa')}
            >
              <Left>
                <Thumbnail source={require('../img/raisa.jpg')} />
              </Left>
              <Body>
                <Text>Raisa</Text>
              </Body>
            </ListItem>
            <ListItem
              avatar
              style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}
              onPress={() => navigate('Tulus')}
            >
              <Left>
                <Thumbnail source={require('../img/tulus.jpg')} />
              </Left>
              <Body>
                <Text>Tulus</Text>
              </Body>
            </ListItem>
          </Content>
        </Container>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: '1%',
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b7efff',
  },
  navbarChil: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});



export default Header;
