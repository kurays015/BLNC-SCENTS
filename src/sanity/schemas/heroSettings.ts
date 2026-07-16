import { defineField, defineType } from "sanity";

export const heroSettingsSchema = defineType({
  name: "heroSettings",
  title: "Hero Settings",
  type: "document",
  fields: [
    defineField({
      name: "featuredProduct",
      title: "Featured Product",
      type: "reference",
      to: [{ type: "product" }],
      description: "The product shown prominently on the home page hero section",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Hero Settings" };
    },
  },
});
