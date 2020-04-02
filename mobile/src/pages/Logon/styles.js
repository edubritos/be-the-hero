import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
container:{
    flex:1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight + 20,
},

header: {
    marginTop:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
},

title: {
    justifyContent:'center',
    alignItems:'center',
    fontSize:30,
    marginBottom: 16,
    marginTop: 50,
    marginLeft:50,
    color: '#13131a',
    fontWeight: 'bold',
    flexDirection:'row'
},
idLogon: {
    height: 50,
    marginTop:50,
    fontSize:20,
    color:'#737380',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth:2,
    borderBottomColor:'#999',
},
logonButton: {
    marginTop:50,
    backgroundColor:'#e02041',
    borderRadius: 8,
    height:60,
    width:200,
    marginLeft:50,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row',
},
logonButtonText: {
    color:'#FFF',
    fontSize:15,
    fontWeight:'bold'
},
cadasButtonText: {
    color: '#e02041',
    fontSize:15,
    fontWeight:'bold',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row',
    borderRadius: 8,
    height:60,
    width:200,
    marginLeft:120,
    marginTop:40,
}
});