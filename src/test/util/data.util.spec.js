import { expect } from 'chai';
import sinon from 'sinon';
import dataUtil from '../../app/util/data.util';

describe('DataUtil', () => {
  let sandbox;

  beforeEach(() => {
    // Before each test case.
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    // After each test case.
    sandbox.restore();
  });

  describe('store data', () => {
    it('should return string text successfully', () => {
      // Given
      const data = [{
        key1: 'value1',
        key2: 'value2',
      },
      {
        keyA: 'valueA'
      }];

      // When
      const text = dataUtil.storeData(data);
      // Then
      expect('key1=value1;key2=value2\nkeyA=valueA').is.equals(text);
    });
  });

  describe('load data', () => {
    it('should return object successfully', () => {
      // Given
      const data = [{
        key1: 'value1',
        key2: 'value2',
      },
      {
        keyA: 'valueA'
      }];

      // When
      const maps = dataUtil.loadData("key1=value1;key2=value2\nkeyA=valueA");

      // Then
      expect(data).to.deep.equals(maps);
    });
  });

});
