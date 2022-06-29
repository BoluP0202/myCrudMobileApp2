import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGroup, Text, Button, Icon } from '@rneui/base';
import { IAssetEntry } from '../types/definitions';


type Props = {
    item: IAssetEntry;
    deleteEntry: Function;
}

const EntrySectionListItem: React.FC<Props> = ({ item, deleteEntry }) => {

    return (
        <View style={styles.inputContainerStyle}>
            <Text style={{ fontSize: 18 }}>Description: {item.description}</Text>
            <Text style={{ fontSize: 18 }}>Value: {item.value}</Text>
            <ButtonGroup
                containerStyle={{ backgroundColor: 'skyblue', width: '40%', borderColor: 'skyblue' }}
                buttons={
                    [<Button
                        icon={<Icon
                            name="edit"
                            color="green"
                        />}
                        type="clear"
                        title="Edit"
                        titleStyle={{ fontSize: 15 }}
                        onPress={() => { }}
                    />,
                    <Button
                        icon={<Icon
                            name="delete"
                            color="red"
                        />}
                        type="clear"
                        title="Delete"
                        titleStyle={{ fontSize: 15 }}
                        onPress={() => {
                            deleteEntry(item.id!)
                        }}
                    />
                    ]
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainerStyle: {
        width: '100%',
        padding: 9
    }
});

export default EntrySectionListItem;