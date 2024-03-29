import { Schema, model, models } from 'mongoose';
const productSchema = new Schema(
	{
		name: { type: String, required: true },
		slug: { type: String, required: true, unique: true },
		category: { type: String, required: true },
		image: { type: String, required: true },
		price: { type: Number, required: true },
		brand: { type: String, required: true },
		rating: { type: Number, required: true, default: 0 },
		numReviews: { type: Number, required: true, default: 0 },
		countInStock: { type: Number, required: true, default: 0 },
		description: { type: String, required: true },
		isFeatured: { type: Boolean, default: false },
		banner: String,
	},
	{
		timestamps: true,
		collection: 'Product',
	}
);

export type Product = {
	_id?: string;
	name: string;
	slug: string;
	image: string;
	banner?: string;
	price: number;
	brand: string;
	description: string;
	category: string;
	rating: number;
	numReviews: number;
	countInStock: number;
	colors?: [];
	sizes?: [];
};

const Product = models.Product || model('Product', productSchema);

export default Product;