'use client';
import React from 'react';
import useCartService from '@/lib/hooks/useCartStore';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Menu() {
	const [mounted, setMounted] = useState(false);
	const { items } = useCartService();

	useEffect(() => {
		setMounted(true);
	}, []);

	const showBadge = mounted && items?.length > 0;

	return (
		<div>
			<ul className='flex items-stretch'>
				<li>
					<Link className='btn btn-ghost rounded-btn' href='/cart'>
						Cart
						{showBadge && (
							<div className='badge badge-secondary'>
								{items.reduce((a, c) => a + c.qty, 0)}
							</div>
						)}
					</Link>
				</li>
				<li>
					<Link className='btn btn-ghost rounded-btn' href='/signin'>
						Sign In
					</Link>
				</li>
			</ul>
		</div>
	);
}
