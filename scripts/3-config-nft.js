import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xB977B3Ed7253A1c0B9025B2C49dc2F5Bf79E7C89",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Messi Copa America Badge",
        description: "This NFT will give you access to MessiDAO!",
        image: readFileSync("scripts/assets/messidaofoto.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
