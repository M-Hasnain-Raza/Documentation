export default {
    name:"order",
    title:"Order",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string",
            
        },
        {
            name:"email",
            title:"Email",
            type:"string",
            
        },
        {
            name:"phone",
            title:"Phone",
            type:"string",
            
        },
        {
            name:"address",
            title:"Address",
            type:"string",
            
        },
        {
            name:"products",
            title:"Products",
            type:"array",
            of:[{type:"orderProduct"}]
        },
        {
            name:"total",
            title:"Total",
            type:"number",
            
        },
        {
            name:"status",
            title:"Status",
            type:"string",
            
        },
        {
            name:"method",
            title:"Method",
            type:"number",
            
        },
       
    ]
}