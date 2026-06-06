import { Box, AppShell, MantineProvider, Group } from '@mantine/core';
import CartButton from '../../components/CartButton/CartButton';
import CardList from '../../modules/CardList/CardList';
import { CartProvider } from '../../contexts/CartContext';

function VegetablesPage() {
	return (
		<MantineProvider>
			<CartProvider>
				{
					<AppShell padding="md" header={{ height: 60 }}>
						<AppShell.Header p={10}>
							<Group justify="space-between">
								<img src="src\assets\logo.svg" alt="Vegetable Shop" />
								<CartButton />
							</Group>
						</AppShell.Header>

						<AppShell.Main>
							<Box w="1280px" m="auto">
								<CardList />
							</Box>
						</AppShell.Main>
					</AppShell>
				}
			</CartProvider>
		</MantineProvider>
	);
}

export default VegetablesPage;
