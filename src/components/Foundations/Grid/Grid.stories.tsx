import { useState } from 'react';
import Grid from './Grid';
import Button from '../../Atoms/Button/Button';

export default {
	title: 'Components/Foundations/Grid',
	component: Grid,
	tags: ["autodocs"],
};

export const DefaultGrid = () => (
	<Grid>
		<div style={{ background: 'lightblue', padding: '1rem' }}>Bloc 1</div>
		<div style={{ background: 'lightgreen', padding: '1rem' }}>Bloc 2</div>
		<div style={{ background: 'lightcoral', padding: '1rem' }}>Bloc 3</div>
	</Grid>
);

export const CenteredGrid = () => (
	<Grid maxWidth="800px" align="center">
		<div style={{ background: 'lightgray', padding: '1rem' }}>Bloc 1</div>
		<div style={{ background: 'lightgray', padding: '1rem' }}>Bloc 2</div>
		<div style={{ background: 'lightgray', padding: '1rem' }}>Bloc 3</div>
	</Grid>
);

export const FullWidthGrid = () => (
	<Grid fullWidth>
		<div style={{ background: 'lightpink', padding: '1rem' }}>Bloc 1</div>
		<div style={{ background: 'lightpink', padding: '1rem' }}>Bloc 2</div>
		<div style={{ background: 'lightpink', padding: '1rem' }}>Bloc 3</div>
	</Grid>
);

export const SlideInGrid = () => (
	<Grid
		animationType="slide"
		animationDirection="left"
		transitionDuration="700ms"
	>
		<div style={{ background: 'lightblue', padding: '1rem' }}>Bloc 1</div>
		<div style={{ background: 'lightgreen', padding: '1rem' }}>Bloc 2</div>
		<div style={{ background: 'lightcoral', padding: '1rem' }}>Bloc 3</div>
	</Grid>
);

export const BounceGrid = () => (
	<Grid animationType="bounce" transitionDuration="500ms">
		<div style={{ background: 'lightblue', padding: '1rem' }}>Bloc 1</div>
		<div style={{ background: 'lightgreen', padding: '1rem' }}>Bloc 2</div>
		<div style={{ background: 'lightcoral', padding: '1rem' }}>Bloc 3</div>
	</Grid>
);

export const ScrollAnimatedGrid = () => {
	const [show, setShow] = useState(true);
  
	const itemsToShow = 10;
	const colArray = Array.from({ length: itemsToShow }, (_value, index) => index);

	return (
		<>
			<div className="m-4">
				<Button onClick={() => setShow(!show)} variant="outline">
					Toggle Grid
				</Button>
			</div>
			<Grid animationType="fade" transitionDuration="700ms">
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
			</Grid>
		</>
	);
};
