import { EMPTY_STRING } from '../constants/commonConstant';

const EQUAL_SEPARATOR = '=';
const LINE_SEPARATOR = '\n';
const SEMI_COLON_SEPARATOR = ';';
const KEY_INDEX = 0;
const VALUE_INDEX = 1;

const isNotLastElement = (currentIndex, length) => currentIndex + 1 < length;

const resoveldData = (data) => {
    if (!data) {
        return EMPTY_STRING;
    }
    return Object.keys(data).map((k, currentIndex) => `${k}${EQUAL_SEPARATOR}${data[k]}`).join(SEMI_COLON_SEPARATOR);
};
exports.storeData = (data) => data.reduce(
    (result, currentData, currentIndex) =>
        `${result}${resoveldData(currentData)}${isNotLastElement(currentIndex, data.length) ? LINE_SEPARATOR : EMPTY_STRING}`,
    EMPTY_STRING);

exports.loadData = (data) => {
    const resultData = [];
    const mapText = data.split(LINE_SEPARATOR);
    mapText.forEach((element) => {
        const keyValueTexts = element.split(SEMI_COLON_SEPARATOR);
        let resultKeyValueTexts = {};
        keyValueTexts.forEach((element1) => {
            const keyValueArray = element1.split(EQUAL_SEPARATOR);
            resultKeyValueTexts[keyValueArray[KEY_INDEX]] = keyValueArray[VALUE_INDEX];
        });
        resultData.push(resultKeyValueTexts);
    });
    return resultData;
};
