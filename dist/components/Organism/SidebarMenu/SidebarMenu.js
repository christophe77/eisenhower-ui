import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { designTokens } from '../../../theme/designTokens';
import { LazyButton } from '../../Atoms/Button/Lazy';
import { LazyIconButton } from '../../Atoms/IconButton/Lazy';
const menuVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 },
};
export const SidebarMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("div", { className: `bg-[${designTokens.colors.background}]`, children: [_jsx(LazyIconButton, { onClick: () => setIsOpen(!isOpen), children: "\u2630" }), _jsxs(motion.nav, { initial: "closed", animate: isOpen ? 'open' : 'closed', variants: menuVariants, transition: { duration: 0.4 }, className: "fixed top-0 left-0 w-64 h-screen p-6 shadow-lg z-10", style: {
                    backgroundColor: designTokens.colors.secondary,
                    color: designTokens.colors.textPrimary,
                }, children: [_jsx(LazyButton, { className: "fixed top-2 left-2", onClick: () => setIsOpen(false), children: "\u2716" }), _jsxs("ul", { className: "space-y-4 mt-6", children: [_jsx("li", { children: _jsx("a", { href: "#", className: "block p-2 rounded-md hover:opacity-80", children: "Accueil" }) }), _jsx("li", { children: _jsx("a", { href: "#", className: "block p-2 rounded-md hover:opacity-80", children: "Services" }) })] })] })] }));
};
