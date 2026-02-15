const Cart = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h2>

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 py-4 border-b last:border-b-0"
            >
              <img
                src="https://images.unsplash.com/photo-1574226516831-e1dff420e42e"
                alt=""
                className="h-20 w-20 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">Organic Bananas</h3>
                <p className="text-sm text-gray-500">₹45 per kg</p>

                <div className="flex items-center gap-3 mt-2">
                  <button className="h-8 w-8 rounded-lg bg-gray-100 hover:bg-gray-200">
                    −
                  </button>
                  <span className="text-sm font-medium">2</span>
                  <button className="h-8 w-8 rounded-lg bg-gray-100 hover:bg-gray-200">
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold text-gray-800">₹90</p>
                <button className="text-sm text-red-500 hover:underline mt-1">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bill Summary */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 h-fit">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Order Summary
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹190</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹20</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-900">
              <span>Total</span>
              <span>₹210</span>
            </div>
          </div>

          <button className="w-full mt-6 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 hover:scale-[1.02] transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
