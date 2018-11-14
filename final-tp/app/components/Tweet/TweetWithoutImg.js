import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Thumbnail, Text, Icon, Button } from 'native-base';
import styles from './tweet.style';
import { Font, AppLoading } from "expo";

class TweetWithoutImg extends PureComponent {

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

        return (
            <TouchableOpacity onPress={() => this.props.navigationProp.navigate('OneTweet',{
                user: this.props.user.name,
                uri: this.props.uri,
                countName: this.props.user.screen_name,
                timeAgo: this.props.timeAgo,
                mainContent: this.props.mainContent,
                userCount: this.props.user,
                navigationProp: this.props.navigationProp,
                truncated: this.props.truncated
                })} >

                <View style={[styles.flexTweet]}>

                    <TouchableOpacity onPress={() => this.props.navigationProp.navigate('UserProfile',{user: this.props.user })}>
                        <View style={[styles.flexUserImg]}>
                            <Thumbnail small source={{uri: this.props.uri}} />
                        </View>
                    </TouchableOpacity> 

                    <View style={[styles.flexRightSide]}>

                        <View style={[styles.flexTitle]}>
                            <Text style={[styles.fontUserName]}> {this.props.user.name} </Text>
                            <Text style={[styles.fontCountNameAndTime]}> @{this.props.user.screen_name} - {this.props.timeAgo} </Text>
                        </View>

                        <View style={[styles.flexContent]}>
                            <Text style={[styles.fontMainContent]}> {this.props.mainContent} </Text>
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
            </TouchableOpacity>
            );
        }
    }
}
export default TweetWithoutImg;
