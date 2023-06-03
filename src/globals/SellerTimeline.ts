import { GlobalConfig } from "payload/types";
import { LiveSessionIntro, QuestionnaireIntro } from "../blocks/segments";
import { v4 as uuidv4 } from "uuid";

export const SellerTimeline: GlobalConfig = {
    slug: "seller-timeline", // required
    versions: true,
    fields: [
        {
            name: "phase",
            type: "array",
            minRows: 2,
            labels: {
                singular: "phase",
                plural: "phases",
            },
            fields: [
                {
                    name: "title",
                    type: "text",
                },
                {
                    name: "key",
                    type: "text",
                    unique: true,
                    defaultValue: uuidv4(),
                },
                {
                    type: "tabs",
                    tabs: [
                        {
                            label: "IOS1",
                            description: "Information gathering.",
                            fields: [
                                {
                                    name: "ios1Segment", // required
                                    label: "Segment",
                                    type: "blocks", // required
                                    labels: {
                                        singular: "segment",
                                        plural: "segments",
                                    },
                                    minRows: 1,
                                    maxRows: 20,
                                    blocks: [
                                        // required
                                        LiveSessionIntro,
                                        QuestionnaireIntro,
                                    ],
                                    admin: {
                                        initCollapsed: true,
                                    },
                                },
                            ],
                        },
                        {
                            label: "IOS2",
                            description: "More info.",
                            fields: [
                                {
                                    name: "ios2Segment", // required
                                    label: "Segment",
                                    type: "blocks", // required
                                    labels: {
                                        singular: "segment",
                                        plural: "segments",
                                    },
                                    minRows: 1,
                                    maxRows: 20,
                                    blocks: [
                                        // required
                                        LiveSessionIntro,
                                        QuestionnaireIntro,
                                    ],
                                    admin: {
                                        initCollapsed: true,
                                    },
                                },
                            ],
                        },
                        {
                            label: "IOS3",
                            description: "Final steps.",
                            fields: [
                                {
                                    name: "ios3Segment", // required
                                    label: "Segment",
                                    type: "blocks", // required
                                    labels: {
                                        singular: "segment",
                                        plural: "segments",
                                    },
                                    minRows: 1,
                                    maxRows: 20,
                                    blocks: [
                                        // required
                                        LiveSessionIntro,
                                        QuestionnaireIntro,
                                    ],
                                    admin: {
                                        initCollapsed: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

export default SellerTimeline;
