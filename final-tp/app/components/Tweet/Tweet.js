import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Thumbnail, Text, Icon, Button } from 'native-base';
import styles from './tweet.style';
import { Font, AppLoading } from "expo";

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import moment from 'moment-timezone';
TimeAgo.addLocale(en);

class Tweet extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { loading: true };
        _isMounted = false


        this.goToUserProfile = this.goToUserProfile.bind(this)
        this.handleOnPress = this.handleOnPress.bind(this)

    }

    toTimeZone(apiHour) {
        const timeAgo = new TimeAgo('en-EN');
        let splitCompleteHour = apiHour.split(" ", apiHour.lenght);

        let momentFormat = moment(splitCompleteHour[1] + " " + splitCompleteHour[2] + ", " + splitCompleteHour[5] + " " + splitCompleteHour[3], "MMM ddd YYYY HH:mm:ss")

        let EN = momentFormat.tz('Europe/London')
        let ARG = EN.clone().tz('America/Argentina/Buenos_Aires');

        let parseFormat = moment(ARG).format('HH mm ss');
        let splitARGhour = parseFormat.split(" ", parseFormat.length);

        return timeAgo.format(Date.now() - splitARGhour[0] * splitARGhour[1] * splitARGhour[2] * 1000, 'twitter')
    }

    navigationProp() {
        return this.props.navigationProp
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        if (this._isMounted) {
            this.setState({ loading: false });
        }
    }
    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    goToUserProfile() {
        this.props.goToUserProfile(this.props.user.id)
    }

    handleOnPress() {
        this.props.onTweetPress(this.props.id_str)
    }

    render() {
        if (this.state.loading) {
            return (
                <AppLoading />
            );

        } else {

            return (
                <TouchableOpacity onPress={this.handleOnPress} >

                    <View style={[styles.flexTweet]}>

                        <TouchableOpacity onPress={this.goToUserProfile}>
                            <View style={[styles.flexUserImg]}>
                                <Thumbnail small source={{ uri: this.props.uri }} />
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

                            {this.props.media &&
                                <View style={[styles.flexImage, styles.extraMarginWhitImg]}>
                                    <Image small source={{
                                        uri: this.props.media[0].media_url_https
                                    }}
                                        style={[styles.imageTweet]} />
                                </View>
                            }


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
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

export default Tweet;
