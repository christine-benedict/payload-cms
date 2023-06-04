import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Admins from "./collections/Admins";
import Clients from "./collections/Clients";
import SellerTimeline from "./globals/SellerTimeline";
import AnswerProfiles from "./collections/AnswerProfiles";
import BuyerCompany from "./collections/BuyerCompany";
import SellerCompany from "./collections/SellerCompany";
import Media from "./collections/Media";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

const adapter = s3Adapter({
    config: {
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        // ... Other S3 configuration
        region: process.env.S3_REGION,
    },
    bucket: process.env.S3_BUCKET,
    acl: "public-read",
});

export default buildConfig({
    serverURL: "http://localhost:3000",
    admin: {
        user: Admins.slug,
    },
    collections: [
        Admins,
        Clients,
        AnswerProfiles,
        BuyerCompany,
        SellerCompany,
        Media,
    ],
    globals: [SellerTimeline],
    typescript: {
        outputFile: path.resolve(__dirname, "payload-types.ts"),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
    },
    plugins: [
        cloudStorage({
            collections: {
                media: {
                    adapter: adapter, // see docs for the adapter you want to use
                },
            },
        }),
    ],
});
