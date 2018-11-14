'use strict';

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Content, Item, Button, Input, Icon } from 'native-base';
import styles from './Search.style';


class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
          searchText: ''
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.handleOnPress = this.handleOnPress.bind(this);
    }
    
    handleOnPress() {
      let search = this.state.searchText;
      search = search.replace(/#/, '%23');
      this.props.onSearch(search);
    }

    onChangeText(value) {
      this.setState({searchText: value})
    }
    

    render() {
        return(
          <View style={styles.container}>
            <Content>
              <Item style={styles.hideBottomBorder}>
                <Item style={styles.input}> 
                  <Icon active name='search' style={{color: 'lightskyblue'}} />
                  <Input value={this.state.searchText} onChangeText={this.onChangeText} />                
                </Item>
                <Item style={[styles.searchButton, styles.hideBottomBorder]}>
                  <Button info onPress={this.handleOnPress}>
                    <Text style={styles.searchButtonText}>Search</Text>
                  </Button>                
                </Item>
              </Item>             
            </Content>
          </View>
        );
    }
};

export default Search;