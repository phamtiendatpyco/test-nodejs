import { expect } from 'chai';
import sinon from 'sinon';
import moment from 'moment';
import { bignumber } from 'mathjs';
import User from '../../model/user.model';
import Product from '../../model/product.model';
import Bill from '../../model/bill.model';
import ProductType from '../../constants/productType';
import {
    calculateAmountDiscount,
    calculatePercentageDiscount,
} from '../../payment/discountCalculator';

describe('DiscountCalculator', () => {
    let sandbox;

    beforeEach(() => {
        // Before each test case.
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        // After each test case.
        sandbox.restore();
    });

    describe('amountDiscountPrice', () => {
        it('should return amountDiscountPrice successfully', async () => {
            // When
            const amountDiscountPrice = calculateAmountDiscount(bignumber(990));

            // Then
            expect('945').is.equal(amountDiscountPrice.toString());
        });
    });

    describe('calculatePercentageDiscount', () => {
        it('should return percentagePriceDiscount successfully', async () => {
            // Given
            const products = [];
            products.push(new Product(bignumber(100), ProductType.OTHERS));
            products.push(new Product(bignumber(300), ProductType.GROCERY));
            const user = new User('test', moment(), true, false);
            const bill = new Bill(user, products);

            // When
            const percentagePriceDiscount = await calculatePercentageDiscount(
                bill
            );

            // Then
            expect('370').is.equal(percentagePriceDiscount.toString());
        });
    });

    describe('calculatePercentageDiscount', () => {
        it('should throw error when price is negative', async () => {
            // When
            const negativeNumber = () =>
                calculateAmountDiscount(bignumber(-990));

            // Then
            expect(negativeNumber).throw(Error);
        });
    });
});
