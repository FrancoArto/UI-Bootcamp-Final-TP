import { StyleSheet } from 'react-native';

const searchContainerStyle = StyleSheet.create({
  activityIndicatorContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
  },

  container: {
    flex:1, 
    paddingTop:20,
    paddingHorizontal: 10
  }
});

export default searchContainerStyle;