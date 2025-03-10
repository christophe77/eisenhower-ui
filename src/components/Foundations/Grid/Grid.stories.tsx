import { useState } from 'react';
import { LazyGrid } from './Lazy';
import { Button } from '../../Atoms/Button/Button';

export default {
	title: 'Components/Foundations/Grid',
	component: LazyGrid,
	tags: ['autodocs'],
};

export const DefaultGrid = () => (
	<LazyGrid>
		<div style={{ background: 'lightblue', padding: '1rem' }}>Bloc 1</div>
		<div style={{ background: 'lightgreen', padding: '1rem' }}>Bloc 2</div>
		<div style={{ background: 'lightcoral', padding: '1rem' }}>Bloc 3</div>
	</LazyGrid>
);

export const CenteredGrid = () => (
	<LazyGrid maxWidth="800px" align="center">
		<div style={{ background: 'lightgray', padding: '1rem' }}>Bloc 1</div>
		<div style={{ background: 'lightgray', padding: '1rem' }}>Bloc 2</div>
		<div style={{ background: 'lightgray', padding: '1rem' }}>Bloc 3</div>
	</LazyGrid>
);

export const FullWidthGrid = () => (
	<LazyGrid fullWidth>
		<div style={{ background: 'lightpink', padding: '1rem' }}>Bloc 1</div>
		<div style={{ background: 'lightpink', padding: '1rem' }}>Bloc 2</div>
		<div style={{ background: 'lightpink', padding: '1rem' }}>Bloc 3</div>
	</LazyGrid>
);

export const SlideInGrid = () => (
	<LazyGrid
		animationType="slide"
		animationDirection="left"
		transitionDuration="700ms"
	>
		<div style={{ background: 'lightblue', padding: '1rem' }}>Bloc 1</div>
		<div style={{ background: 'lightgreen', padding: '1rem' }}>Bloc 2</div>
		<div style={{ background: 'lightcoral', padding: '1rem' }}>Bloc 3</div>
	</LazyGrid>
);

export const BounceGrid = () => (
	<LazyGrid animationType="bounce" transitionDuration="500ms">
		<div style={{ background: 'lightblue', padding: '1rem' }}>Bloc 1</div>
		<div style={{ background: 'lightgreen', padding: '1rem' }}>Bloc 2</div>
		<div style={{ background: 'lightcoral', padding: '1rem' }}>Bloc 3</div>
	</LazyGrid>
);

export const ScrollAnimatedGrid = () => {
	const [show, setShow] = useState(true);

	const itemsToShow = 10;
	const colArray = Array.from(
		{ length: itemsToShow },
		(_value, index) => index,
	);

	return (
		<>
			<div className="m-4">
				<Button onClick={() => setShow(!show)} variant="outline">
					Toggle Grid
				</Button>
			</div>
			<LazyGrid animationType="fade" transitionDuration="700ms">
				{colArray.map((col, colIndex) => {
					return (
						<div
							key={`${colIndex}-${col.toLocaleString()}`}
							style={{ background: 'lightblue', padding: '1rem' }}
						>
							Bloc {colIndex + 1}
						</div>
					);
				})}
			</LazyGrid>
		</>
	);
};
