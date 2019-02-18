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
    password TEXT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    isAdmin BOOLEAN NOT NULL DEFAULT FALSE;
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (user_id),
    checked_out BOOLEAN NOT NULL DEFAULT FALSE,
    total_price INTEGER
);

CREATE TABLE order_items (
    item_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders (order_id),
    product_id INTEGER REFERENCES products (product_id),
    quantity INTEGER
);

CREATE TABLE product_categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);


-- -- -- HARDCODING PRODUCTS -- -- --
insert into products (
    product_name,
    product_image,
    product_price,
    product_description,
    product_category
) values (
    'Malachite',
    'https://www.pngarts.com/files/2/Malachite-PNG-Photo.png',
    3,
    'Malachite is a stone of balance, abundance, manifestation and intention.  Malachite absorbs energy and draws emotions to the surface.  It clears and activates all Chakras, and is especially helpful in the stimulation of the Heart and Throat Chakras.  An extremely powerful metaphysical stone, Malachite is often called the “stone of transformation” and is used for deep energy cleaning, bringing healing and positive transformation to the wearer.  For this reason, many metaphysicians recommend using Malachite in small doses.',
    3
);

insert into products (
    product_name,
    product_image,
    product_price,
    product_description,
    product_category
) values (
    'Jade',
    'http://adagioholistic.com/wp-content/uploads/2017/02/Jade-Egg.png',
    2,
    'In the scope of the wider universe, Jade is part of the green color ray, the most lush and verdant shade of green, a color that reflects the pristine vegetation of the tropics. Similar to plants and photosynthesis, the Jade crystal properties harness the miracle of light that provides food for plants and their luscious gift of oxygen-rich greenery. The vibrant green variations of Jade are a symbol of growth and vitality, which makes it a stone that stands for wealth and longevity. And its not all about the Benjamins, because when Jade instills prosperity in every aspect of your life, you lead a richer, more fulfilling existence. After all, money can only buy so much happiness. The rest comes from within. So get intouch with the Jade crystal stone meaning and go deep.',
    3
);

insert into products (
    product_name,
    product_image,
    product_price,
    product_description,
    product_category
) values (
    'Citrine',
    'http://cdn.shopify.com/s/files/1/0658/9167/products/citrine_grande.png?v=1537897296',
    3,
    'Natural Citrine does not hold or accumulate negative energy, but rather transmutes, dissipates, and grounds it, making it extremely protective for the environment. It works out problems on both the physical and subtle levels, transforming negative thoughts and feelings into positive ones. It is one of only two crystals on Earth that never needs to be cleared or cleansed.',
    1
);

insert into products (
    product_name,
    product_image,
    product_price,
    product_description,
    product_category
) values (
    'Kyanite',
    'https://cdn.shopify.com/s/files/1/1420/3210/files/kyanite_medium.png?5260682315663007968',
    2,
    'Kyanite is one of the two minerals on the planet that neither accumulates nor retains negative energy, and therefore never needs cleansing. Kyanites energy is unlimited in application, making it an excellent stone for metaphysical purposes, and it may be used for cleansing and clearing other crystals.',
    1
);

insert into products (
    product_name,
    product_image,
    product_price,
    product_description,
    product_category
) values (
    'Amethyst',
    'https://i.pinimg.com/originals/df/f2/6b/dff26bacc80ff0edc8b013fa9c10a94a.png',
    3,
    'Amethyst is the birthstone for February, and known as the Zodiac stone for pisces. It is also linked to the element of Wind. This element is believed to activate the mind, and assist in clairvoyance and intuition. It is the ideal stone for meditation that seeks to discover the reason for certain behaviors or actions, both on the part of oneself, or another. Whether you are looking to meditate for relaxation, abundance, protection or communication, a good mantra is: I trust myself, I see what I need and it will come to me.',
    2
);

insert into products (
    product_name,
    product_image,
    product_price,
    product_description,
    product_category
) values (
    'Rose Quartz',
    'http://stellarium.bold-themes.com/dark/wp-content/uploads/sites/3/2013/06/products_03.png',
    3,
    'Though it’s thought of as the stone of love, it’s not just romantic love that rose quartz crystal embodies. The rose quartz stone meaning is one of unconditional love. The way it facilitates love entering your life is through it’s ability to bring your consciousness to a higher level. Helping you to forgive, understand and see fights or situations from a different perspective, rose quartz healing properties will imbue you with the wisdom to deepen your connection with your partner. In that same way, rose quartz properties provide gentle energy that assists you in recognizing your own need for compassion. It allows you to see that you deserve forgiveness and understanding from yourself. Associated with the element of water, rose quartz healing properties are naturally fluid. They wash out toxic energies and emotions that you have trapped inside of you.',
    2
);