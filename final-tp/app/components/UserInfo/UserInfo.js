'use strict';
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from './userInfo.style';
import { Thumbnail, Icon } from 'native-base';


export class UserInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.bannerContainer}>
                    <Image source={{uri: this.props.user.profile_banner_url}}
                           style={styles.banner}
                    />
                </View>
                <View style={styles.userLogoAndNameContainer}>
                    <View style={styles.userImage}>
                        <Thumbnail large source={{uri: this.props.user.profile_image_url}} />
                    </View>
                    <View style={styles.userNameAndHash}>
                        <Text style={styles.userName}>{ this.props.user.name }</Text>
                        <Text>@todonoticias</Text>
                                           
                    </View>
                </View>
                <View style={styles.userDescriptionContainer}>
                   <Text style={styles.desciption}>{this.props.user.description}</Text>
                   <View style={styles.userStats}>
                        <Text style={styles.statsColor}><Icon type="EvilIcons" name="location" />{this.props.user.location}</Text>
                        <TouchableOpacity onPress={() => Linking.openURL(this.props.user.entities.url.urls[0].url)}>
                            <Text style={{color:'blue'}}><Icon type="EvilIcons" name="link"/> {this.props.user.entities.url.urls[0].display_url}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userStats}>
                        <Text style={styles.statsColor}><Icon type="EvilIcons" name="calendar" />{this.props.user.created_at}</Text>
                    </View>
                    <View style={styles.userStats}>
                        <Text style={styles.statsColor}><Icon style={styles.iconStyle} type="SimpleLineIcons" name="user-following" /><Text>  {this.props.user.friends_count}  </Text>Siguiendo </Text>
                        <Text style={styles.statsColor}><Icon type="EvilIcons" name="check" /><Text>  {this.props.user.followers_count}  </Text>Seguidores</Text>
                    </View>
                </View>                
            </View>
        )
        
    }
}
