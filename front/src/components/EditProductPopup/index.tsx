import React, { useState } from "react";
import Swal from "sweetalert2";

const EditProductPopup = ({ tour, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    image: tour.image,
    image2: tour.image2 || "",
    image3: tour.image3 || "",
    title: tour.title,
    description: tour.description,
    description2: tour.description2 || "",
    price: tour.price || "", // Asegúrate de que sea string inicialmente
    location: tour.location,
    duration: tour.duration,
    stock: tour.stock || "", // Asegúrate de que sea string inicialmente
    categories: tour.categories ? tour.categories.join(", ") : "",
    latitude: tour.latitude || "", // Agregar campo de latitude
    longitude: tour.longitude || "", // Agregar campo de longitude
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Handle category input specifically
    if (name === "categories") {
      const categoriesArray = value.split(",").map((cat) => cat.trim()); // Split, trim, and convert to array
      setFormData((prev) => ({ ...prev, [name]: categoriesArray }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica que price, stock, latitude y longitude sean válidos números
    const updatedProduct = {
      ...formData,
      price: parseFloat(formData.price) || 0, // Convierte price a número, default 0
      stock: parseInt(formData.stock) || 0, // Convierte stock a número entero, default 0
      latitude: parseFloat(formData.latitude) || 0, // Convierte latitude a número, default 0
      longitude: parseFloat(formData.longitude) || 0, // Convierte longitude a número, default 0
      categories: formData.categories
        ? formData.categories
            .toString()
            .split(",")
            .map((cat) => cat.trim()) // Convierte a array de strings
        : [], // Envía array vacío si no hay categorías
    };

    const invalidFields = [];
    if (isNaN(updatedProduct.price)) invalidFields.push("Precio");
    if (isNaN(updatedProduct.stock)) invalidFields.push("Stock");
    if (isNaN(updatedProduct.latitude)) invalidFields.push("Latitud");
    if (isNaN(updatedProduct.longitude)) invalidFields.push("Longitud");

    // Si hay campos inválidos, muestra una alerta y detén la ejecución
    if (invalidFields.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Error en los campos numéricos",
        text: `Por favor, revisa los siguientes campos: ${invalidFields.join(
          ", "
        )}.`,
        confirmButtonText: "OK",
      });
      return;
    }

    // Llamar a la función onSave con el producto actualizado
    onSave(updatedProduct);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-4xl p-6 max-h-[90vh] overflow-auto">
        <button
          type="button"
          className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          onClick={onClose}
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <h3 className="text-lg font-semibold mb-4">Añadir Producto</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Imagen principal */}
          <div>
            <label className="block text-sm font-medium">
              Imagen principal
            </label>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Imagen 2 */}
          <div>
            <label className="block text-sm font-medium">Imagen 2</label>
            <input
              type="file"
              name="image2"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Imagen 3 */}
          <div>
            <label className="block text-sm font-medium">Imagen 3</label>
            <input
              type="file"
              name="image3"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Título */}
          <div>
            <label className="block text-sm font-medium">
              Título del producto
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Descripción 1 */}
          <div>
            <label className="block text-sm font-medium">
              Descripción principal
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Descripción 2 */}
          <div>
            <label className="block text-sm font-medium">
              Descripción secundaria
            </label>
            <textarea
              name="description2"
              value={formData.description2}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Precio */}
          <div>
            <label className="block text-sm font-medium">Precio</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Ubicación */}
          <div>
            <label className="block text-sm font-medium">Ubicación</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Duración */}
          <div>
            <label className="block text-sm font-medium">Duración</label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Categorías */}
          <div>
            <label className="block text-sm font-medium">
              Categorías (separadas por comas)
            </label>
            <input
              type="text"
              name="categories"
              value={formData.categories}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Latitud */}
          <div>
            <label className="block text-sm font-medium">Latitud</label>
            <input
              type="number"
              step="any"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Longitud */}
          <div>
            <label className="block text-sm font-medium">Longitud</label>
            <input
              type="number"
              step="any"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              className="w-full border p-2 rounded-md"
            />
          </div>

          {/* Botones */}
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-lg"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductPopup;
