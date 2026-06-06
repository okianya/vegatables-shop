import { Text, Button, Group } from '@mantine/core';
import { ShoppingCartIcon } from '@phosphor-icons/react';
import { Vegetable } from '../../types/vegetables';
import { useCart } from '../../contexts/CartContext';
import styles from './AddToCart.module.scss';

type AddToCartProps = {
	vegetable: Vegetable;
	count: number;
};

function AddToCart({ vegetable, count }: AddToCartProps) {
	const { addToCart } = useCart();

	const handleAddToCart = () => {
		const { id, name, price, image, category } = vegetable;
		addToCart({ id, name, price, image, category }, count);
	};

	const icon = <ShoppingCartIcon size={20} color="#3B944E" />;
	return (
		<Group justify="space-between">
			<Text fw={600} size="xl">
				{vegetable.price} $
			</Text>
			<Button
				rightSection={icon}
				color="#E7FAEB"
				w={180}
				className={styles.button}
				onClick={handleAddToCart}
			>
				<Text c="#3B944E" fw={600}>
					Add to cart
				</Text>
			</Button>
		</Group>
	);
}

export default AddToCart;
