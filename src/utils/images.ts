import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

// Maps a recipe category to its fallback photo in /public/images/categories/.
const CATEGORY_FALLBACK_SLUG: Record<string, string> = {
  "Entrées": "entrees",
  "Tartes & Salades": "tartes-salades",
  "Plats": "plats",
  "Desserts": "desserts",
  "Préparations": "preparations",
};

const PUBLIC_DIR = fileURLToPath(new URL("../../public", import.meta.url));

/**
 * Resolves the photo to display for a recipe.
 * - Uses an explicit `image` frontmatter value if present.
 * - Otherwise looks for /public/images/recipes/<slug>.jpg.
 * - Falls back to the recipe's category photo if no dedicated photo exists
 *   (relevant for recipes added later without a matching upload).
 */
export function getRecipeImage(slug: string, category: string, explicitImage?: string): string {
  if (explicitImage) return explicitImage;

  const relativePath = `/images/recipes/${slug}.jpg`;
  if (existsSync(`${PUBLIC_DIR}${relativePath}`)) {
    return relativePath;
  }

  const fallbackSlug = CATEGORY_FALLBACK_SLUG[category] ?? "plats";
  return `/images/categories/${fallbackSlug}.jpg`;
}
