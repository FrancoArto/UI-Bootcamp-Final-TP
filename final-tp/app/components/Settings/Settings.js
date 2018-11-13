'use strict';

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, Content, CardItem, ListItem, CheckBox, Body } from 'native-base';
import styles from './settings.style';


class Settings extends Component {
  constructor(props) {
    super(props);

  }
    
    

  render() {
    return(
      <Content>
        <Card>
          <CardItem style={styles.card}>
            <Body>
              <Text style={styles.cardText}>
                Silence notifications from...
              </Text>
            </Body>
          </CardItem>
        </Card>
        <ListItem>
          <Body>
            <Text>People who have not verified the account</Text>
          </Body>
          <CheckBox checked={true} />
        </ListItem>
        <ListItem>          
          <Body>
            <Text>People who do not follow</Text>
          </Body>
          <CheckBox checked={false} />
        </ListItem>
        <ListItem>          
          <Body>
            <Text>People who have default profile information</Text>
          </Body>
          <CheckBox checked={false} />
        </ListItem>
        <ListItem>          
          <Body>
            <Text>Tweets that contains a link</Text>
          </Body>
          <CheckBox checked={false} />
        </ListItem>
        <ListItem>          
          <Body>
            <Text>Tweets that has text truncated</Text>
          </Body>
          <CheckBox checked={false} />
        </ListItem>
      </Content>
    );
  } 
};

export default Settings;