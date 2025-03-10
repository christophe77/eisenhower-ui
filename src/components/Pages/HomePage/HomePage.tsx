import { FC } from 'react';
import { LazyBaseTemplate } from '../../Templates/BaseTemplate/Lazy';
import { designTokens } from '../../../theme/designTokens';
import { LazyGrid } from '../../Foundations/Grid/Lazy';
import { LazyCard } from '../../Molecules/Card/Lazy';

const HomePage: FC = () => {
	return (
		<LazyBaseTemplate title="EISENHOWER-UI">
			<div className="flex flex-col items-center justify-center gap-6 text-center">
				<h2
					className="text-3xl font-semibold mb-5"
					style={{ color: designTokens.colors.primary }}
				>
					Light and modern Atomic UI Library
				</h2>
			</div>
			<LazyGrid fullWidth>
				<div style={{ padding: '1rem' }}>
					<LazyCard title="Card 1" description="Card 1 description" />
				</div>
				<div style={{ padding: '1rem' }}>
					<LazyCard title="Card 2" description="Card 2 description" />
				</div>
				<div style={{ padding: '1rem' }}>
					<LazyCard title="Card 3" description="Card 3 description" />
				</div>
			</LazyGrid>
			<LazyGrid fullWidth>
				<div style={{ padding: '1rem' }}>
					<LazyCard title="Card 4" description="Card 4 description" />
				</div>
				<div style={{ padding: '1rem' }}>
					<LazyCard title="Card 5" description="Card 5 description" />
				</div>
				<div style={{ padding: '1rem' }}>
					<LazyCard title="Card 6" description="Card 6 description" />
				</div>
			</LazyGrid>
		</LazyBaseTemplate>
	);
};

export default HomePage;
