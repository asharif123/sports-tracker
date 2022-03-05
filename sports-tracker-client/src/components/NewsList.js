import React from "react";

function NewsList({ items }) {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}

export default NewsList;
