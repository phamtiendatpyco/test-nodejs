import { expect } from 'chai';
import sinon from 'sinon';
import { bignumber } from 'mathjs';
import moment from 'moment';
import User from '../../model/user.model';
import Product from '../../model/product.model';
import ProductType from '../../constants/productType';
import discountUtil from '../../util/discount.util';

describe('DiscountUtil', () => {
    let sandbox;

    beforeEach(() => {
        // Before each test case.
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        // After each test case.
        sandbox.restore();
    });

    describe('getPercentageDiscountPrice', () => {
        it('should employeePercentageDiscountPrice successfully', async () => {
            // Given
            const user = new User('test', moment(), true, false);
            const product = new Product(bignumber(100), ProductType.OTHERS);

            // When
            const percentageDiscountPrice = await discountUtil.getPercentageDiscountPrice(
                user,
                product
            );

            // Then
            expect('70').is.equal(percentageDiscountPrice.toString());
        });
    });

    describe('getPercentageDiscountPrice', () => {
        it('should affiliatePercentageDiscountPrice successfully', async () => {
            // Given
            const user = new User('test', moment(), false, true);
            const product = new Product(bignumber(100), ProductType.OTHERS);

            // When
            const percentageDiscountPrice = await discountUtil.getPercentageDiscountPrice(
                user,
                product
            );

            // Then
            expect('90').is.equal(percentageDiscountPrice.toString());
        });
    });

    describe('getPercentageDiscountPrice', () => {
        it('should loyalPercentageDiscountPrice successfully', async () => {
            // Given
            const user = new User(
                'test',
                moment('20150101', 'YYYYMMDD'),
                false,
                false
            );
            const product = new Product(bignumber(100), ProductType.OTHERS);

            // When
            const percentageDiscountPrice = await discountUtil.getPercentageDiscountPrice(
                user,
                product
            );

            // Then
            expect('95').is.equal(percentageDiscountPrice.toString());
        });
    });

    describe('getPercentageDiscountPrice', () => {
        it('should throw error when price is negative', async () => {
            // When
            const negativeNumber = () =>
                discountUtil.isNegativeNumber(bignumber(-1));

            // Then
            expect(negativeNumber).throw(Error);
        });
    });
});
