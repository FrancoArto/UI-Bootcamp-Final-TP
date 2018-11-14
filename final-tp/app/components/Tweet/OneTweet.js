import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Thumbnail, Text, Icon, Button } from 'native-base';
import styles from './tweet.style';
import { Font, AppLoading } from "expo";

class OneTweet extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: true };
      }

      async componentWillMount() {
        await Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
      }

      /*Ejersicio panteado para continuar (Si es que tenemos tiempo)
      urlInMainContent (mainContent) {
        let re = new RegExp('/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/');
        mainContent.match(re)

        return mainContent
      }*/
      

    render() {
        if (this.state.loading) {
          return (
              <AppLoading />
          );

        } else {
            const { navigation } = this.props;
        return (
                <View style={[styles.flexTweet]}>
                    <TouchableOpacity onPress={() => this.props.navigationProp.navigate('UserProfile',{user: navigation.getParam('userCount', 'USER_ERROR') })}>
                        <View style={[styles.flexUserImg]}>
                            <Thumbnail large source={{uri: navigation.getParam('uri','URI_ERROR')}} />
                        </View>
                    </TouchableOpacity> 

                    <View style={[styles.flexRightSide]}>

                        <View style={[styles.flexTitle]}>
                            <Text style={[styles.fontUserName]}> {navigation.getParam('user','USER_ERROR')} </Text>
                        </View>
                        <View style={[styles.flexTitle]}>
                            <Text style={[styles.fontCountNameAndTime]}> @{navigation.getParam('countName','COUNT-USER_ERROR')}</Text>
                        </View>

                        <View style={[styles.flexContent]}>
                            <Text style={[styles.fontMainContent]}> {navigation.getParam('mainContent','MAIN-CONTENT_ERROR')} </Text>
                        </View>

                        <View style={[styles.flexImage, styles.extraMarginWhitImg]}>
                            <Image small source={{
                                uri: navigation.getParam('media','MEDIA_ERROR')}} 
                                style={[styles.imageTweet]}/>
                        </View>
                        
                        <View style={[styles.flexTitle]}>
                            <Text style={[styles.fontCountNameAndTime]}>{navigation.getParam('timeAgo','TIME-AGO_ERROR')}</Text>
                        </View>

                        <View style={[styles.flexIcons]}>
                            
                            <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                                <Icon type="SimpleLineIcons" name="heart" style={[styles.sizeIcons]}/>
                                <Text style={[styles.fontNumberIcons]}>{this.props.favorite_count}</Text>
                            </Button>

                            <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                                <Icon type="SimpleLineIcons" name="refresh" style={[styles.sizeIcons]}/>
                                <Text style={[styles.fontNumberIcons]}>{this.props.retweet_count}</Text>
                            </Button>

                            <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                                <Icon type="SimpleLineIcons" name="bubble" style={[styles.sizeIcons]}/>
                                <Text style={[styles.fontNumberIcons]}></Text>
                            </Button>
                        </View>

                    </View>
                </View>
            );
        }
    }
}
export default OneTweet;
