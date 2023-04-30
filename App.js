import { Routes } from './src/routes/index';
import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });

  return (
    <>
      <StatusBar style={'light'} backgroundColor={'transparent'} />
      {fontsLoaded && <Routes />}
    </>
  );
}
 