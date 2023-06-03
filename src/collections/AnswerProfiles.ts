import { Block, CollectionConfig, Field } from "payload/types";
import payload from "payload";

const getClient = async (data) => {
    const client = await payload.findByID({
        collection: "clients",
        id: data.client.value,
    });

    return client;
};

const getTimeline = async () => {
    const timeline = await payload.findGlobal({
        slug: "seller-timeline",
    });

    return timeline;
};

const AnswerProfiles: CollectionConfig = {
    slug: "answer-profile",
    admin: {
        useAsTitle: "title",
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "title",
            type: "text",
            admin: {
                hidden: true, // hides the field from the admin panel
            },
            hooks: {
                // beforeChange: [
                //     ({ siblingData }) => {
                //         // ensures data is not stored in DB
                //         delete siblingData["title"];
                //     },
                // ],
                afterRead: [
                    async ({ data }) => {
                        let client = await getClient(data);
                        return `${client.firstName} ${client.lastName}`;
                    },
                ],
            },
        },
        {
            name: "client",
            type: "relationship",
            relationTo: ["clients"],
            required: true,
        },
        {
            name: "clientType",
            type: "select",
            options: [
                { label: "Seller", value: "seller" },
                { label: "Buyer", value: "buyer" },
            ],
            required: true,
            defaultValue: "seller",
        },
        {
            name: "answerProfileJson",
            type: "json",
            hooks: {
                beforeChange: [
                    async ({ data }) => {
                        if (
                            data.answerProfileJson === null ||
                            data.answerProfileJson === {}
                        ) {
                            const timelineData = await getTimeline();
                            data.answerProfileJson = timelineData;
                        }
                    },
                ],
            },
        },
    ],
};

export default AnswerProfiles;
