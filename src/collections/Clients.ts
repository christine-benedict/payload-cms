import { CollectionConfig } from "payload/types";
import { isAdmin } from "../permissions/isAdmin";

const Clients: CollectionConfig = {
    slug: "clients",
    auth: true,
    timestamps: false,
    admin: {
        useAsTitle: "email",
    },
    // access: {
    //     read: ({ req: { user } }) => isAdmin(user),
    // },
    fields: [
        {
            name: "firstName",
            type: "text",
        },
        {
            name: "lastName",
            type: "text",
        },
        {
            name: "role",
            type: "select",
            saveToJWT: true,
            options: [
                { label: "Seller", value: "seller" },
                { label: "Buyer", value: "buyer" },
            ],
            required: true,
            defaultValue: "seller",
        },
        {
            name: "Company",
            type: "relationship",
            relationTo: ["buyer", "seller"],
        },
    ],
};

export default Clients;
