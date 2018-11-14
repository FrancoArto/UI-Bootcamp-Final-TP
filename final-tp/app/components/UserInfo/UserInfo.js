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
                    <Image source={{uri: 'https://pbs.twimg.com/profile_banners/25992212/1533675118'}}
                           style={styles.banner}
                    />
                </View>
                <View style={styles.userLogoAndNameContainer}>
                    <View style={styles.userImage}>
                        <Thumbnail large source={{uri: 'http://pbs.twimg.com/profile_images/962300034661396481/OzHK6TZr_normal.jpg'}} />
                    </View>
                    <View style={styles.userNameAndHash}>
                        <Text style={styles.userName}>TN - Todo Noticias</Text>
                        <Text>@todonoticias</Text>
                                           
                    </View>
                </View>
                <View style={styles.userDescriptionContainer}>
                   <Text style={styles.desciption}>Noticias las 24 horas, por el canal líder en audiencia y credibilidad de Argentinagffgggggggggggggggggggggggggg</Text>
                   <View style={styles.userStats}>
                        <Text style={styles.statsColor}><Icon type="EvilIcons" name="location" />Argentina</Text>
                        <TouchableOpacity onPress={() => Linking.openURL('tn.com.ar')}>
                            <Text style={{color:'blue'}}><Icon type="EvilIcons" name="link"/> tn.com.ar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.userStats}>
                        <Text style={styles.statsColor}><Icon type="EvilIcons" name="calendar" />Se unio el: Mon Mar 23 12:35:07 +0000 2009</Text>
                    </View>
                    <View style={styles.userStats}>
                        <Text style={styles.statsColor}><Icon style={styles.iconStyle} type="SimpleLineIcons" name="user-following" /><Text>  122  </Text>Siguiendo </Text>
                        <Text style={styles.statsColor}><Icon type="EvilIcons" name="check" /><Text>  4648878  </Text>Seguidores</Text>
                    </View>
                </View>                
            </View>
        )
        
    }
}
