import React from 'react'
import { connect } from 'react-redux';

import { fetchDataPayungTeduh } from '../../actions/nativeActionsCreator';

import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Container,
  Content,
  Icon,
  Button,
  Left,
  Body,
  Thumbnail,
  ListItem,
  Right,
  Card,
  CardItem
} from 'native-base';

class PayungTeduh extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchDataPayungTeduh()
  }

  render() {
    console.log('-----=====', this.props.datas);
    return (
      <View style = {styles.content}>
        <Container style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#b7efff' }}>
          <Content>
            { this.props.datas.map((data, index) => (
              <View key={index}>
                <Card >
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>{ data.name }</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      source={{ uri: data.images[0].url }}
                      style={{ width: '100%', height: 400 }}
                    />
                  </CardItem>
                  <CardItem>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>12 Likes</Text>
                    </Button>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>4 Comments</Text>
                    </Button>
                    <Text>11h ago</Text>
                  </CardItem>
                </Card>
              </View>
            )) }
          </Content>
        </Container>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
    datas: state.datas
})

const mapDispatchToProps = dispatch => ({
  fetchDataPayungTeduh: () => dispatch(fetchDataPayungTeduh())
})

export default connect(mapStateToProps, mapDispatchToProps)(PayungTeduh)
