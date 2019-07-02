import chai, { expect } from 'chai';
import sinon from 'sinon';
import { bignumber } from 'mathjs';
import moment from 'moment';
import chaiAsPromised from 'chai-as-promised';
import User from '../../model/user.model';
import Product from '../../model/product.model';
import Bill from '../../model/bill.model';
import ProductType from '../../constants/productType';
import { calculatePrice } from '../../payment/payment';

chai.use(chaiAsPromised);

describe('Payment', () => {
    let sandbox;

    beforeEach(() => {
        // Before each test case.
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        // After each test case.
        sandbox.restore();
    });

    describe('calculatePrice', () => {
        it('should return price successfully', async () => {
            // Given
            const products = [];
            products.push(new Product(bignumber(100), ProductType.OTHERS));
            products.push(new Product(bignumber(300), ProductType.GROCERY));
            const user = new User('test', moment(), true, false);
            const bill = new Bill(user, products);

            // When
            const totalPrice = await calculatePrice(bill);

            // Then
            expect('355').is.equal(totalPrice.toString());
        });
    });

    describe('calculatePrice', () => {
        it('should throw error when price is negative', async () => {
            // Given
            const products = [];
            products.push(new Product(bignumber(-100), ProductType.OTHERS));
            const user = new User('test', moment(), true, false);
            const bill = new Bill(user, products);
            // Then
            await expect(calculatePrice(bill)).to.be.rejected;
        });
    });
});
