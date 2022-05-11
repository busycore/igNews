import { Client } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNA_SERVER_SECRET,
  domain: "db.us.fauna.com",
});
