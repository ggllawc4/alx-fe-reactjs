import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required.';
    if (!formData.ingredients.trim()) newErrors.ingredients = 'Ingredients are required.';
    else if (formData.ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients.';
    }
    if (!formData.steps.trim()) newErrors.steps = 'Preparation steps are required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Recipe Submitted:', formData);
    alert('Recipe successfully submitted!');
    setFormData({ title: '', ingredients: '', steps: '' });
    setErrors({});
  };

  return (
    <div className="container mx-auto p-6 max-w-lg md:max-w-2xl">
      <h1 className="text-3xl font-bold text-center mb-6">Add a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 shadow-lg rounded-lg p-6 md:p-10 space-y-4"
      >
        <div>
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-lg font-semibold mb-2">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="3"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>
        <div>
          <label htmlFor="steps" className="block text-lg font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            rows="5"
            className={`w-full px-4 py-2 border rounded-lg ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition md:w-1/2 md:mx-auto"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;