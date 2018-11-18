import React from 'react';
import { AppRegistry, Alert, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation';

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  Image,
  H1,
} from 'native-base';

export default class Profile extends React.Component {
  componentDidMount() {
    const { navigation } = this.props;
    if (navigation.state.params !== undefined) {
      Alert.alert('USER found', navigation.state.params.name);
    }
  }

  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    drawerLabel: 'Profile',
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
          <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Icon active name="paper-plane" />
              <Text>Show User profiles here</Text>
              <Right>
                <Icon name="close" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});