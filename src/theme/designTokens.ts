export const designTokens = {
	colors: {
		primary: '#ff3d00', // Rouge atomique 🔥 (Contraste AA sur fond clair, AAA sur fond foncé)
		secondary: '#0f172a', // Bleu très sombre (Contraste AAA sur fond clair)
		outline: '#ff9100', // Orange vif (Contraste AA sur fond foncé)
		textPrimary: '#ffffff', // Blanc (Contraste AAA sur fond foncé)
		textSecondary: '#ffd700', // Doré (Contraste AA sur fond foncé)
		background: '#1e293b', // Bleu foncé (Contraste AAA sur texte blanc)
		error: '#ff1744', // Rouge éclatant (Contraste AA sur fond foncé)
		warning: '#ff9800', // Orange percutant (Contraste AA sur fond foncé)
		success: '#00e676', // Vert néon (Contraste AA sur fond foncé)
		info: '#29b6f6', // Bleu clair (Contraste AA sur fond foncé)
	},
	darkMode: {
		primary: '#ff5722', // Orange atomique 💣 (Contraste AA sur fond sombre)
		secondary: '#2d3748', // Gris bleuté (Contraste AAA sur fond clair)
		outline: '#ffa726', // Orange plus doux (Contraste AA sur fond sombre)
		textPrimary: '#f9fafb', // Blanc cassé (Contraste AAA sur fond sombre)
		textSecondary: '#e2e8f0', // Gris clair (Contraste AA sur fond sombre)
		background: '#000000', // Full black (Contraste maximal avec tout texte clair)
		error: '#ff1744', // Rouge éclatant (Contraste AA sur fond sombre)
		warning: '#ffa726', // Orange plus doux (Contraste AA sur fond sombre)
		success: '#00e676', // Vert néon (Contraste AA sur fond sombre)
		info: '#1a202c', // Bleu nuit (Contraste AAA sur texte blanc)
	},
	spacing: {
		sm: '0.75rem', // Un peu plus d'air
		md: '1.5rem',
		lg: '2rem',
		xl: '3rem', // Boosté pour sections impactantes
		xxl: '4rem', // Extra large pour design impactant
	},
	borderRadius: {
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem', // Arrondis ultra smooth
	},
	boxShadow: {
		sm: '0 2px 4px rgba(255, 0, 0, 0.2)', // Glow rouge
		md: '0 4px 8px rgba(255, 0, 0, 0.3)', // Glow plus marqué
		lg: '0 6px 12px rgba(255, 0, 0, 0.4)', // Ombre intense
		xl: '0 12px 24px rgba(255, 0, 0, 0.5)', // Effet néon 💡
	},
	typography: {
		h1: {
			fontSize: '3rem', // Impact maximal 💥
			fontWeight: '800', // Ultra bold
			lineHeight: '1.1',
		},
		h2: {
			fontSize: '2.5rem',
			fontWeight: '700',
			lineHeight: '1.2',
		},
		h3: {
			fontSize: '2rem',
			fontWeight: '600',
			lineHeight: '1.3',
		},
		body: {
			fontSize: '1.125rem', // Un peu plus grand pour le confort
			fontWeight: '400',
			lineHeight: '1.6',
		},
		subtitle: {
			fontSize: '1rem',
			fontWeight: '500',
			lineHeight: '1.4',
		},
	},
	transition: '300ms cubic-bezier(0.4, 0, 0.2, 1)', // Animation fluide
	borderWidth: {
		sm: '2px', // Bordures plus marquées
		md: '3px',
		lg: '5px',
	},
	fontFamily: {
		primary: `'Poppins', sans-serif`, // Plus moderne et énergique
		secondary: `'JetBrains Mono', monospace`, // Esprit tech
	},
	letterSpacing: {
		sm: '0.75px',
		md: '1.25px',
		lg: '2px', // Espacement boosté pour un effet futuriste
	},
};
