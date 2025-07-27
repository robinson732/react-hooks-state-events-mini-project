import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const buttons = categories.map((cat) => (
    <button
      key={cat}
      className={selectedCategory === cat ? "selected" : ""}
      onClick={() => onCategoryChange(cat)}
    >
      {cat}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
