const Forbidden403 = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 h-80 w-80 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 h-80 w-80 bg-emerald-400/20 rounded-full blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 h-14 w-14 rounded-2xl bg-green-600/10 flex items-center justify-center">
          🚫
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-green-600 tracking-tight mb-2">
          403
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Access Forbidden
        </h2>

        <p className="text-gray-500 mb-8">
          You don’t have permission to view this page. This aisle is off-limits
          for now.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold 
                       shadow-lg hover:bg-green-700 hover:scale-[1.02] transition"
          >
            Go Home
          </a>

          <a
            href="/login"
            className="px-6 py-3 rounded-xl border border-green-600 text-green-600 
                       font-semibold hover:bg-green-50 hover:scale-[1.02] transition"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Forbidden403;
