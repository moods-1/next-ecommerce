import Link from 'next/link';
import React from 'react';

const Header = () => {
	return (
		<header>
			<nav>
				<div className='navbar justify-between bg-base-400'>
					<Link href='/' className='btn btn-ghost text-lg'>
						CeeCommerce
					</Link>
					<ul>
						<li>
							<Link className='btn btn-ghost rounded-btn' href='/cart'>Cart</Link>
						</li>
						<li>
							<Link className='btn btn-ghost rounded-btn' href='/signin'>Sign In</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
