import { Star, ShoppingCart } from "lucide-react";

/**
 * @typedef {Object} ProductCardProps
 * @property {string} name
 * @property {string} weight
 * @property {number} price
 * @property {number} originalPrice
 * @property {number} rating
 * @property {string} image
 * @property {number} discount
 */

/**
 * ProductCard Component
 * @param {ProductCardProps} props
 */
const ProductCard = ({
  name,
  weight,
  price,
  originalPrice,
  rating,
  image,
  discount,
}) => {
  const savings = originalPrice - price;

  return (
    <div className="product-card group">
      <div className="relative overflow-hidden bg-muted">
        {discount > 0 && (
          <span className="absolute top-3 left-3 offer-badge text-xs font-bold px-2.5 py-1 rounded-lg z-10">
            {discount}% OFF
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
          <span className="text-xs font-medium text-muted-foreground">
            {rating}
          </span>
        </div>
        <h3 className="font-semibold text-sm text-foreground line-clamp-1">
          {name}
        </h3>
        <p className="text-xs text-muted-foreground">{weight}</p>
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-lg font-bold text-foreground">₹{price}</span>
            {originalPrice > price && (
              <span className="ml-1.5 text-xs text-muted-foreground line-through">
                ₹{originalPrice}
              </span>
            )}
            {savings > 0 && (
              <p className="text-xs text-primary font-medium mt-0.5">
                You save ₹{savings}
              </p>
            )}
          </div>
          <button className="h-9 w-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5">
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
