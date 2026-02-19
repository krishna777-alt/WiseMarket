import { useState } from "react";
import API from "../api/axios";
import { useEffect } from "react";

import LoadingSpiner from "./../Components/LoadingSpinner";
// import axios from "axios";

function Header() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
      <p className="text-gray-500 mt-1">
        Fill in the details to list your product in WiseMarket
      </p>
    </div>
  );
}

function ProductUpload() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    brand: "",
    category: "",
    unit: "",
    weight: "",
    price: "",
    discountPrice: "",
    stock: "",
    featured: "",
    description: "",
  });
  const [image, setImage] = useState(null);

  function handleChange(e) {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  }

  function handleImageChange(e) {
    setImage(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", productData.name);
      formData.append("brand", productData.brand);
      formData.append("category", productData.category);
      formData.append("unit", productData.unit);
      formData.append("weight", productData.weight);
      formData.append("price", productData.price);
      formData.append("discountPrice", productData.discountPrice);
      formData.append("stock", productData.stock);
      formData.append("featured", productData.featured);
      formData.append("description", productData.description);

      formData.append("image", image);
      console.log("form:", formData);
      const response = await API.post("/client/uploadProduct", formData);
      console.log("Success!", response);
      setProductData({
        name: "",
        brand: "",
        category: "",
        unit: "",
        weight: "",
        price: "",
        discountPrice: "",
        stock: "",
        featured: "",
        description: "",
      });
      setImage(null);
    } catch (err) {
      console.log("ERROR:", err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function getCategoriesData() {
      try {
        setLoading(true);
        const response = await API.get("/client/getCategories");
        setCategories(response?.data?.category || []);
      } catch (err) {
        console.error("Failed to load categories", err);
      } finally {
        setLoading(false); // ✅ move here
      }
    }

    getCategoriesData();
  }, []);

  console.log("Catego", categories);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 p-6 md:p-12">
      {loading ? (
        <LoadingSpiner />
      ) : (
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Header */}
          <Header />

          {/* Form */}
          <ProductForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            setImage={handleImageChange}
            productData={productData}
            loading={loading}
            categories={categories}
          />
        </div>
      )}
    </div>
  );
}

function ProductForm({
  onChange,
  onSubmit,
  setImage,
  productData,
  loading,
  categories,
}) {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={onChange}
          placeholder="Organic Bananas"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Brand */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Brand
        </label>
        <input
          type="text"
          name="brand"
          value={productData.brand}
          onChange={onChange}
          placeholder="FreshFarm"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Category
        </label>
        <select
          name="category"
          value={productData.category}
          onChange={onChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option>Select Category</option>

          {categories.length > 0 ? (
            categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))
          ) : (
            <option disabled>Loading categories...</option>
          )}
          {/* <option>Vegetables</option>
          <option>Dairy</option>
          <option>Bakery</option>
          <option>Beverages</option> */}
        </select>
      </div>

      {/* Unit */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Unit
        </label>
        <select
          name="unit"
          value={productData.unit}
          onChange={onChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option>Select Unit</option>
          <option>kg</option>
          <option>g</option>
          <option>lb</option>
          <option>ml</option>
          <option>l</option>
          <option>pcs</option>
          <option>pack</option>
        </select>
      </div>

      {/* Weight */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Weight / Volume
        </label>
        <input
          name="weight"
          value={productData.weight}
          onChange={onChange}
          type="number"
          placeholder="1"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Price (₹)
        </label>
        <input
          name="price"
          value={productData.price}
          onChange={onChange}
          type="number"
          placeholder="100"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Discount Price */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Discount Price (optional)
        </label>
        <input
          name="discountPrice"
          value={productData.discountPrice}
          onChange={onChange}
          type="number"
          placeholder="80"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Stock */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Stock Quantity
        </label>
        <input
          type="number"
          name="stock"
          value={productData.stock}
          onChange={onChange}
          placeholder="50"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Featured */}
      <div className="flex items-center gap-3 mt-6">
        <input
          name="featured"
          checked={productData.featured}
          onChange={onChange}
          type="checkbox"
          className="h-5 w-5 accent-green-600"
        />
        <span className="text-sm text-gray-700 font-medium">
          Feature this product on homepage
        </span>
      </div>

      {/* Description */}
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Description
        </label>
        <textarea
          rows="4"
          name="description"
          value={productData.description}
          onChange={onChange}
          placeholder="Describe the freshness, quality, origin..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        ></textarea>
      </div>

      {/* Image Upload */}
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Product Images
        </label>
        <input
          type="file"
          name="image"
          placeholder="50"
          onChange={setImage}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        {/* <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 text-center hover:bg-green-50 transition cursor-pointer">
              <p className="text-sm text-gray-500">
                Drag & drop images here or click to upload
              </p>
            </div> */}
      </div>

      {/* Submit */}
      <div className="md:col-span-2 flex justify-end gap-4 mt-6">
        <button
          type="reset"
          className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Uploading..." : "Publish Product"}
        </button>
      </div>
    </form>
  );
}

function ProductForm({ onChange, onSubmit, setImage, productData, loading }) {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Product Name
        </label>
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={onChange}
          placeholder="Organic Bananas"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Brand */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Brand
        </label>
        <input
          type="text"
          name="brand"
          value={productData.brand}
          onChange={onChange}
          placeholder="FreshFarm"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Category
        </label>
        <select
          name="category"
          value={productData.category}
          onChange={onChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option>Select Category</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Dairy</option>
          <option>Bakery</option>
          <option>Beverages</option>
        </select>
      </div>

      {/* Unit */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Unit
        </label>
        <select
          name="unit"
          value={productData.unit}
          onChange={onChange}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        >
          <option>kg</option>
          <option>g</option>
          <option>lb</option>
          <option>ml</option>
          <option>l</option>
          <option>pcs</option>
          <option>pack</option>
        </select>
      </div>

      {/* Weight */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Weight / Volume
        </label>
        <input
          name="weight"
          value={productData.weight}
          onChange={onChange}
          type="number"
          placeholder="1"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Price (₹)
        </label>
        <input
          name="price"
          value={productData.price}
          onChange={onChange}
          type="number"
          placeholder="100"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Discount Price */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Discount Price (optional)
        </label>
        <input
          name="discountPrice"
          value={productData.discountPrice}
          onChange={onChange}
          type="number"
          placeholder="80"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Stock */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Stock Quantity
        </label>
        <input
          type="number"
          name="stock"
          value={productData.stock}
          onChange={onChange}
          placeholder="50"
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
      </div>

      {/* Featured */}
      <div className="flex items-center gap-3 mt-6">
        <input
          name="featured"
          checked={productData.featured}
          onChange={onChange}
          type="checkbox"
          className="h-5 w-5 accent-green-600"
        />
        <span className="text-sm text-gray-700 font-medium">
          Feature this product on homepage
        </span>
      </div>

      {/* Description */}
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Description
        </label>
        <textarea
          rows="4"
          name="description"
          value={productData.description}
          onChange={onChange}
          placeholder="Describe the freshness, quality, origin..."
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        ></textarea>
      </div>

      {/* Image Upload */}
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Product Images
        </label>
        <input
          type="file"
          name="image"
          placeholder="50"
          onChange={setImage}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        {/* <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 text-center hover:bg-green-50 transition cursor-pointer">
              <p className="text-sm text-gray-500">
                Drag & drop images here or click to upload
              </p>
            </div> */}
      </div>

      {/* Submit */}
      <div className="md:col-span-2 flex justify-end gap-4 mt-6">
        <button
          type="reset"
          className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Uploading..." : "Publish Product"}
        </button>
      </div>
    </form>
  );
}

export default ProductUpload;
