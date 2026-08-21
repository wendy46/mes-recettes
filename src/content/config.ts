import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Entrées', 'Tartes & Salades', 'Plats', 'Desserts', 'Préparations']),
    servings: z.string().optional(),
    prep_time: z.string().optional(),
    cook_time: z.string().optional(),
    notes: z.string().optional(),
    ingredients: z.array(z.string()),
    steps: z.array(z.string()),
    date_added: z.coerce.date(),
  }),
});

export const collections = { recipes };
