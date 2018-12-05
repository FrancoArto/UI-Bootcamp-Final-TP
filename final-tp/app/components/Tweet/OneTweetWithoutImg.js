import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Thumbnail, Text, Icon, Button } from 'native-base';
import styles from './oneTweet.style';
import { Font, AppLoading } from "expo";

class OneTweetWhitoutImg extends Component {

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

        const { navigation } = this.props;

        if (this.state.loading) {
            return (
                <AppLoading />
            );
        } else {
            return (
                <View style={[styles.flexTweet]}>

                    <View style={[styles.flexHead]}>
                        <View style={[styles.flexUserImg]}>
                            <TouchableOpacity onPress={() => navigation.navigate('UserProfile', { user: navigation.getParam('user', 'USER_ERROR') })}>
                                <Thumbnail large source={{ uri: navigation.getParam('uri', 'URI_ERROR') }} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.flexTitleColumn]}>
                            <View style={[styles.flexTitle]}>
                                <Text style={[styles.fontUserName]}> {navigation.getParam('user', 'USER_ERROR').name} </Text>
                            </View>

                            <View style={[styles.flexTitle]}>
                                <Text style={[styles.fontCountNameAndTime]}> @{navigation.getParam('countName', 'COUNT-USER_ERROR')}</Text>
                                <Text style={[styles.fontCountNameAndTime]}> - {navigation.getParam('timeAgo', 'TIME-AGO_ERROR')}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.flexContent]}>
                        <Text style={[styles.fontMainContent]}> {navigation.getParam('mainContent', 'MAIN-CONTENT_ERROR')} </Text>
                    </View>

                    <View style={[styles.flexIcons]}>
                        <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                            <Icon type="SimpleLineIcons" name="heart" style={[styles.sizeIcons]} />
                            <Text style={[styles.fontNumberIcons]}>{this.props.favorite_count}</Text>
                        </Button>

                        <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                            <Icon type="SimpleLineIcons" name="refresh" style={[styles.sizeIcons]} />
                            <Text style={[styles.fontNumberIcons]}>{this.props.retweet_count}</Text>
                        </Button>

                        <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                            <Icon type="SimpleLineIcons" name="bubble" style={[styles.sizeIcons]} />
                            <Text style={[styles.fontNumberIcons]}></Text>
                        </Button>
                    </View>
                </View>
            );
        }
    }
}
export default OneTweetWhitoutImg;
