<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This project runs Next.js 15.3.8 with the App Router. Breaking changes to watch for
include `params` and `searchParams` being Promises that must be awaited in pages.

This version does **not** ship bundled docs — `node_modules/next/dist/docs/` does not
exist. Read the type definitions under `node_modules/next/` and the online docs at
https://nextjs.org/docs before writing code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
