import { createContext, useContext, useState, type ReactNode } from 'react';
import { CartItem, Vegetable } from '../types/vegetables';

type CartContextType = {
	cart: CartItem[];
	addToCart: (product: Vegetable, count: number) => void;
	updateCount: (id: number, newCount: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
	const [cart, setCart] = useState<CartItem[]>([]);

	const addToCart = (product: Vegetable, count: number) => {
		setCart((current) => {
			const existing = current.find((item) => item.id === product.id);

			if (existing) {
				return current.map((item) =>
					item.id === product.id
						? { ...item, count: item.count + count }
						: item,
				);
			}

			return [...current, { ...product, count }];
		});
	};

	const updateCount = (id: number, newCount: number) => {
		if (newCount < 1) {
			setCart((current) => current.filter((item) => item.id !== id));
			return;
		}

		setCart((current) =>
			current.map((item) =>
				item.id === id ? { ...item, count: newCount } : item,
			),
		);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				updateCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error('use CartProvider');
	}

	return context;
};
