import math, { bignumber } from 'mathjs';
import { isOverTwoYearFromNow } from './date.util';
import ProductType from '../constants/productType';
import PercentageDiscountType from '../constants/percentageDiscountType';

const getDiscountType = (user, product) => {
    if (ProductType.GROCERY == product.getProductType()) {
        return PercentageDiscountType.GROCERY;
    } else if (user.isEmployee()) {
        return PercentageDiscountType.EMPLOYEE;
    } else if (user.isAffiliate()) {
        return PercentageDiscountType.AFFILIATE;
    } else if (isOverTwoYearFromNow(user.getCreatedDate())) {
        return PercentageDiscountType.LOYAL_CUSTOMER;
    }
    return PercentageDiscountType.NON;
};

exports.getPercentageDiscountPrice = async (user, product) => {
    if (math.isNegative(product.getPrice())) {
        throw new Error('Price is not allowed as a negative number!');
    }
    const discountType = getDiscountType(user, product);
    const discountPrice = math.multiply(
        product.getPrice(),
        bignumber(discountType)
    );
    return math.subtract(product.getPrice(), bignumber(discountPrice));
};
