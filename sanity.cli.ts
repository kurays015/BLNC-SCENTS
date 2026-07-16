import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "f5dvap5r",
    dataset: "production",
  },
  studioHost: "blnc-scents",
  deployment: {
    autoUpdates: true,
  },
});
