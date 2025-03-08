import { useState, FC } from 'react';
import { motion } from 'framer-motion';
import { designTokens } from '../../../theme/designTokens';
import Button from '../../Atoms/Button/Lazy';
import IconButton from '../../Atoms/IconButton/Lazy';

const menuVariants = {
	open: { x: 0, opacity: 1 },
	closed: { x: '-100%', opacity: 0 },
};

const SidebarMenu: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`bg-[${designTokens.colors.background}]`}>
			<IconButton
				onClick={() => setIsOpen(!isOpen)}
			>
				☰
			</IconButton>

			<motion.nav
				initial="closed"
				animate={isOpen ? 'open' : 'closed'}
				variants={menuVariants}
				transition={{ duration: 0.4 }}
				className="fixed top-0 left-0 w-64 h-screen p-6 shadow-lg z-10"
				style={{
					backgroundColor: designTokens.colors.secondary,
					color: designTokens.colors.textPrimary,
				}}
			>
				<Button
					className="fixed top-2 left-2"
					onClick={() => setIsOpen(false)}
				>
					✖
				</Button>

				<ul className="space-y-4 mt-6">
					<li>
						<a href="#" className="block p-2 rounded-md hover:opacity-80">
							Accueil
						</a>
					</li>
					<li>
						<a href="#" className="block p-2 rounded-md hover:opacity-80">
							Services
						</a>
					</li>
				</ul>
			</motion.nav>
		</div>
	);
};

export default SidebarMenu;
