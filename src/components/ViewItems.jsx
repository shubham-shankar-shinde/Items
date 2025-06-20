export default function ViewItems({ items, setModalItem }) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 px-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer p-4 flex flex-col items-center"
          onClick={() => setModalItem(item)}
        >
          <img
            src={item.cover}
            alt={item.name}
            className="w-full h-48 object-cover rounded-xl mb-4 shadow"
          />
          <div className="font-bold text-indigo-700 text-lg">{item.name}</div>
        </div>
      ))}
    </div>
  );
}
