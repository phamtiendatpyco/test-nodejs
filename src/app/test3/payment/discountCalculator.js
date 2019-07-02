import math, { bignumber } from 'mathjs';
import { getPercentageDiscountPrice } from '../util/discount.util';

const AMOUNT_DISCOUNT_CONDITION = 100;
const AMOUNT_DISCOUNT = 5;
const ZERO_BIG_NUMBER = bignumber(0);

exports.calculatePercentageDiscount = async (bill) => {
    const prices = await Promise.all(
        bill
            .getProducts()
            .map((p) => getPercentageDiscountPrice(bill.getUser(), p))
    );
    return prices.reduce(
        (result, currentValue) => math.add(result, currentValue),
        ZERO_BIG_NUMBER
    );
};

exports.calculateAmountDiscount = (price) => {
    if (math.isNegative(price)) {
        throw new Error('Price is not allowed as a negative number!');
    }
    const discount = math.floor(
        math.divide(price, bignumber(AMOUNT_DISCOUNT_CONDITION))
    );
    return math.subtract(
        price,
        math.multiply(discount, bignumber(AMOUNT_DISCOUNT))
    );
};
