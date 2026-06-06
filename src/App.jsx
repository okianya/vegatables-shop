import '@mantine/core/styles.css';
import './App.css';
import { MantineProvider } from '@mantine/core';
import VegetablesPage from './pages/VegetablesPage/VegetablesPage';

export default function App() {
	return <MantineProvider>{<VegetablesPage />}</MantineProvider>;
}
