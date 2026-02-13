import { Truck, Zap, PartyPopper } from "lucide-react";
import { useState, useEffect } from "react";

const announcements = [
  { icon: Truck, text: "Free delivery on orders above ₹499" },
  { icon: Zap, text: "Flash Sale ends soon!" },
  { icon: PartyPopper, text: "10% off for new users — Use code: WISE10" },
];

const AnnouncementBar = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % announcements.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const { icon: Icon, text } = announcements[current];

  return (
    <div
      className="relative overflow-hidden 
                bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 
                text-white py-2.5"
    >
      {/* Soft Animated Glow */}
      <div className="absolute inset-0 bg-white/10 blur-xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-sm font-semibold tracking-wide">
          {/* Icon */}
          <Icon className="h-4 w-4 animate-bounce" />

          {/* Text */}
          <span className="text-center">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
