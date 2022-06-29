import 'reflect-metadata';
import React from 'react';
//import ExamplesHome from './src/modules/examples/ExamplesHome';
import AssetEntryLanding from './src/modules/asset-management/AssetEntryLanding';
import { Text } from '@rneui/base';
import useCachedResourcesa from './src/global/hooks/useCachedResourcesa';

const App: React.FC = () => {

  //Using useCachedResources for dataSourcea loading, while splash screen is on.
  const { isLoadingComplete, dataSourcea } = useCachedResourcesa();

  //Prepare our conditional display. What we display will depend on whether dataSourcea is available or not
  const display = () => {
    if (dataSourcea) {
      return (
        <>
          <AssetEntryLanding dataSource={dataSourcea} />
          {/*<ExamplesHome dataSourcea={dataSourcea} />*/}
        </>
      )
    } else {
      return (
        <Text>
          Cannot get data source
        </Text>
      )
    }
  }

  //Check if loading is complete before returning a view
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        {display()}
        {/* Below is just a footer message */}
        <Text style={{ padding: 6, fontSize: 10, fontStyle: "italic", textAlign: 'center' }}>Copyright: Pius Onobhayedo, Currently Used For Academic Purposes and not for profit</Text>
      </>
    );
  }
}

export default App;