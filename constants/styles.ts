import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    width: "80%",
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 30,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  formInput: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  inputGroup: {
    width: "100%",
    justifyContent: "center",
    gap: 10,
  },
  checkbox: {
    margin: 8,
  },
});

export default styles;
