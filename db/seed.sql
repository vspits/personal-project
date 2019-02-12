CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL UNIQUE,
    product_image TEXT,
    product_price INTEGER NOT NULL,
    product_description TEXT,
    product_category VARCHAR(100) NOT NULL
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL UNIQUE,
    password VARCHAR(25) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    isAdmin VARCHAR(25) NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_id INTEGER,
    product_id INTEGER REFERENCES products (product_id),
    quantity INTEGER,
    order_price INTEGER
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders (order_id),
    user_id INTEGER REFERENCES users (user_id),
    total_price INTEGER,
    order_status TEXT
);
