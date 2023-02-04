import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Platform, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';

// Define how the notifications will be handled by the app
// This should just run once when the app starts
Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    const configurePushNotifications = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert(
          'Permission required',
          'Push notifications need the appropiate permisssions.',
        );
        return;
      }

      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log(pushTokenData);

      if (Platform.OS === 'android') {
        // Extra configuration. This channel is required by android.
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    };

    configurePushNotifications();
  }, []);

  useEffect(() => {
    const suscription1 = Notifications.addNotificationReceivedListener(
      notification => {
        console.log('NOTIFICATION RECEIVED');
        console.log(notification);
        const userName = notification.request.content.data.userName;
        console.log('Username', userName);
      },
    );

    const suscription2 = Notifications.addNotificationResponseReceivedListener(
      response => {
        console.log('NOTIFICATION RESPONSE RECEIVED');
        const userName = response.notification.request.content.data.userName;
        console.log(response);
      },
    );

    return () => {
      suscription1.remove();
      suscription2.remove();
    };
  }, []);

  const scheduleNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'This is the body of the notification.',
        data: {
          userName: 'Joseff',
        },
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  const sendPushNotificationHandler = () => {
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `{
        "to": "ExponentPushToken[ ;) ]",
        "title":"Test - sent from a device",
        "body": "This is a test!"
      }`,
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
      <Button
        title="Send Push Notification"
        onPress={sendPushNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
