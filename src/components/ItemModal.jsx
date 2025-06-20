import { useState } from "react";

export default function ItemModal({ item, onClose }) {
  const [carouselIdx, setCarouselIdx] = useState(0);

  const nextImg = () =>
    setCarouselIdx((i) => (i + 1 >= item.images.length ? 0 : i + 1));
  const prevImg = () =>
    setCarouselIdx((i) => (i - 1 < 0 ? item.images.length - 1 : i - 1));

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-pink-100 text-pink-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg hover:bg-pink-200 transition"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="font-bold text-2xl text-indigo-700 mb-1">{item.name}</h2>
        <div className="text-pink-700 font-semibold mb-2">{item.type}</div>
        <div className="text-gray-700 mb-4">{item.description}</div>
        {/* Carousel */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <button
            onClick={prevImg}
            className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl hover:bg-indigo-200 transition"
            aria-label="Previous"
          >
            ‹
          </button>
          <img
            src={item.images[carouselIdx]}
            alt="carousel"
            className="w-56 h-40 object-cover rounded-xl shadow"
          />
          <button
            onClick={nextImg}
            className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl hover:bg-indigo-200 transition"
            aria-label="Next"
          >
            ›
          </button>
        </div>
        <div className="flex gap-2 justify-center mb-4">
          {item.images.map((img, idx) => (
            <span
              key={idx}
              className={`inline-block w-3 h-3 rounded-full ${
                idx === carouselIdx ? "bg-pink-600" : "bg-indigo-100"
              }`}
            />
          ))}
        </div>
        <button
          className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold py-3 rounded-lg shadow hover:from-indigo-700 hover:to-pink-700 transition"
          onClick={() => alert("Enquiry feature coming soon!")}
        >
          Enquire
        </button>
      </div>
    </div>
  );
}
