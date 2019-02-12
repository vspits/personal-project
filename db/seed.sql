CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL UNIQUE,
    product_image TEXT,
    product_price INTEGER NOT NULL,
    product_description TEXT,
    product_category INTEGER REFERENCES product_categories (category_id)
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
    order_id INTEGER REFERENCES order_items (order_id),
    product_id INTEGER REFERENCES products (product_id),
    quantity INTEGER,
    order_price INTEGER
);

CREATE TABLE order_items (
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id),
    total_price INTEGER,
    order_status TEXT
);

CREATE TABLE product_categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);
