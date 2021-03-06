import React, { Component } from "react";
import API from "../utils/API";
import {
  Platform,
  StatusBar,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Alert
} from "react-native";
import PasswordInputText from "react-native-hide-show-password-input";
import { Input, Button, Overlay, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import RF from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AwesomeAlert from 'react-native-awesome-alerts';

class userregScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    showAlert: false,
    isVisible: true,
    fname: "",
    lname: "",
    emailaddress: "",
    password: "",
    phonenumber: ""
  };

  handleClick = () => {
    // event.preventDefault
    // console.log("Test", user)
    API.saveUser({
      fname: this.state.fname,
      lname: this.state.lname,
      emailaddress: this.state.emailaddress,
      password: this.state.password,
      phonenumber: this.state.phonenumber
    })
      this.showAlert();
      this.setState({
        fname: "",
        lname: "",
        emailaddress: "",
        password: "",
        phonenumber: ""
      })
  };

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {

    const {showAlert} = this.state;

    return (
      <ImageBackground
        source={require("../assets/beer-background.jpg")}
        style={styles.container}
      >
        <View>
          <Text
            style={styles.header}
            containerStyle={{ backgroundColor: "#d3d3d3", opacity: 0.7 }}
          >
            S P E N T G R A I N S
          </Text>
          <KeyboardAwareScrollView>
            <Card
              isVisible={this.state.isVisible}
              containerStyle={{
                flex: 3,
                backgroundColor: "#d3d3d3",
                opacity: 0.7,
                marginBottom: 500
              }}
            >
              <Input
                placeholder="Enter First Name"
                placeholderTextColor="black"
                keyboardType="default"
                value={this.state.fname}
                onChangeText={fname => this.setState({ fname })}
              />
              <Input
                placeholder="Enter Last Name"
                placeholderTextColor="black"
                keyboardType="default"
                value={this.state.lname}
                onChangeText={lname => this.setState({ lname })}
              />
              <Input
                placeholder="Enter Phonenumber"
                placeholderTextColor="black"
                keyboardType="numbers-and-punctuation"
                value={this.state.phonenumber}
                onChangeText={phonenumber => this.setState({ phonenumber })}
              />
              <Input
                placeholder="Enter Email "
                placeholderTextColor="black"
                keyboardType="email-address"
                value={this.state.emailaddress}
                onChangeText={emailaddress => this.setState({ emailaddress })}
              />
              <PasswordInputText
                placeholder="Create Password"
                placeholderTextColor="black"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
              <Button
                title="SAVE USER"
                // onPress={() => this.props.navigation.navigate("Profile")}
                onPress={this.handleClick}
                buttonStyle={{
                  backgroundColor: "black",
                  borderRadius: 5,
                  width: 200,
                  alignSelf: "center",
                  margin: 5
                }}
              />
              <Button
                title="RETURN TO LOGIN"
                // onPress={() => this.props.navigation.navigate("Profile")}
                onPress={() => this.props.navigation.navigate("Login")}
                buttonStyle={{
                  backgroundColor: "black",
                  borderRadius: 5,
                  width: 200,
                  alignSelf: "center",
                  margin: 5
                }}
              />
            </Card>
          </KeyboardAwareScrollView>

          <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Registered"
          message="Thank You For Registering."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          // cancelText="No, cancel"
          confirmText="Return"
          confirmButtonColor="black"
          // onCancelPressed={() => {
          //   this.hideAlert();
          // }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />

        </View>
      </ImageBackground>
    );
  }
}

export default userregScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  overlayContainer: {
    flex: 2
  },
  top: {
    height: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    textAlign: "center",
    color: "black",
    padding: 20,
    fontSize: RF(4),
    borderColor: "black",
    borderWidth: 2,
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
    marginLeft: "10%",
    marginRight: "10%",
    marginBottom: "20%",
    backgroundColor: "#d3d3d3"
  },
  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    button: {
      margin: 10,
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderRadius: 5,
      backgroundColor: "#AEDEF4",
    },
    text: {
      color: '#fff',
      fontSize: 15
    }
});
