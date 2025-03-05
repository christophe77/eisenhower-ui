import { FC } from 'react';
import BaseTemplate from '../../Templates/BaseTemplate/BaseTemplate';
import { designTokens } from '../../../tokens/designTokens';
import Grid from '../../Foundations/Grid/Grid';
import Card from '../../Molecules/Card/Card';

const HomePage: FC = () => {
	return (
		<BaseTemplate title="EISENHOWER-UI">
			<div className="flex flex-col items-center justify-center gap-6 text-center">
				<h2
					className="text-3xl font-semibold mb-5"
					style={{ color: designTokens.colors.primary }}
				>
					Light and modern Atomic UI Library
				</h2>
			</div>
			<Grid fullWidth>
				<div style={{ padding: '1rem' }}><Card title="Card 1" description="Card 1 description" /></div>
				<div style={{ padding: '1rem' }}><Card title="Card 2" description="Card 2 description" /></div>
				<div style={{ padding: '1rem' }}><Card title="Card 3" description="Card 3 description" /></div>
			</Grid>
			<Grid fullWidth>
				<div style={{ padding: '1rem' }}><Card title="Card 4" description="Card 4 description" /></div>
				<div style={{ padding: '1rem' }}><Card title="Card 5" description="Card 5 description" /></div>
				<div style={{ padding: '1rem' }}><Card title="Card 6" description="Card 6 description" /></div>
			</Grid>
		</BaseTemplate>
	);
};

export default HomePage;
