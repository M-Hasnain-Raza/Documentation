export default {
    name: "chef",
    title: "Chef",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Chef's Name",
            type: "string",
            // validation: Rule => Rule.required()
        },
        {
            name: "image",
            title: "Chef's Image",
            type: "image",
            options: {
                hotspot: true,
            },
            // validation: Rule => Rule.required()
        },
        {
            name: "bio",
            title: "Chef's Bio",
            type: "array",
            of: [{ type: "block" }],
            // validation: Rule => Rule.required()
        },
    ]
}