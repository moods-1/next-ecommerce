import { create } from 'zustand';
import { round2 } from '../utils/utils';
import { OrderItem } from '../models/OrderModel';

type Cart = {
	items: OrderItem[];
	itemsPrice: number;
	taxPrice: number;
	shippingPrice: number;
	totalPrice: number;
};

const initialState: Cart = {
	items: [],
	itemsPrice: 0,
	taxPrice: 0,
	shippingPrice: 0,
	totalPrice: 0,
};

export const cartStore = create<Cart>(() => initialState);

const calcPrice = (items: OrderItem[]) => {
	const itemsPrice = round2(
		items.reduce((acc, item) => acc + item.price * item.qty, 0)
	);
	// Free shipping on orders >$100
	const shippingPrice = round2(itemsPrice > 100 ? 0 : 100);
	const taxPrice = round2(Number(0.15 * itemsPrice));
	const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);
	return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

export default function useCartService() {
	const { items, itemsPrice, taxPrice, totalPrice, shippingPrice } =
		cartStore();
	return {
		items,
		itemsPrice,
		taxPrice,
		totalPrice,
		shippingPrice,
		increase: (item: OrderItem) => {
			const itemExists = items.find((x) => x.slug === item.slug);
			const updatedCartItems = itemExists
				? items.map((x) =>
						x.slug === item.slug
							? { ...itemExists, qty: itemExists.qty + 1 }
							: x
				  )
				: [...items, { ...item, qty: 1 }];
			const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
				calcPrice(updatedCartItems);
			cartStore.setState({
				items: updatedCartItems,
				itemsPrice,
				shippingPrice,
				taxPrice,
				totalPrice,
			});
		},
	};
}
