//1 Array mit zwei Objekten 
var myPlants=[{
    type:"flowers",
    list:["rose","tulip","dandelion"]
},
{
    type: "trees",
    list:[
       "fir",
       "pine",
       "birch"
    ]
}
];

console.log("Stringifyd: "+JSON.stringify(myPlants));
console.log("non stringifyd: "+myPlants);