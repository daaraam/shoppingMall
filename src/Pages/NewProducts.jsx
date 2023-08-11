import React, { useState } from 'react';
import { addNewProduct } from '../API/firebase';
import { uploadImage } from '../API/uploader';
import Button from '../Components/Ui/Button';

export default function NewProducts() {
	const [product, setProduct] = useState({});
	const [file, setFile] = useState();
	const [isUploading, setIsUploading] = useState(false);
	const [success, setSuccess] = useState();

	const handleSubmit = e => {
		e.preventDefault();
		setIsUploading(true);
		uploadImage(file) //
			.then(url => {
				console.log(url);
				addNewProduct(product, url);
			})
			.then(() => {
				setSuccess('성공적으로 제품이 등록되었습니다.');
				setTimeout(() => {
					setSuccess(null);
				}, 4000);
			})
			.finally(() => setIsUploading(false));
	};

	const handleChange = e => {
		const { name, value, files } = e.target;
		if (name === 'file') {
			setFile(files && files[0]);
			console.log(files[0]);
			return;
		}
		setProduct(product => ({ ...product, [name]: value }));
	};

	return (
		<section className="flex flex-col w-full text-center">
			<h2 className="my-4 text-brand text-3xl font-['Makgeolli'] ">Add New Products</h2>
			{success && <p className="my-2">{success}</p>}
			{file && <img className="px-6" src={URL.createObjectURL(file)} alt="local file" />}
			<form className="flex flex-col px-6 font-['SUITE-Regular']" onSubmit={handleSubmit}>
				<input type="file" name="file" accept="image/*" required onChange={handleChange} />
				<input
					type="text"
					name="title"
					required
					value={product.title ?? ''}
					placeholder="제품명"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="price"
					value={product.price ?? ''}
					required
					placeholder="가격"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="category"
					required
					value={product.category ?? ''}
					placeholder="카테고리"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="description"
					required
					value={product.description ?? ''}
					placeholder="제품 설명"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="option"
					required
					value={product.option ?? ''}
					placeholder="옵션들(콤마(,)로 구분"
					onChange={handleChange}
				/>
				<Button
					text={isUploading ? '제품 등록중...' : '제품 등록하기'}
					onClick={handleSubmit}
					disabled={isUploading}
				/>
			</form>
		</section>
	);
}
