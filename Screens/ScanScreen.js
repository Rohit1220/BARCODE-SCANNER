import * as React from 'react';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default class ScanScreen extends React.component {
  constructor() {
    super();
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal',
    };
  }
  getCameraPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermissions: status === 'granted',
    });
  };
  render() {
    const hasCameraPermissions = this.state.hasCameraPermissions;
    return (
      <View>
        <Image
          style={styles.IconImage}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg',
          }}
        />
        if (buttonState === clicked) {this.getCameraPermissions} else{' '}
        {(buttonState = 'normal')}
        <TouchableOpacity
          onPress={this.getCameraPermissions}
          style={StyleSheet.scanButton}
          title="Bar Code Scanner">
          <text style={styles.buttonText}>Scan Qr Code</text>
        </TouchableOpacity>
      </View>
    );
  }
}
