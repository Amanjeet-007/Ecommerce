const Data = {
    "categories": [
      {
        "id": 1,
        "name": "Electronics",
        "image":"https://www.thenoiseuk.com/wp-content/uploads/2021/10/Consumer-Electronics-Appliance_blog-1024x701.jpeg",
        "description": "Gadgets, devices, and accessories",
        "Link":"/electronics"
      
      },
      {
        "id": 2,
        "name": "Clothing",
        "image":"https://www.have-clothes-will-travel.com/wp-content/uploads/2019/05/qtq80-7bsDUb.jpeg",
        "description": "Fashionable and comfortable apparel",
        "Link":"/cloths"
      },
      {
        "id": 3,
        "name": "Home & Kitchen",
        "image":"https://reviewed-com-res.cloudinary.com/image/fetch/s--m06pqtVp--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1568033796060/Appliance.png",
        "description": "Appliances, furniture, and decor items",
        "Link":"/home&kitchen"
      }
    ],
    "products": [
      {
        "id": 101,
        "name": "Smartphone",
        "category_id": 1,
        "price": 699.99,
        "description": "Latest 5G-enabled smartphone with 128GB storage",
        "stock": 50,
        "rating": 4.5
      },
      {
        "id": 102,
        "name": "Laptop",
        "category_id": 1,
        "price": 1199.99,
        "description": "High-performance laptop with 16GB RAM and 512GB SSD",
        "stock": 30,
        "rating": 4.7
      },
      {
        "id": 201,
        "name": "Men's T-Shirt",
        "category_id": 2,
        "price": 19.99,
        "description": "100% cotton t-shirt in various sizes",
        "stock": 100,
        "rating": 4.2
      },
      {
        "id": 202,
        "name": "Women's Jeans",
        "category_id": 2,
        "price": 49.99,
        "description": "Skinny-fit denim jeans available in multiple colors",
        "stock": 70,
        "rating": 4.4
      },
      {
        "id": 301,
        "name": "Microwave Oven",
        "category_id": 3,
        "price": 89.99,
        "description": "700W microwave with multiple cooking presets",
        "stock": 25,
        "rating": 4.3
      },
      {
        "id": 302,
        "name": "Sofa",
        "category_id": 3,
        "price": 299.99,
        "description": "Comfortable 3-seater sofa with durable fabric",
        "stock": 10,
        "rating": 4.6
      }
    ],
    "users": [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "hashedpassword123",
        "address": "123 Main St, Cityville",
        "order_history": [1]
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "password": "hashedpassword456",
        "address": "456 Oak Ave, Townsville",
        "order_history": [2]
      }
    ],
    "orders": [
      {
        "id": 1,
        "user_id": 1,
        "product_ids": [101, 201],
        "total_price": 719.98,
        "status": "Delivered",
        "order_date": "2025-01-10"
      },
      {
        "id": 2,
        "user_id": 2,
        "product_ids": [202, 301],
        "total_price": 139.98,
        "status": "Shipped",
        "order_date": "2025-01-11"
      }
    ]
  }
  export default Data