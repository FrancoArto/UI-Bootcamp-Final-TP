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
        
        let momentFormat = moment(splitCompleteHour[1]+" "+splitCompleteHour[2]+", "+splitCompleteHour[5]+" "+splitCompleteHour[3])
        
        let EN = momentFormat.tz('Europe/London')
        let ARG = EN.clone().tz('America/Argentina/Buenos_Aires');

        let parseFormat = moment(ARG).format('HH mm ss');
        let splitARGhour = parseFormat.split(" ", parseFormat.length);
        
        return timeAgo.format(Date.now() -  splitARGhour[0] * splitARGhour[1] * splitARGhour[2] * 1000, 'twitter')
    }

    render() {
        if (this.state.media.media_url) {
            console.log('entro CON');
            return (
                <TweetWithImg
                userName={item.user.name} 
                mainContent={item.text} 
                uri={item.user.profile_image_url_https}
                accountName={item.user.screen_name}
                favorite_count={item.favorite_count}
                retweet_count={item.retweet_count}
                timeAgo={this.toTimeZone(item.created_at)}>
                </TweetWithImg>
            );
        } else {
            console.log('entro SIN');
            
            return (
                <TweetWithoutImg
                userName={item.user.name} 
                mainContent={item.text} 
                uri={item.user.profile_image_url_https}
                accountName={item.user.screen_name}
                favorite_count={item.favorite_count}
                retweet_count={item.retweet_count}
                timeAgo={this.toTimeZone(item.created_at)}>
                </TweetWithoutImg>
            );
        }
    }
}
export default Tweet;
