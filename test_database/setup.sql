DROP TABLE IF EXISTS location CASCADE;

DROP TABLE IF EXISTS lending CASCADE;

DROP TABLE IF EXISTS borrower CASCADE;

DROP TABLE IF EXISTS staff CASCADE;

DROP TABLE IF EXISTS tool CASCADE;

DROP TABLE IF EXISTS token CASCADE;

CREATE TABLE location(
    location_id INTEGER NOT NULL,
    post_code VARCHAR(255) NOT NULL,
    street_address VARCHAR(255) NOT NULL,
    PRIMARY KEY (location_id)
);

CREATE TABLE tool(
    tool_id INTEGER GENERATED ALWAYS AS IDENTITY,
    location_id INTEGER NOT NULL,
    tool_name VARCHAR(255) NOT NULL,
    price_per_day INTEGER NOT NULL,
    description TEXT NOT NULL,
    image_URL VARCHAR(255) NOT NULL,
    status TEXT NOT NULL,
    PRIMARY KEY(tool_id),
    FOREIGN KEY (location_id) REFERENCES location(location_id)
);

CREATE TABLE borrower(
    borrower_id INTEGER GENERATED ALWAYS AS IDENTITY,
    email_address VARCHAR(255) NOT NULL,
    name TEXT NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    PRIMARY KEY(borrower_id)
);

CREATE TABLE lending(
    lending_id INTEGER GENERATED ALWAYS AS IDENTITY,
    borrower_id INTEGER NOT NULL,
    tool_id INTEGER NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    active BOOLEAN NOT NULL,
    PRIMARY KEY(lending_id),
    FOREIGN KEY (tool_id) REFERENCES tool(tool_id),
    FOREIGN KEY (borrower_id) REFERENCES borrower(borrower_id)
);

CREATE TABLE staff(
    staff_password VARCHAR(255) NOT NULL,
    staff_username VARCHAR(255) NOT NULL,
    staff_id INTEGER GENERATED ALWAYS AS IDENTITY,
    PRIMARY KEY(staff_id)
);

CREATE TABLE token(
    staff_id INTEGER NOT NULL,
    token VARCHAR(255) NOT NULL,
    token_id INTEGER GENERATED ALWAYS AS IDENTITY,
    PRIMARY KEY(token_id),
    FOREIGN KEY (staff_id) REFERENCES staff(staff_id)
);