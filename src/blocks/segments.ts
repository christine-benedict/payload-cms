import { Block, Field } from "payload/types";
import { v4 as uuidv4 } from "uuid";
import { SelectMultipleQuestion, SelectOneQuestion } from "./questions";

const fields = (): Field[] => [
    {
        name: "question", // required
        type: "blocks", // required
        labels: {
            singular: "question",
            plural: "questions",
        },
        minRows: 1,
        maxRows: 20,
        blocks: [
            // required
            SelectOneQuestion,
            SelectMultipleQuestion,
        ],
        admin: {
            initCollapsed: true,
        },
    },
    {
        name: "key",
        type: "text",
        required: true,
        unique: true,
        defaultValue: uuidv4(),
        admin: {
            readOnly: true,
        },
    },
];

export const LiveSessionIntro: Block = {
    slug: "live-session-intro-segment", // required
    // imageURL: "https://google.com/path/to/image.jpg",
    // imageAltText: "A nice thumbnail image to show what this block looks like",
    fields: fields(),
};

export const QuestionnaireIntro: Block = {
    slug: "questionnaire-intro-segment", // required
    // imageURL: "https://google.com/path/to/image.jpg",
    // imageAltText: "A nice thumbnail image to show what this block looks like",
    fields: fields(),
};
