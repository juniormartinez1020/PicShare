import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { ActivityIndicator, Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  const cam = useRef<CameraView>(null)

  if (!permission) {
    // Camera permissions are still loading.
    return <ActivityIndicator />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

 async function takePhoto() {
    console.log('take photo')
   const pic = await cam.current?.takePictureAsync()
   console.log(JSON.stringify(pic, null, 2))
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cam} style={styles.camera} facing={facing}>
        <View
        className='absolute bottom-0 h-10 w-full p-4'
        >
          <Ionicons 
          name='camera-reverse'
          size={24}
          color='whitesmoke'
          onPress={toggleCameraFacing}
          />
        </View>
      </CameraView>



      {/* footer */}
      <SafeAreaView
      edges={['bottom']}
      className='flex-row bg-transparent w-full
      p-4 justify-center items-center'
      >
        <Pressable 
        onPress={takePhoto}
        className='bg-yellow-50 rounded-full w-20 h-20
        '
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
