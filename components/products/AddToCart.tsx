'use client';

import { TbSquareChevronUp } from 'react-icons/tb';
import { TbSquareChevronDown } from 'react-icons/tb';
import useCartService from '@/lib/hooks/useCartStore';
import { Order, OrderItem } from '@/lib/models/OrderModel';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AddToCart({ item }: { item: OrderItem }) {
	const router = useRouter();
	const { items, increase } = useCartService();
	const [existItem, setExistItem] = useState<OrderItem | undefined>();
	useEffect(() => {
		setExistItem(items.find((x) => x.slug === item.slug));
	}, [item, items]);

	const addToCartHandler = () => {
		increase(item);
	};

	let body = existItem ? (
		<div className='mt-2 flex justify-center items-center'>
			<button className=''>
				<TbSquareChevronDown size={25} />
			</button>
			<span className='px-2 min-w-9 text-center'>{existItem.qty}</span>
			<button className='' onClick={() => increase(existItem)}>
				<TbSquareChevronUp size={25} />
			</button>
		</div>
	) : (
		<button className={'btn btn-primary w-full'} onClick={addToCartHandler}>
			Add to cart
		</button>
	);

	return body;
}
