import { StyleSheet,Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        borderBottomColor:'black',
        borderBottomWidth:1
    },
    bannerContainer:{
        flex:27
    },
    banner:{
        width: width,
        height:height/4
    },
    userLogoAndNameContainer:{
        flex:20,
        flexDirection:'row'
    },
    userImage: {
        
    },
    userName:{
        fontSize: 25,
        fontWeight: 'bold'
    },
    userNameAndHash:{
        marginLeft:5,
        marginTop:28      
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
        fontSize:16,
        fontWeight:'400'
    },
    statsColor:{
        color: '#989898',
        fontSize:13
    },
    iconStyle: {
        fontSize: 20
    }

})