import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { DataSource } from 'typeorm';
import useSqliteDataSourcea from '../datasources/useSqliteDataSourcea';



export default function useCachedResources() {

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  //Bring the custom hook we wrote into this Component for use. To be explained in class
  const sqliteDataSourcea = useSqliteDataSourcea();

  //We need to hold the dataSourcea once opened, so we can pass it to components for connection.
  const [dataSourcea, setDataSourcea] = useState<DataSource | null >(null);
  
  //declare the function that we will use to get data source from the hook
  const getDataSourcea = async () => {
    try {
      const dataSourcea = await sqliteDataSourcea;
      setDataSourcea(dataSourcea); //success! save in state
    } catch (error) {
      setDataSourcea(null); //problem! set undefined in state
    }
  }

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts. Below is from the official example. Feel free to explore it
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../../../assets/fonts/SpaceMono-Regular.ttf'),
        });
        
        //Let's attempt to get dataSourcea here as well
        await getDataSourcea();

        //Here, you could also attempt to get settings in async storage. May not be necessary

      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return {isLoadingComplete, dataSourcea};

}
