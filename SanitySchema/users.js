export default {
    name : "user",
    title : "User",
    type : "document",
    fields : [
        {name : "name", type :"string", title:"Name"},
        {name : "email", type : "string", title : "Email"},
        {name : "password", type : "string", title : "Password"},
        {name : "isAdmin", type : "boolean", title : "Is Admin"},
        {name : "cart", type :"array", title:"Cart", of:[{type:"reference", to:[{type:"product"}]}]},
        {name : "wishlist", type :"array", title:"Wishlist", of: [{type: "reference", to: [{type: "product"}]}]},
        {name : "orders", type :"array", title:"Orders", of: [{type: "reference", to: [{type: "product"}]}]},
        {name : "address", type : "string", title : "Address"},
        {name : "phone", type : "string", title : "Phone"},
        {name : "city", type : "string", title : "City"},
        {name : "state", type : "string", title : "State"},
        {name : "pincode", type : "string", title : "Pincode"},
        {name : "country", type : "string", title : "Country"},
        {name : "image", type : "string", title : "Image"}
    ]
}