import { expect } from 'chai';
import sinon from 'sinon';
import moment from 'moment';
import dateUtil from '../../util/date.util';

describe('DateUtil', () => {
    let sandbox;

    beforeEach(() => {
        // Before each test case.
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        // After each test case.
        sandbox.restore();
    });

    describe('isOverTwoYearFromNow', () => {
        it('should return true when date is 01/06/2017', () => {
            // When
            const overTwoYear = dateUtil.isOverTwoYearFromNow(
                moment('20170601', 'YYYYMMDD')
            );

            // Then
            expect(overTwoYear).to.be.true;
        });
    });
});
