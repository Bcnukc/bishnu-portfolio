import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("out");
const port = Number(process.env.PORT || 3000);
const types = { ".html": "text/html; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".png": "image/png", ".woff2": "font/woff2", ".pdf": "application/pdf", ".ico": "image/x-icon" };
createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) { response.writeHead(405); response.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const path = resolve(root, "." + pathname);
    if (path !== root && !path.startsWith(root + sep)) { response.writeHead(403); response.end(); return; }
    const candidates = [path, path + ".html", resolve(path, "index.html")];
    let found;
    for (const candidate of candidates) {
      if (await stat(candidate).then(s => s.isFile()).catch(() => false)) { found = candidate; break; }
    }
    const body = await readFile(found || resolve(root, "404.html"));
    response.writeHead(found ? 200 : 404, { "Content-Type": types[extname(found || ".html")] || "application/octet-stream" });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch { response.writeHead(400); response.end("Bad request"); }
}).listen(port, "127.0.0.1", () => process.stdout.write("Portfolio: http://127.0.0.1:" + port + "\n"));
