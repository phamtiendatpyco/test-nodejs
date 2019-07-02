import { bignumber } from 'mathjs';
import moment from 'moment';
import Bill from './model/bill.model';
import Product from './model/product.model';
import User from './model/user.model';
import { calculatePrice } from './payment/payment';
import ProductType from './constants/productType';

exports.printTest3Result = async () => {
    console.log('Discount Price:');
    const user = new User('test', moment(), true, false);
    const products = [];
    products.push(new Product(bignumber(100), ProductType.OTHERS));
    products.push(new Product(bignumber(300), ProductType.GROCERY));
    const bill = new Bill(user, products);

    const totalPrice = await calculatePrice(bill);

    console.log(totalPrice.toString());
};
