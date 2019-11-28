import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#FFF',
    },
    countArea: {
      marginTop: 140,
      justifyContent: "center",
      alignItems: "center", 

      marginBottom:10
    },
    buttonArea: {
      marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center'  
    },
    value: {
      fontSize: 30
    },
    topbutton: {
      marginTop: 50
    },
    button: {
      marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      height: 40,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#fff'
    },
    buttonText: {
      fontSize: 25,
      color: '#fff'
    },
    buttonUp: {
      backgroundColor: '#A53434',
      fontWeight: "bold"
    },
    buttonUpText: {
      backgroundColor: 'red'
    },
    buttonMinus: {
      backgroundColor: '#343EA5'
    },
    buttonTimes: {
      backgroundColor: 'purple'
    },
    buttonDivide: {
      backgroundColor: "green"
    },
    buttonReset: {
      borderColor: '#AFADAD',
      marginBottom: 200
    },
    buttonResetText: {
      color: '#000',
      fontSize:11
    },
    buttonnum: {
      backgroundColor: 'grey',
      fontWeight: "bold",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      width: 60,
      height: 40,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#fff'
    },
    buttonEqual: {
      backgroundColor: "black"
    }
  });

  export default (styles);