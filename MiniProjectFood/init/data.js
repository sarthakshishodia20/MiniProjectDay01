// ye hai hmara sample datbase mtlb pura ek data item iss tarah se bnta hai 
let sampleListing = [
    {
        name: "Margherita Pizza",
        price: 250,
        ingredients: "Tomato, Mozzarella, Basil",
        location: "New Delhi",
        DeliveryCharge: 50,
        images: "https://plus.unsplash.com/premium_photo-1674147605295-53b30e11d8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmdoZXJpdGElMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Chicken Biryani",
        price: 300,
        ingredients: "Basmati Rice, Chicken, Spices, Fried Onions",
        location: "Hyderabad",
        DeliveryCharge: 70,
        images: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Penne Alfredo Pasta",
        price: 200,
        ingredients: "Penne Pasta, Alfredo Sauce, Parmesan Cheese",
        location: "Mumbai",
        DeliveryCharge: 60,
        images: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVubmUlMjBBbGZyZWRvJTIwUGFzdGEufGVufDB8fDB8fHww"
    },
    {
        name: "Cheeseburger",
        price: 150,
        ingredients: "Beef Patty, Cheddar Cheese, Lettuce, Tomato, Bun",
        location: "Bangalore",
        DeliveryCharge: 40,
        images: "https://plus.unsplash.com/premium_photo-1684349034700-d3abbaa83ee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlZXNlYnVyZ2VyfGVufDB8fDB8fHww"
    },
    {
        name: "Paneer Butter Masala",
        price: 180,
        ingredients: "Paneer, Butter, Tomato Gravy, Cream",
        location: "Chandigarh",
        DeliveryCharge: 30,
        images: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFuZWVyJTIwQnV0dGVyJTIwTWFzYWxhLnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Tacos",
        price: 140,
        ingredients: "Soft Tortillas, Beef, Lettuce, Cheese, Salsa",
        location: "Pune",
        DeliveryCharge: 25,
        images: "https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFjb3N8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Vegetable Spring Rolls",
        price: 130,
        ingredients: "Spring Roll Wrappers, Mixed Vegetables, Soy Sauce",
        location: "Kolkata",
        DeliveryCharge: 35,
        images: "https://plus.unsplash.com/premium_photo-1664647949482-c0ca452d91f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmVnZXRhYmxlJTIwJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Falafel Wrap",
        price: 120,
        ingredients: "Falafel Balls, Hummus, Vegetables, Pita Bread",
        location: "Delhi",
        DeliveryCharge: 30,
        images: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnaWUlMjB3cmFwfGVufDB8fDB8fHww"
    },
    {
        name: "BBQ Ribs",
        price: 350,
        ingredients: "Pork Ribs, BBQ Sauce, Spices",
        location: "Chennai",
        DeliveryCharge: 80,
        images: "https://plus.unsplash.com/premium_photo-1664478272084-532c1bfebd25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QkJRJTIwUmlicy58ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Stuffed Bell Peppers",
        price: 170,
        ingredients: "Bell Peppers, Rice, Ground Meat, Cheese",
        location: "Jaipur",
        DeliveryCharge: 45,
        images: "https://plus.unsplash.com/premium_photo-1661730329741-b3bf77019b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFjb3N8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Vegetarian Sushi",
        price: 220,
        ingredients: "Sushi Rice, Nori, Avocado, Cucumber, Carrots",
        location: "Bhubaneshwar",
        DeliveryCharge: 50,
        images: "https://plus.unsplash.com/premium_photo-1664647949482-c0ca452d91f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmVnZXRhYmxlJTIwJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D"
    }
];
module.exports={data:sampleListing};