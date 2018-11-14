import { StyleSheet } from 'react-native';

const searchContainerStyle = StyleSheet.create({
  activityIndicatorContainer:{
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
  },

  container: {
    flex:1,
    backgroundColor: '#F5F5F5', 
    paddingTop:20,
    paddingHorizontal: 10
  }
});

export default searchContainerStyle;