import React, { Component } from 'react';
import TweetWithoutImg from './TweetWithoutImg'
import TweetWithImg from './TweetWithImg'

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import moment from 'moment-timezone';
TimeAgo.addLocale(en);

class Tweet extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    toTimeZone(apiHour) {
        const timeAgo = new TimeAgo('en-EN');
        let splitCompleteHour = apiHour.split(" ", apiHour.lenght);
        
        let momentFormat = moment(splitCompleteHour[1]+" "+splitCompleteHour[2]+", "+splitCompleteHour[5]+" "+splitCompleteHour[3], "MMM ddd YYYY HH:mm:ss")
        
        let EN = momentFormat.tz('Europe/London')
        let ARG = EN.clone().tz('America/Argentina/Buenos_Aires');

        let parseFormat = moment(ARG).format('HH mm ss');
        let splitARGhour = parseFormat.split(" ", parseFormat.length);
        
        return timeAgo.format(Date.now() -  splitARGhour[0] * splitARGhour[1] * splitARGhour[2] * 1000, 'twitter')
    }

    render() {
        if (this.props.media) {
            return (
                <TweetWithImg
                userName={this.props.userName} 
                mainContent={this.props.mainContent} 
                uri={this.props.uri}
                accountName={this.props.accountName}
                favorite_count={this.props.favorite_count}
                retweet_count={this.props.retweet_count}
                timeAgo={this.toTimeZone(this.props.created_at)}
                media={this.props.media}>
                </TweetWithImg>
            );
        } else {
            return (
                <TweetWithoutImg
                userName={this.props.userName} 
                mainContent={this.props.mainContent} 
                uri={this.props.uri}
                accountName={this.props.accountName}
                favorite_count={this.props.favorite_count}
                retweet_count={this.props.retweet_count}
                timeAgo={this.toTimeZone(this.props.created_at)}>
                </TweetWithoutImg>
            );
        }
    }
}
export default Tweet;
