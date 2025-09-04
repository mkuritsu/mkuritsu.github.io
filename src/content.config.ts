import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string())
    })
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/projects" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        url: z.string(),
        highlighted: z.boolean()
    })
})

export const collections = { posts, projects };
