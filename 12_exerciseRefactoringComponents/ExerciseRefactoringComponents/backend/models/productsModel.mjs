const products = [
  {
    id: 3456,
    name: "Ginger Beer Co.",
    details: [
      { name: "Calories", description: "160" },
      {
        name: "Ingredients",
        description:
          "Water, High Fructose Corn Syrup, Natural Ginger Flavor, Citric Acid, Potassium Sorbate (Preservative), Sodium Benzoate (Preservative), Ascorbic Acid (Preservative).",
      },
      { name: "Origins", description: "St. Ann Parish, Jamaica" },
      {
        name: "Recommended Mixers",
        description:
          "Moscow Mule, Gold N' Sunny, Shandy, American Mule, and Dark N' Stormy",
      },
    ],
  },
];

export function getAll() {
  return products;
}

export function findOne(param) {
  return products.find((item) => item.id === param);
}
