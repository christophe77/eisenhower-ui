export const designTokens = {
	colors: {
		primary: '#2563eb', // Blue-600
		secondary: '#4b5563', // Gray-600
		outline: '#6b7280', // Gray-500
		textPrimary: '#ffffff',
		textSecondary: '#e5e7eb', // Gray-200
		background: '#8ec5ff', // Blue-300
		card: '#ffffff', // White
		error: '#f43f5e', // Red-600 - Erreur, une couleur vive qui attire l'attention
		warning: '#f59e0b', // Amber-500 - Alerte mais pas trop agressive, une couleur dynamique
		success: '#16a34a', // Green-600 - Pour indiquer les réussites
		info: '#0ea5e9', // Sky-500 - Pour les infos génériques
	},
	darkMode: {
		primary: '#1e40af', // Blue-800
		secondary: '#374151', // Gray-700
		outline: '#9ca3af', // Gray-400
		textPrimary: '#f9fafb',
		textSecondary: '#d1d5db', // Gray-300
		background: '#111827', // Gray-900
		card: '#1f2937', // Gray-800
	},
	spacing: {
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem', // Plus grande valeur de marge/padding
		xxl: '3rem', // Très large espace pour sections spéciales
	},
	borderRadius: {
		sm: '0.25rem', // Petit arrondi pour des éléments comme les boutons
		md: '0.5rem', // Moyenne taille d'arrondi pour cartes et boîtes
		lg: '1rem', // Large arrondi pour sections principales ou cartes arrondies
		xl: '1.5rem', // Super grand pour les éléments vraiment doux et arrondis (ex: boutons principaux)
	},
	boxShadow: {
		sm: '0 1px 2px rgba(0, 0, 0, 0.1)', // Ombre légère pour les petites surfaces
		md: '0 2px 4px rgba(0, 0, 0, 0.15)', // Ombre plus marquée pour éléments interactifs
		lg: '0 4px 6px rgba(0, 0, 0, 0.2)', // Ombre plus forte pour des sections importantes
		xl: '0 8px 16px rgba(0, 0, 0, 0.3)', // Ombre plus diffuse pour modaux ou éléments flottants
	},
	typography: {
		h1: {
			fontSize: '2.25rem', // 36px
			fontWeight: '700', // Gras pour les titres importants
			lineHeight: '1.2',
		},
		h2: {
			fontSize: '1.875rem', // 30px
			fontWeight: '600',
			lineHeight: '1.3',
		},
		h3: {
			fontSize: '1.5rem', // 24px
			fontWeight: '500',
			lineHeight: '1.4',
		},
		body: {
			fontSize: '1rem', // 16px
			fontWeight: '400',
			lineHeight: '1.5',
		},
		subtitle: {
			fontSize: '0.875rem', // 14px
			fontWeight: '400',
			lineHeight: '1.4',
		},
	},
	transition: '200ms ease-in-out',
	borderWidth: {
		sm: '1px', // Bordure fine
		md: '2px', // Bordure plus marquée
		lg: '4px', // Bordure plus épaisse pour sections importantes
	},
	fontFamily: {
		primary: `'Roboto', sans-serif`, // Police moderne et lisible
		secondary: `'Courier New', monospace`, // Police un peu plus tech
	},
	letterSpacing: {
		sm: '0.5px', // Espacement pour petits éléments
		md: '1px', // Espacement pour texte moyen
		lg: '1.5px', // Espacement pour titres et éléments importants
	},
};
