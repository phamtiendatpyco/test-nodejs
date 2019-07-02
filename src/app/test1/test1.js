import dataUtil from './data.util';

exports.printTest1Result = () => {
    const maps = dataUtil.loadData('key1=value1;key2=value2\nkeyA=valueA');
    console.log('*******************************************************');
    console.log('Load Data:');
    console.log(maps);
    console.log('*******************************************************');
    console.log('Store Data:');
    const text = dataUtil.storeData(maps);
    console.log(JSON.stringify(text));
    console.log('*******************************************************');
};
