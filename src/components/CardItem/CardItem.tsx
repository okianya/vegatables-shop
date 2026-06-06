import { Card, Image, Text, Group } from '@mantine/core';
import AddVegetable from '../AddVegetable/AddVegetable';
import AddToCart from '../AddToCart/AddToCart';
import { Vegetable } from '../../types/vegetables';
import { useState } from 'react';
import styles from './CardItem.module.scss';

type CardItemProps = {
	vegetable: Vegetable;
};

function CardItem({ vegetable }: CardItemProps) {
	const [count, setCount] = useState(1);

	const increment = () => setCount((num) => num + 1);
	const decrement = () => setCount((num) => Math.max(1, num - 1));

	return (
		<Card padding="lg" radius={24} w={300} className={styles.card}>
			<Image src={vegetable.image} alt={vegetable.name} />

			<Group mt="md" mb="md" justify="space-between">
				<Text fw={600} size="md">
					{vegetable.name}
				</Text>
				{/* -------------- Добавление количества товара ------------- */}
				<AddVegetable
					value={count}
					onIncrement={increment}
					onDecrement={decrement}
				/>
			</Group>
			{/* ------------ Кнопка добавить в корзину ------------- */}
			<AddToCart vegetable={vegetable} count={count} />
		</Card>
	);
}

export default CardItem;
