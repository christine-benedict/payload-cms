import { CollectionConfig } from "payload/types";
import { v4 as uuidv4 } from "uuid";

const SellerCompany: CollectionConfig = {
    slug: "seller",
    admin: {
        useAsTitle: "companyName",
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "companyName",
            type: "text",
        },
        {
            name: "website",
            type: "text",
        },
        {
            type: "tabs",
            tabs: [
                {
                    label: "Founders",
                    description: "Tell us about your founders.",
                    fields: [
                        {
                            name: "founders",
                            type: "array",
                            minRows: 1,
                            labels: {
                                singular: "founder",
                                plural: "founders",
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
                                    name: "position",
                                    type: "text",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "Financials",
                    description:
                        "Please provide us with some financial history data.",
                    fields: [
                        {
                            name: "financialSnapshot",
                            type: "array",
                            minRows: 2,
                            labels: {
                                singular: "year",
                                plural: "years",
                            },
                            fields: [
                                {
                                    name: "year",
                                    type: "number",
                                },
                                {
                                    name: "totalRevenue",
                                    type: "number",
                                },
                                {
                                    name: "grossRecurringRevenue",
                                    type: "number",
                                },
                                {
                                    name: "grossNonRecurringRevenue",
                                    type: "number",
                                },
                                {
                                    name: "opex",
                                    label: "OPEX",
                                    type: "number",
                                },
                                {
                                    name: "eboc",
                                    label: "EBOC",
                                    type: "number",
                                },
                                {
                                    name: "ebitda",
                                    label: "EBITDA",
                                    type: "number",
                                },
                                {
                                    name: "proposedRetainedComp",
                                    type: "number",
                                },
                                {
                                    name: "key",
                                    type: "text",
                                    unique: true,
                                    defaultValue: uuidv4(),
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default SellerCompany;
