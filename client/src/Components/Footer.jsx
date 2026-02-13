import { Leaf, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const links = {
    "About WiseMarket": ["About Us", "Careers", "Blog", "Press"],
    "Customer Service": [
      "Help Center",
      "Returns",
      "Shipping Info",
      "Order Tracking",
    ],
    "Quick Links": [
      "Privacy Policy",
      "Terms of Service",
      "Sitemap",
      "Contact Us",
    ],
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5 group cursor-pointer">
              <div
                className="h-10 w-10 rounded-xl 
                          bg-gradient-to-br from-green-500 to-emerald-600 
                          flex items-center justify-center 
                          shadow-md group-hover:scale-105 
                          transition-transform duration-300"
              >
                <Leaf className="h-5 w-5 text-white" />
              </div>

              <span className="text-xl font-bold text-white tracking-tight">
                Wise<span className="text-green-500">Market</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted online grocery store delivering freshness, speed, and
              smart savings straight to your doorstep.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-xl 
                         bg-white/5 
                         flex items-center justify-center 
                         hover:bg-green-600 
                         hover:scale-110
                         transition-all duration-300"
                >
                  <Icon className="h-4 w-4 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">
                {title}
              </h4>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 
                             hover:text-green-500 
                             transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} WiseMarket. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-green-500 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-500 transition">
              Terms
            </a>
            <a href="#" className="hover:text-green-500 transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
