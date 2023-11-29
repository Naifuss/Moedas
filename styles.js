import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A6AF6",
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 35,
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  labelText: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  pickerContainer: {
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 9,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    borderColor: '#FFFFFF',
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 9,
  },
  button: {
    width: 125,
    borderRadius: 20,
    marginTop: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: "#FFFFFF",
  },
  resultText: {
    textAlign: 'center',
    color: "#fff",
  },
});