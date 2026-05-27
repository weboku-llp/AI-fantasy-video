# AI Fantasy Video

Subscription-based fictional AI fantasy video platform scaffold in pnpm monorepo style.

## Safety and Compliance
- Fictional synthetic profiles only.
- No real-person or celebrity likeness support.
- No deepfake, minor-looking, or non-consensual content support.
- Age gate and content policy pages are included.

## Local Run
1. pnpm install
2. docker compose -f infra/docker-compose.yml up -d
3. Copy env examples from env/*/.env.example into local env files
4. pnpm db:generate
5. pnpm db:migrate
6. pnpm seed
7. Run dev scripts for web/admin/api/worker/socket
