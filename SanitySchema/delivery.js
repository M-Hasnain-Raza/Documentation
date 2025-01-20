

import  "./dishes.js"

export default {
    name: "delivery",
title: "Delivery",
    type: "document",
    fields: [
      
        {
            name: "total",
            title: "Total",
            type: "number",
            // validation: (Rule) => Rule.required(),
        },
      
        {
            name: "deliveryTime",
            title: "Delivery Time",
            type: "string",
            // validation: (Rule) => Rule.required(),
        },
        {
            name: "deliveryTimeUnit",
            title: "Delivery Time Unit",
            type: "string",
            options: {
                list: [
                    { title: "Days", value: "days" },
                    { title: "Weeks", value: "weeks" },
                    { title: "Months", value: "months" },
                ],
            },
            // validation: (Rule) => Rule.required(),
        },
        {
            name: "deliveryTimeDescription",
            title: "Delivery Time Description",
            type: "string",
            // validation: (Rule) => Rule.required(),
        },
       
    ],}