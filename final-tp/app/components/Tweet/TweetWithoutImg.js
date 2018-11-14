import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Thumbnail, Text, Icon, Button } from 'native-base';
import styles from './tweetWithoutImg.style';
import { Font, AppLoading } from "expo";

class Tweet extends Component {

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

    render() {

        if (this.state.loading) {
          return (

              <AppLoading />

          );
        }

        return (

                <View style={[styles.flexTweet]}>

                    <View style={[styles.flexUserImg]}>
                        <Thumbnail small source={{uri: this.props.uri}} />
                    </View>

                    <View style={[styles.flexRightSide]}>

                        <View style={[styles.flexTitle]}>
                            <Text style={[styles.fontUserName]}> {this.props.userName} </Text>
                            <Text style={[styles.fontCountNameAndTime]}> @{this.props.accountName} - {this.props.timeAgo} </Text>
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

        );
    }
}
export default Tweet;