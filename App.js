import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>
            Search
          </Text>
        </View>
        <View style={styles.list}>
          <Text>
            List
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow"
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    marginTop: StatusBar.currentHeight
  },
  search: {
    padding: 16,
    backgroundColor: "steelblue"
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "skyblue"
  },
});
