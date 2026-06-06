import { SimpleGrid, Title, Loader, Alert } from '@mantine/core';
import CardItem from '../../components/CardItem/CardItem';
import ky from 'ky';
import { useState, useEffect } from 'react';
import { Vegetable } from '../../types/vegetables';

function CardList() {
	const [data, setData] = useState<Vegetable[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchVegetables = async () => {
		setLoading(true);
		setError(null);

		try {
			const vegetables = await ky
				.get(
					'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json',
				)
				.json<Vegetable[]>();

			setData(vegetables);
		} catch (err) {
			console.error(err);
			setError('Не удалось загрузить товары');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchVegetables();
	}, []);

	if (loading) {
		return (
			<div
				style={{ display: 'flex', justifyContent: 'center', padding: '4rem 0' }}
			>
				<Loader size="xl" color="green" />
			</div>
		);
	}

	if (error) {
		return (
			<Alert
				title="Ошибка"
				color="red"
				variant="filled"
				style={{ margin: '2rem 0' }}
			>
				{error}
			</Alert>
		);
	}

	return (
		<>
			<Title order={2} mb="xl">
				Catalog
			</Title>

			<SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
				{data.map((vegetable) => (
					<CardItem key={vegetable.id} vegetable={vegetable} />
				))}
			</SimpleGrid>
		</>
	);
}

export default CardList;
