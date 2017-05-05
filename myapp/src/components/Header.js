import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Icon, Button } from 'native-base';

import Contents from './Content'

class Header extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
  }
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.navbar}>
        <Text style={{textAlign: 'center', marginTop: 10, color: '#4a474b', fontSize: 22}}>
          { this.props.nama }
        </Text>
        <Container style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Content>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Coldplay Content</Text>
            </Button>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Payung Teduh Content</Text>
            </Button>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Ed Sheeran Content</Text>
            </Button>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Zayn Content</Text>
            </Button>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Paramore Content</Text>
            </Button>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Eminem Content</Text>
            </Button>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Red Jumpsuit Apparatus Content</Text>
            </Button>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Bruno Mars Content</Text>
            </Button>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Twenty One Pilot Content</Text>
            </Button>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Raisa Content</Text>
            </Button>
            <Button
              style={{flex: 1, flexDirection: 'column', alignSelf: 'center'}}
              onPress={() => navigate('Content')}
            >
              <Text>Tulus Content</Text>
            </Button>
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
    flex: 8,
    justifyContent: 'flex-start',
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
