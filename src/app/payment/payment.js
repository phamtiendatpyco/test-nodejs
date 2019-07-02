import { calculatePercentageDiscount, calculateAmountDiscount } from './discountCalculator';

exports.calculatePrice = async (bill) => {
    const percentageDiscountPrice = await calculatePercentageDiscount(bill);
    return calculateAmountDiscount(percentageDiscountPrice);
};
