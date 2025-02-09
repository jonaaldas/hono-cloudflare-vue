import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono Cloudflare!");
});

app.get("/api/hey", (c) => {
  return c.json({ message: "Hello from Hono Cloudflare!" });
});

export default app;
