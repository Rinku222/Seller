import {TabRouter} from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {Text, Snackbar} from 'react-native-paper';
import Header from '../../components/Header/Header';

const OTP = () => {
  const [timer, setTimer] = useState(15);
  const [showSnackbar, setShowSnackbar] = useState(true);
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: '', 5: '', 6: ''});

  const inputOne = useRef();
  const inputTwo = useRef();
  const inputThree = useRef();
  const inputFour = useRef();
  const inputFive = useRef();
  const inputSix = useRef();

  const code = Object.values(otp).toString();

  useEffect(() => {
    const interval = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    console.log('helllo');
    setTimer(15);
  };

  const handleSubmit = () => {
    const latestCode = code.replace(/,/g, '');
    console.log('hello', code.replace(/,/g, ''));
    if (latestCode < 100000) {
      setShowSnackbar(true);
    }
  };

  return (
    <View style={styles.container}>
      {console.log('----->otp ', code.replace(/,/g, ''))}
      <Header />
      <View style={styles.mainContainer}>
        <Text style={styles.headingText}>Enter the verification code</Text>
        <Text style={styles.subHeadingText}>
          A text message with a verification code was just sent to ******8657
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputTextContainer}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={inputOne}
              style={styles.inputText}
              onChangeText={text => {
                setOtp({...otp, 1: text});
                text && inputTwo.current.focus();
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={inputTwo}
              style={styles.inputText}
              onChangeText={text => {
                setOtp({...otp, 2: text});
                text ? inputThree.current.focus() : inputOne.current.focus();
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={inputThree}
              style={styles.inputText}
              onChangeText={text => {
                setOtp({...otp, 3: text});
                text ? inputFour.current.focus() : inputTwo.current.focus();
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={inputFour}
              style={styles.inputText}
              onChangeText={text => {
                setOtp({...otp, 4: text});
                text ? inputFive.current.focus() : inputThree.current.focus();
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={inputFive}
              style={styles.inputText}
              onChangeText={text => {
                setOtp({...otp, 5: text});
                text ? inputSix.current.focus() : inputFour.current.focus();
              }}
            />
          </View>
          <View style={styles.inputTextContainer}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              ref={inputSix}
              style={styles.inputText}
              onChangeText={text => {
                setOtp({...otp, 6: text});
                text ? inputSix.current.focus() : inputFive.current.focus();
              }}
            />
          </View>
        </View>
        <View style={styles.resendContainer}>
          <Text style={styles.resendCodeText}>Didn’t get the code?</Text>
          {timer ? (
            <Text style={styles.timer}>00:{timer}</Text>
          ) : (
            <TouchableOpacity
              onPress={handleResend}
              style={styles.opacityButton}>
              <Text style={styles.resendText}>Resend code</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleSubmit} title="Verify" color="#F79E0E" />
      </View>
      <Snackbar
        visible={showSnackbar}
        onDismiss={() => setShowSnackbar(false)}
        duration={2000}
        style={styles.snackbar}>
        Enter a valid OTP
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
    marginBottom: 12,
  },
  snackbar: {
    backgroundColor: 'red',
    alignItems: 'center',
  },
  container: {
    position: 'relative',
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 22,
    left: 22,
    right: 22,
  },
  mainContainer: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  subHeadingText: {
    fontSize: 14,
    color: '#8A92A6',
    textAlign: 'center',
  },
  resendContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  resendCodeText: {
    fontSize: 14,
    color: '#8A92A6',
    marginRight: 8,
  },
  resendText: {
    color: '#1656FD',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#1656FD',
  },
  timer: {
    color: '#1656FD',
  },
  inputContainer: {
    marginVertical: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputText: {
    fontSize: 20,
    color: '#000',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  inputTextContainer: {
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.5,
    marginHorizontal: 5,
  },
});

export default OTP;
