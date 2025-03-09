import { FC } from 'react';

type AvatarProps = {
	imgSrc: string;
	alt: string;
	size?: 'sm' | 'md' | 'lg';
};

const Avatar: FC<AvatarProps> = ({ imgSrc, alt, size = 'md' }) => {
	const sizeClasses = {
		sm: 'w-8 h-8',
		md: 'w-12 h-12',
		lg: 'w-16 h-16',
	};

	return (
		<img src={imgSrc} alt={alt} className={`rounded-full ${sizeClasses[size]}`} />
	);
};

export default Avatar;
