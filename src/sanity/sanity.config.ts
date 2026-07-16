import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./env";
import { schemaTypes } from "./schemas";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Hero Settings")
              .id("heroSettings")
              .child(
                S.document()
                  .schemaType("heroSettings")
                  .documentId("heroSettings"),
              ),
            S.divider(),
            S.documentTypeListItem("product").title("Products"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
});
