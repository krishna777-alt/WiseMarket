const ProductUpload = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 p-6 md:p-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
          <p className="text-gray-500 mt-1">
            Fill in the details to list your product in WiseMarket
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
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
              placeholder="FreshFarm"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Category
            </label>
            <select className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none">
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
            <select className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none">
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
              placeholder="50"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Featured */}
          <div className="flex items-center gap-3 mt-6">
            <input type="checkbox" className="h-5 w-5 accent-green-600" />
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
              placeholder="Describe the freshness, quality, origin..."
              className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Product Images
            </label>
            <div className="border-2 border-dashed border-green-300 rounded-2xl p-6 text-center hover:bg-green-50 transition cursor-pointer">
              <p className="text-sm text-gray-500">
                Drag & drop images here or click to upload
              </p>
            </div>
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
              className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 hover:scale-[1.02] transition"
            >
              Publish Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductUpload;
