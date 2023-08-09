import React from 'react';

export default function User({ user: { displayName, photoURL } }) {
	return (
		<div className="flex items-center shrink-0">
			<img className="w-10 h-10 mr-2 rounded-full" src={photoURL} />
			<span className="hidden md:block">{displayName}</span>
		</div>
	);
}
