insert into products (
    product_name,
    product_image,
    product_price,
    product_description,
    product_category
) values (
    ${product_name},
    ${product_image},
    ${product_price}
    ${product_description},
    ${product_category}
) returning *;