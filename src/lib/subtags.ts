// Sub-categories shown after clicking a main category on the recipes page.
// Each recipe lists the ids it belongs to in its `tags:` frontmatter field.
// A sub-tag is only displayed when at least one recipe of the chosen category
// uses it, so adding a recipe never leaves an empty filter behind.

export interface SubTag {
  id: string;
  label: string;
}

export const SUBTAGS: Record<string, SubTag[]> = {
  "Entrées": [
    { id: "poisson", label: "Poisson" },
    { id: "vegetarien", label: "Végétarien" },
    { id: "froid", label: "Froid" },
    { id: "fetes", label: "Fêtes" },
  ],
  "Tartes & Salades": [
    { id: "vegetarien", label: "Végétarien" },
    { id: "poisson", label: "Poisson" },
    { id: "viande", label: "Viande" },
    { id: "rapide", label: "Rapide" },
  ],
  "Plats": [
    { id: "viande", label: "Viande" },
    { id: "poisson", label: "Poisson" },
    { id: "vegetarien", label: "Végétarien" },
    { id: "mijote", label: "Mijoté" },
    { id: "rapide", label: "Rapide" },
    { id: "froid", label: "Froid" },
    { id: "curry", label: "Curry" },
  ],
  "Desserts": [
    { id: "chocolat", label: "Chocolat" },
    { id: "fruits", label: "Fruits" },
    { id: "cremeux", label: "Crémeux" },
    { id: "gateau", label: "Gâteau" },
    { id: "fetes", label: "Fêtes" },
  ],
  "Préparations": [],
};

// id -> label, used for the tags shown on recipe photos.
export const TAG_LABELS: Record<string, string> = Object.fromEntries(
  Object.values(SUBTAGS)
    .flat()
    .map((tag) => [tag.id, tag.label])
);
