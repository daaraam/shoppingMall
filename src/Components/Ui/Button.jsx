import React from 'react';

export default function Button({ text, onClick }) {
	return (
		<button className="px-3 py-1 text-white rounded-xl hover:brightness-150 bg-brand " onClick={onClick}>
			{text}
		</button>
	);
}
