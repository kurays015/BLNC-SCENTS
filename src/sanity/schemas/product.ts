import { defineField, defineType } from "sanity";

export const productSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Optional short tagline shown on cards",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "inspiredBy",
      title: "Inspired By",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "brand",
          title: "Brand",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "fragrance",
          title: "Fragrance",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "notes",
      title: "Scent Notes",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. vanilla, aromatic, green",
    }),
    defineField({
      name: "dominantAccords",
      title: "Dominant Accords",
      type: "array",
      of: [{ type: "string" }],
      description: "Used for filtering on the collection page",
    }),
    defineField({
      name: "accords",
      title: "Scent Profile Accords",
      type: "array",
      of: [
        {
          type: "object",
          name: "accord",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({
              name: "intensity",
              title: "Intensity (0–100)",
              type: "number",
              validation: (Rule) => Rule.min(0).max(100),
            }),
            defineField({
              name: "color",
              title: "Color (hex)",
              type: "string",
              description: "e.g. #F5E6A3",
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "intensity" },
            prepare({ title, subtitle }) {
              return { title, subtitle: `intensity: ${subtitle}` };
            },
          },
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first in the collection",
    }),
    defineField({
      name: "legacyImageUrl",
      title: "Legacy Image URL",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "inspiredBy.fragrance",
    },
    prepare({ title, media, subtitle }) {
      return {
        title,
        media,
        subtitle: subtitle ? `Inspired by ${subtitle}` : "",
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
