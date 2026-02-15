const OrdersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-100 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
            <p className="text-gray-500 mt-1">
              Track your recent purchases and order history
            </p>
          </div>

          {/* Filter */}
          <div className="mt-4 md:mt-0">
            <select className="rounded-xl border border-gray-200 px-4 py-2.5 focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option>All Orders</option>
              <option>Delivered</option>
              <option>Processing</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {[1, 2, 3].map((order) => (
            <div
              key={order}
              className="bg-white rounded-3xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition"
            >
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Order #WM-102{order}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Placed on Feb 12, 2026
                  </p>
                </div>

                <span
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold 
                                 bg-green-100 text-green-700"
                >
                  Delivered
                </span>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-gray-100 p-3"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1574226516831-e1dff420e42e"
                      alt=""
                      className="h-14 w-14 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">
                        Organic Apples
                      </p>
                      <p className="text-xs text-gray-500">Qty: 2 · ₹120</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="font-semibold text-gray-900">Total: ₹420</p>

                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                    View Details
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                    Reorder
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {false && (
          <div className="mt-24 text-center">
            <div className="mx-auto h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
              📦
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No orders yet
            </h3>
            <p className="text-gray-500 mb-6">
              Your past orders will appear here.
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-lg hover:bg-green-700 transition"
            >
              Start Shopping
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
