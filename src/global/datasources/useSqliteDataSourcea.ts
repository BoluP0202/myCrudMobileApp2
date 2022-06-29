import { useCallback, useState } from 'react';
import { DataSource } from 'typeorm';
import { Author } from '../../modules/examples/entities/author.entity';
import { Category } from '../../modules/examples/entities/category.entity';
import { Post } from '../../modules/examples/entities/post.entity';
import { AssetEntry } from '../../modules/asset-management/entities/asset-entry.entity';

const dataSource = new DataSource({
    database: "personal_asset_manager.db",
    driver: require('expo-sqlite'),
    entities: [
        //"src/**/*.entity{.ts,.js}" //Not working. I need to investigate this further.
        Post,
        Category,
        Author,
        AssetEntry,
    ],
    synchronize: true,
    type: "expo",

});

//Below is a custom hook that return's react's userCallback call. To be further explained in class
const useSqliteDataSourcea = async () => {
    const [initializedDataSource, setInitializedDataSource] = useState<DataSource | null >(null)
    const initDataSource = useCallback(async () => {//useCallback is a hook to be explained in class. Meanwhile, look it up online.
        try{
            if(!initializedDataSource){ //first time
                const _initializedDataSource = await dataSource.initialize()
                setInitializedDataSource(_initializedDataSource);
                return _initializedDataSource;
            }else{
                return initializedDataSource; //the one in state
            }
        }catch(error){
            return null;
        }
    }, [])
    return await initDataSource();
}
export default useSqliteDataSourcea;