import { useState } from "react";

export default function AddItem({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    cover: "",
    images: [],
  });

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setForm((f) => ({
        ...f,
        images: Array.from(files).map((file) => URL.createObjectURL(file)),
      }));
    } else if (name === "cover") {
      setForm((f) => ({
        ...f,
        cover: URL.createObjectURL(files[0]),
      }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.type || !form.description || !form.cover) return;
    onAdd({
      name: form.name,
      type: form.type,
      description: form.description,
      cover: form.cover,
      images: [form.cover, ...form.images],
    });
    setForm({
      name: "",
      type: "",
      description: "",
      cover: "",
      images: [],
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 mt-12 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-pink-700 mb-2">Add New Item</h2>
      <label className="font-medium">
        Item Name
        <input
          name="name"
          value={form.name}
          onChange={handleFormChange}
          required
          className="block w-full mt-1 p-3 rounded-lg border border-gray-200 focus:border-indigo-400 outline-none"
        />
      </label>
      <label className="font-medium">
        Item Type
        <input
          name="type"
          value={form.type}
          onChange={handleFormChange}
          placeholder="Shirt, Pant, Shoes, etc."
          required
          className="block w-full mt-1 p-3 rounded-lg border border-gray-200 focus:border-indigo-400 outline-none"
        />
      </label>
      <label className="font-medium">
        Item Description
        <textarea
          name="description"
          value={form.description}
          onChange={handleFormChange}
          required
          rows={3}
          className="block w-full mt-1 p-3 rounded-lg border border-gray-200 focus:border-indigo-400 outline-none resize-vertical"
        />
      </label>
      <label className="font-medium">
        Item Cover Image
        <input
          name="cover"
          type="file"
          accept="image/*"
          onChange={handleFormChange}
          required
          className="block mt-1"
        />
        {form.cover && (
          <img
            src={form.cover}
            alt="cover preview"
            className="w-20 h-20 object-cover rounded-lg mt-2 shadow"
          />
        )}
      </label>
      <label className="font-medium">
        Item Additional Images
        <input
          name="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFormChange}
          className="block mt-1"
        />
        <div className="flex gap-2 mt-2">
          {form.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="additional preview"
              className="w-12 h-12 object-cover rounded shadow"
            />
          ))}
        </div>
      </label>
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-bold py-3 rounded-lg mt-4 shadow hover:from-indigo-700 hover:to-pink-700 transition"
      >
        Add Item
      </button>
    </form>
  );
}
