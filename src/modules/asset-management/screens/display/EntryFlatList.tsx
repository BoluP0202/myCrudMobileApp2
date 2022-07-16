import React, {useState, useEffect} from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Badge, Text } from '@rneui/base';
import EntryFlatListItem from './EntryFlatListItem';
import { IAssetEntry } from '../../types/definitions';
import { Input, SearchBar} from '@rneui/themed'

type Props = {
    entries: IAssetEntry[] | [] //array of entries
}

const EntryFlatList: React.FC<Props> = ({ entries }) => {

    const [query, setQuery] = useState<string>()

    const [entriesInState, setEntriesInState] = useState<IAssetEntry[] | [] | null>(null)
    
    useEffect(() => {setEntriesInState(entries)}, [])
    
    const searcher = (query: any) => {
        setQuery(query)
        setEntriesInState(entries.filter(i => i.description?.toLowerCase().includes(query.toLocaleLowerCase())||i.value == query))
    }
    
    return (
        <FlatList
            style={{ width: '100%', padding: 3, backgroundColor: 'skyblue' }}
            data={entriesInState}
            renderItem={({ item }) => (
                <EntryFlatListItem item={item} />
            )}
            ListHeaderComponent={
                () => (
                    <View>
                        <Text h3 style={[styles.inputContainerStyle, { backgroundColor: "lightblue" }]}>Entries so far... <Badge status="primary" value={entries.length} /></Text>
                        <SearchBar
                            placeholder='Enter Asset Desc...'
                            value={query}
                            onChangeText={(query) => {searcher(query)}}
                            autoFocus
                            platform = 'android'
                        />
                    </View>
                )}

            /*
            ListFooterComponent = {
                ()=> (<View style={{backgroundColor:'#ccc', paddingBottom: 30, paddingTop: 3,alignContent:"flex-start"}}><Text style={{fontSize: 15, fontStyle: "italic"}}>Copyright: Pius Onobhayedo</Text></View>)
            }
            */

            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={
                //this component will be rendered in between items
                () => {
                    return (<View style={{ backgroundColor: '#ccc', height: 3, width: '100%' }} />)
                }
            }
        />
    )
}

EntryFlatList.defaultProps = {
    entries: []
}

export default EntryFlatList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: { fontSize: 16, color: 'black' },
    inputContainerStyle: {
        width: '100%',
        padding: 3
    }
});