import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Admins from "./collections/Admins";
import Clients from "./collections/Clients";
import SellerTimeline from "./globals/SellerTimeline";
import AnswerProfiles from "./collections/AnswerProfiles";
import BuyerCompany from "./collections/BuyerCompany";
import SellerCompany from "./collections/SellerCompany";

export default buildConfig({
    serverURL: "http://localhost:3000",
    admin: {
        user: Admins.slug,
    },
    collections: [Admins, Clients, AnswerProfiles, BuyerCompany, SellerCompany],
    globals: [SellerTimeline],
    typescript: {
        outputFile: path.resolve(__dirname, "payload-types.ts"),
    },
    graphQL: {
        schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
    },
    plugins: [],
});
