import {
	Text,
	Group,
	Stack,
	Divider,
	ActionIcon,
	Image,
	Flex,
	Box,
} from '@mantine/core';

import { useCart } from '../../contexts/CartContext';
import cartEmptyImage from '../../assets/cart_empty.svg';

function CartModal() {
	const { cart, updateCount } = useCart();

	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.count,
		0,
	);

	return (
		<Stack gap="md" p="md">
			{cart.length === 0 ? (
				<Flex direction="column" gap="sm" align="center">
					<Image src={cartEmptyImage} fit="contain" w={120} alt="" />
					<Text size="lg" c="gray" p={20}>
						Your cart is empty!
					</Text>
				</Flex>
			) : (
				<Stack gap="sm">
					{cart.map((item) => (
						<Group
							key={item.id}
							justify="space-between"
							align="center"
							wrap="nowrap"
						>
							<Image src={item.image} fit="contain" w={64} alt="" />
							<Box style={{ flex: 1 }}>
								<Text fw={600}>{item.name}</Text>
								<Text size="md" c="black" fw={600}>
									{item.price} $
								</Text>
							</Box>

							<Group gap={4}>
								<ActionIcon
									variant="light"
									color="gray"
									size="sm"
									onClick={() => updateCount(item.id, item.count - 1)}
								>
									-
								</ActionIcon>

								<Text fw={600} w={24} ta="center">
									{item.count}
								</Text>

								<ActionIcon
									variant="light"
									color="gray"
									size="sm"
									onClick={() => updateCount(item.id, item.count + 1)}
								>
									+
								</ActionIcon>
							</Group>
						</Group>
					))}
				</Stack>
			)}

			{cart.length > 0 && (
				<>
					<Divider />
					<Group justify="space-between" fw={700}>
						<Text size="md" fw={600}>
							Total
						</Text>
						<Text size="md" c="black" fw={600}>
							{totalPrice.toFixed(2)} $
						</Text>
					</Group>
				</>
			)}
		</Stack>
	);
}

export default CartModal;
