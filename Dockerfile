
ARG NODE_IMAGE=oven/bun:1-alpine

FROM --platform=linux/amd64 $NODE_IMAGE AS base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp
COPY package.json bun.lockb /temp/
RUN cd /temp && bun install --frozen-lockfile

FROM install AS prerelease

COPY --from=install /temp/node_modules node_modules
COPY . .
ENV NODE_ENV=production
RUN bun run build
RUN rm -rf .output/server/node_modules
RUN bun install --cwd .output/server/

FROM base AS release
COPY --chown=bun:bun --from=prerelease /usr/src/app/.output .

USER bun
ENV HOST 0.0.0.0
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD bun -e "fetch('http://localhost:3000').then(r => r.ok ? process.exit(0) : process.exit(1))"

ENTRYPOINT [ "bun", "run", "server/index.mjs" ]
