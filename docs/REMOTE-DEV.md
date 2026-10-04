# Remote dev with Caddy over Tailscale

The dev machine (`ubu`) is reachable on a Tailscale IP. A wildcard DNS record
`*.ubu.a13x.space` points at that IP, and Caddy routes each subdomain to a local dev server.

1. Install Caddy: `sudo apt install -y caddy`
2. Copy `deploy/Caddyfile` to `/etc/caddy/Caddyfile` and run `sudo systemctl reload caddy`.
3. Keep `allowedDevOrigins: ["*.ubu.a13x.space"]` in `next.config.ts`.
4. Run `pnpm dev -p 3001` and open `http://next-app.ubu.a13x.space`.

Subdomain = project folder name. Each project gets its own port and its own block in the Caddyfile.

Plain HTTP is fine here: traffic stays inside the Tailnet (WireGuard). HTTPS would need a DNS-01
certificate via the `caddy-dns/vercel` plugin and a Vercel API token (never commit the token).
