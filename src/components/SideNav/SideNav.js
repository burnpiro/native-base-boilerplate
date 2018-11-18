import React from 'react';
import { AppRegistry, Image, StatusBar } from 'react-native';
import { Text, Container, List, ListItem, Content } from 'native-base';

const routes = [{ name: 'Home', label: 'Home' }, { name: 'ProfileScreen', label: 'Profiles' }];
export default class SideBar extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png',
            }}
            style={{
              height: 120,
              width: '100%',
              alignSelf: 'stretch',
              position: 'absolute',
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: 'absolute',
              alignSelf: 'center',
              top: 20,
            }}
            source={require('../Home/icon.png')}
          />
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => (
              <ListItem button onPress={() => navigation.navigate(data.name)}>
                <Text>{data.label}</Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
