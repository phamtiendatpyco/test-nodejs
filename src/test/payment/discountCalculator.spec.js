import { expect } from 'chai';
import sinon from 'sinon';
import moment from 'moment';
import { bignumber } from 'mathjs';
import User from '../../app/model/user.model';
import Product from '../../app/model/product.model';
import Bill from '../../app/model/bill.model';
import ProductType from '../../app/constants/productType';
import { calculateAmountDiscount, calculatePercentageDiscount } from '../../app/payment/discountCalculator';

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
      const user = new User("test", moment(), true, false);
      const bill = new Bill(user, products);

      // When
      const percentagePriceDiscount = await calculatePercentageDiscount(bill);

      // Then
      expect('370').is.equal(percentagePriceDiscount.toString());

    });
  });

});
