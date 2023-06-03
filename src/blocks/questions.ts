import { Block, Field } from "payload/types";
import { v4 as uuidv4 } from "uuid";

const fields = (questionType): Field[] => [
    {
        name: "questionType",
        type: "text",
        required: true,
        defaultValue: questionType,
        admin: {
            readOnly: true,
        },
    },
    {
        name: "questionText",
        type: "textarea",
        required: true,
    },
    {
        name: "answers",
        type: "array",
        label: "Answer Options",
        minRows: 2,
        labels: {
            singular: "Answer",
            plural: "Answers",
        },
        fields: [
            // required
            {
                name: "label",
                type: "text",
            },
            {
                name: "value",
                type: "text",
            },
        ],
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

export const SelectOneQuestion: Block = {
    slug: "select-one-question", // required
    // imageURL: "https://google.com/path/to/image.jpg",
    // imageAltText: "A nice thumbnail image to show what this block looks like",
    fields: fields("selectOne"),
};

export const SelectMultipleQuestion: Block = {
    slug: "select-multiple-question", // required
    // imageURL: "https://google.com/path/to/image.jpg",
    // imageAltText: "A nice thumbnail image to show what this block looks like",
    fields: fields("selectMultiple"),
};
