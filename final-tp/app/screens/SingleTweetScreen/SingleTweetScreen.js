import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Thumbnail, Text, Icon, Button } from 'native-base';
import styles from './singleTweetScreen.style';
import { Font, AppLoading } from "expo";
import { connect } from 'react-redux';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import moment from 'moment-timezone';
import { fetchUserDataRequest } from '../../store/users/userActions';
import Hyperlink from 'react-native-hyperlink'


export class SingleTweetScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: true };

        this.goToUserProfile = this.goToUserProfile.bind(this)
    }

    goToUserProfile() {
        this.props.dispatch(fetchUserDataRequest(this.props.tweet.user.id))
        this.props.navigation.navigate('UserProfile')
    }

    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: false });
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


    render() {

        const { navigation } = this.props;

        if (this.state.loading) {
            return (
                <AppLoading />
            );
        } else {
            if (this.props.loading) {
                return (
                    <View style={styles.activityIndicatorContainer}>
                        <ActivityIndicator animating={true} />
                    </View>
                );
            } else {
                let img
                if ((this.props.tweet.entities.media) && (this.props.tweet.entities.media.length > 0)) {
                    let array = this.props.tweet.entities.media[0]
                    img = <View style={[styles.flexImage]}>
                        <Image
                            style={[styles.imageTweet]}
                            source={{ uri: array.media_url }}
                        />
                    </View>
                }

                return (
                    <View style={[styles.flexTweet]}>

                        <View style={[styles.flexHead]}>
                            <View style={[styles.flexUserImg]}>
                                <TouchableOpacity onPress={this.goToUserProfile}>
                                    <Thumbnail large source={{ uri: this.props.tweet.user.profile_image_url_https }} />
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.flexTitleColumn]}>
                                <View style={[styles.flexTitle]}>
                                    <Text style={[styles.fontUserName]}> {this.props.tweet.user.name} </Text>
                                </View>

                                <View style={[styles.flexTitle]}>
                                    <Text style={[styles.fontCountNameAndTime]}> @{this.props.tweet.user.screen_name}</Text>
                                    <Text style={[styles.fontCountNameAndTime]}> - {this.toTimeZone(this.props.tweet.created_at)}</Text>
                                </View>
                            </View>
                        </View>


                        <View style={[styles.flexContent]}>
                            <Hyperlink linkDefault={ true } linkStyle={styles.linkStyle}> 
                                <Text style={[styles.fontMainContent]}> {this.props.tweet.text} </Text>
                            </Hyperlink>
                        </View>


                        {img}


                        <View style={[styles.flexIcons]}>
                            <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                                <Icon type="SimpleLineIcons" name="heart" style={[styles.sizeIcons]} />
                                <Text style={[styles.fontNumberIcons]}>{this.props.tweet.favorite_count}</Text>
                            </Button>

                            <Button iconLeft transparent primary style={[styles.buttonIcons]}>
                                <Icon type="SimpleLineIcons" name="refresh" style={[styles.sizeIcons]} />
                                <Text style={[styles.fontNumberIcons]}>{this.props.tweet.retweet_count}</Text>
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
}

function mapStateToProps(state, props) {
    return {
        loading: state.tweetsReducer.loadingSingleTweet,
        tweet: state.tweetsReducer.singleTweet,
    }
}
export default connect(mapStateToProps)(SingleTweetScreen);
