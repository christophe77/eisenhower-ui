import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LazyBaseTemplate } from '../../Templates/BaseTemplate/Lazy';
import { designTokens } from '../../../theme/designTokens';
import { LazyGrid } from '../../Foundations/Grid/Lazy';
import { LazyCard } from '../../Molecules/Card/Lazy';
const HomePage = () => {
    return (_jsxs(LazyBaseTemplate, { title: "EISENHOWER-UI", children: [_jsx("div", { className: "flex flex-col items-center justify-center gap-6 text-center", children: _jsx("h2", { className: "text-3xl font-semibold mb-5", style: { color: designTokens.colors.primary }, children: "Light and modern Atomic UI Library" }) }), _jsxs(LazyGrid, { fullWidth: true, children: [_jsx("div", { style: { padding: '1rem' }, children: _jsx(LazyCard, { title: "Card 1", description: "Card 1 description" }) }), _jsx("div", { style: { padding: '1rem' }, children: _jsx(LazyCard, { title: "Card 2", description: "Card 2 description" }) }), _jsx("div", { style: { padding: '1rem' }, children: _jsx(LazyCard, { title: "Card 3", description: "Card 3 description" }) })] }), _jsxs(LazyGrid, { fullWidth: true, children: [_jsx("div", { style: { padding: '1rem' }, children: _jsx(LazyCard, { title: "Card 4", description: "Card 4 description" }) }), _jsx("div", { style: { padding: '1rem' }, children: _jsx(LazyCard, { title: "Card 5", description: "Card 5 description" }) }), _jsx("div", { style: { padding: '1rem' }, children: _jsx(LazyCard, { title: "Card 6", description: "Card 6 description" }) })] })] }));
};
export default HomePage;
