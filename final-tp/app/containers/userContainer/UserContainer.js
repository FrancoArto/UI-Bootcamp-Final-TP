'use strict';
import React, { Component } from 'react';
import { UserInfo } from '../../components/UserInfo/UserInfo'
import {
    View,
    ActivityIndicator,
    Text
} from 'react-native';

export class UserContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {     
        return(
            <View style={{flex:1}}>
                <UserInfo
                    user={this.props.userData}
                />
            </View>
        )
    }
}
