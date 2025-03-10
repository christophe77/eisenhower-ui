import {
	FC,
	ReactNode,
	CSSProperties,
	Children,
	ReactElement,
	cloneElement,
} from 'react';
import { useInView } from 'react-intersection-observer';
import { designTokens } from '../../../theme/designTokens';

export interface GridProps {
	columns?: number;
	sm?: number;
	md?: number;
	lg?: number;
	gap?: string;
	maxWidth?: string;
	fullWidth?: boolean;
	align?: 'left' | 'center' | 'right';
	autoFit?: boolean;
	autoFill?: boolean;
	minColumnWidth?: string;
	maxColumnWidth?: string;
	alignItems?: 'start' | 'center' | 'end';
	justifyItems?: 'start' | 'center' | 'end';
	alignContent?: 'start' | 'center' | 'end' | 'stretch';
	justifyContent?:
		| 'start'
		| 'center'
		| 'end'
		| 'space-between'
		| 'space-around';
	transitionDuration?: string;
	animationType?: 'fade' | 'slide' | 'bounce'; // Ajout de "bounce"
	animationDirection?: 'left' | 'right' | 'top' | 'bottom';
	children: ReactNode;
	className?: string;
}

export const Grid: FC<GridProps> = ({
	columns = 3,
	sm = 1,
	md = 2,
	lg = 3,
	gap = designTokens.spacing.md,
	maxWidth = '1200px',
	fullWidth = false,
	align = 'center',
	autoFit = false,
	autoFill = false,
	minColumnWidth = '200px',
	maxColumnWidth = '1fr',
	alignItems = 'center',
	justifyItems = 'center',
	alignContent = 'stretch',
	justifyContent = 'start',
	transitionDuration = '300ms',
	animationType = 'fade',
	animationDirection = 'top',
	children,
	className = '',
}) => {
	let gridTemplate;
	if (autoFit) {
		gridTemplate = `repeat(auto-fit, minmax(${minColumnWidth}, ${maxColumnWidth}))`;
	} else if (autoFill) {
		gridTemplate = `repeat(auto-fill, minmax(${minColumnWidth}, ${maxColumnWidth}))`;
	} else {
		gridTemplate = `repeat(${columns}, 1fr)`;
	}
	const responsiveGridTemplate = {
		// Pour mobile (sm)
		'@media (max-width: 640px)': `repeat(${sm}, 1fr)`,
		// Pour tablette (md)
		'@media (min-width: 641px) and (max-width: 1024px)': `repeat(${md}, 1fr)`,
		// Pour desktop (lg)
		'@media (min-width: 1025px)': `repeat(${lg}, 1fr)`,
	};
	// Fonction pour appliquer les différentes animations
	const getAnimation = (animationType: string, animationDirection: string) => {
		if (animationType === 'fade') {
			return {
				opacity: 0,
				transition: `opacity ${transitionDuration} ease-in-out`,
			};
		}

		if (animationType === 'slide') {
			const directions = {
				left: 'translateX(-100%)',
				right: 'translateX(100%)',
				top: 'translateY(-100%)',
				bottom: 'translateY(100%)',
			};
			return {
				transform: directions[animationDirection as keyof typeof directions],
				opacity: 0,
				transition: `transform ${transitionDuration} ease-in-out, opacity ${transitionDuration} ease-in-out`,
			};
		}

		if (animationType === 'bounce') {
			return {
				animation: `bounce ${transitionDuration} ease-in-out infinite`,
			};
		}

		return {};
	};
	const [inViewRef, inView] = useInView({
		triggerOnce: true, // Déclenche l'animation au premier passage dans la vue
		threshold: 0.2, // Quand 20% de l'élément est visible
	});
	return (
		<div
			className={`grid-container ${className}`}
			style={
				{
					display: 'grid',
					gap: gap,
					gridTemplateColumns: gridTemplate,
					maxWidth: fullWidth ? '100%' : maxWidth,
					margin: (() => {
						if (align === 'center') return '0 auto';
						if (align === 'left') return '0 auto 0 0';
						return '0 0 0 auto';
					})(),
					padding: fullWidth ? '0' : '0 1rem',
					alignItems: alignItems,
					justifyItems: justifyItems,
					alignContent: alignContent,
					justifyContent: justifyContent,
					transition: `all ${transitionDuration} ease-in-out`,
					...responsiveGridTemplate,  // Appliquer les styles responsive
				} as CSSProperties
			}
		>
			{Children.map(children, (child) => {
				return (
					<div
						ref={inViewRef}
						style={{
							...getAnimation(animationType, animationDirection),
							opacity: inView ? 1 : 0,
							transform: inView ? 'translateY(0)' : 'translateY(50px)',
						}}
					>
						{cloneElement(child as ReactElement<{ style?: CSSProperties }>, {
							style: {
								...(child as ReactElement<{ style?: CSSProperties }>).props
									.style,
							},
						})}
					</div>
				);
			})}
		</div>
	);
};
