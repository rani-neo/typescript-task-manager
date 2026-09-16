import { createServer } from "node:http";

const server = createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TypeScript Task Manager</title>
      </head>

      <body>
        <h1>TypeScript Task Management System</h1>

        <p>
          Application successfully deployed with TypeScript and Node.js.
        </p>

        <h2>Project Features</h2>

        <ul>
          <li>User management</li>
          <li>Manager inheritance</li>
          <li>Task creation</li>
          <li>Task assignment</li>
          <li>Task status management</li>
          <li>Priority filtering</li>
          <li>Type-safe API responses</li>
        </ul>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});