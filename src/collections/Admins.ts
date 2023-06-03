import { CollectionConfig } from "payload/types";
import { isAdmin } from "../permissions/isAdmin";
import { isSuperAdmin } from "../permissions/isSuperAdmin";

const Admins: CollectionConfig = {
    slug: "admins",
    auth: true,
    admin: {
        useAsTitle: "email",
    },
    access: {
        create: ({ req: { user } }) => isSuperAdmin(user),
        read: ({ req: { user } }) => isAdmin(user),
        update: ({ req: { user } }) => isAdmin(user),
        delete: ({ req: { user } }) => isSuperAdmin(user),
    },
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
                { label: "Super Admin", value: "super" },
                { label: "Admin", value: "admin" },
            ],
            required: true,
            defaultValue: "admin",
        },
    ],
};

export default Admins;
