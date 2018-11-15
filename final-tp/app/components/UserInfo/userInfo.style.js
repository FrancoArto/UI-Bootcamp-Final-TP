import { StyleSheet,Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        borderBottomColor:'grey',
        borderBottomWidth:0.5
    },
    bannerContainer:{
        flex:22
    },
    banner:{
        width: width,
        height:height/4.5
    },
    userLogoAndNameContainer:{
        flex:20,
        flexDirection:'row'
    },
    userImage: {
        
    },
    userName:{
        fontSize: width/18,
        fontWeight: 'bold'
    },
    userNameAndHash:{
        marginLeft:width/22,
        marginTop:width/10      
    },
    userDescriptionContainer:{
        flex:35,
        marginLeft:4
    },
    userInfo:{
        flex:22
    },
    tweets:{
        flex:9
    },
    userStats:{
        flexDirection:'row',
        marginTop:5
    },
    desciption:{
        fontSize:width/26,
        fontWeight:'400'
    },
    statsColor:{
        color: '#989898',
        fontSize:width/28
    },
    iconStyle: {
        fontSize: 20
    }

})