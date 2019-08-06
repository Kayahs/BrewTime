exports.up = pgm => {
  //1. Breweries Table
  pgm.sql(`
    CREATE TABLE "brewtime"."breweries" (
      "id" SERIAL PRIMARY KEY,
      "name" TEXT UNIQUE NOT NULL,
      "description" TEXT NOT NULL
    );
  `),
    //2. Locations Table
    pgm.sql(`
    CREATE TABLE "brewtime"."locations" (
      "id" SERIAL PRIMARY KEY,
      "address" TEXT NOT NULL,
      "description" TEXT,
      "type" TEXT NOT NULL,
      "brewery_id" INTEGER REFERENCES breweries(id) NOT NULL
    );
  `),
    //3. Bookings Table
    pgm.sql(`
      CREATE TABLE "brewtime"."bookings" (
        "id" SERIAL PRIMARY KEY,
        "title" TEXT NOT NULL,
        "description" TEXT NOT NULL,
        "location" INTEGER REFERENCES locations(id) NOT NULL,
        "guide" TEXT NOT NULL,
        "time" TEXT NOT NULL,
        "brewery_id" INTEGER REFERENCES breweries(id)
      );
  `),
    //4. Images Table
    pgm.sql(`
      CREATE TABLE "brewtime"."images" (
        "id" SERIAL PRIMARY KEY,
        "uri" TEXT NOT NULL,
        "description" TEXT NOT NULL,
        "width" INTEGER NOT NULL,
        "height" INTEGER NOT NULL,
        "brewery_id" INTEGER REFERENCES breweries(id)
      );
  `),
    //5. Products Table
    pgm.sql(`
      CREATE TABLE "brewtime"."products" (
        "id" SERIAL PRIMARY KEY,
        "name" TEXT NOT NULL,
        "description" TEXT NOT NULL,
        "image" TEXT NOT NULL,
        "price" INTEGER NOT NULL,
        "brewery_id" INTEGER REFERENCES breweries(id)
      );
  `)
}
