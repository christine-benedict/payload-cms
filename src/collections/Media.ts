// import { S3UploadCollectionConfig } from "payload-s3-upload";
import { CollectionConfig } from "payload/types";

const myBucketUrl: string = `http://alaris-web.s3.amazonaws.com`;

const Media: CollectionConfig = {
    slug: "media",
    upload: {
        staticURL: "/assets",
        staticDir: "assets",
        imageSizes: [
            {
                name: "thumbnail",
                width: 400,
                height: 300,
                crop: "center",
            },
            {
                name: "card",
                width: 768,
                height: 1024,
                crop: "center",
            },
            {
                name: "tablet",
                width: 1024,
                height: null,
                crop: "center",
            },
        ],
        adminThumbnail: "thumbnail",
        mimeTypes: ["image/*"],
    },
    admin: {
        useAsTitle: "alt",
    },
    // access: {
    //     read: ({ req: { user } }) => isAdmin(user),
    // },
    fields: [
        {
            name: "url",
            type: "text",
            access: {
                create: () => false,
            },
            admin: {
                disabled: true,
            },
            hooks: {
                afterRead: [
                    ({ data: doc }) => {
                        doc.url = `${myBucketUrl}/${doc.filename}`;

                        // add a url property on each imageSize
                        Object.keys(doc.sizes).forEach(
                            (k) =>
                                (doc.sizes[
                                    k
                                ].url = `${myBucketUrl}/${doc.sizes[k].filename}`)
                        );
                    },
                ],
            },
        },
        {
            name: "alt",
            type: "text",
        },
    ],
};

export default Media;
