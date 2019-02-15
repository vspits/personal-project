insert into users (
    email,
    password,
    username,
    isAdmin
) values (
    ${email},
    ${password},
    ${username},
    false
)
returning email, username;