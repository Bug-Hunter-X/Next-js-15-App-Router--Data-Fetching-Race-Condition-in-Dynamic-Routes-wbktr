# Next.js 15 App Router Data Fetching Issue

This repository demonstrates a potential race condition when fetching data in dynamic routes within the Next.js 15 `app` directory.  The problem arises when client-side data fetching relies on route parameters that might not be fully available during the initial render.

## Bug Description

The `bug.js` file shows a simple example where data fetching depends on a dynamic route parameter (`id`).  Due to the asynchronous nature of fetching and rendering, there's a chance the component renders before the data is fully fetched, leading to a display of incomplete or stale data.

## Solution

The `bugSolution.js` file demonstrates a solution using suspense and loading states to ensure the component waits for the data to arrive before rendering. This prevents unexpected behavior due to the race condition.   The key is using `use` for data fetching which handles the asynchronous process gracefully.  Alternatively, ensuring `getServerSideProps` or `getStaticProps` correctly resolve the route parameters can also improve robustness. 

## Setup

1.  Clone this repository.
2.  Run `npm install`.
3.  Run `npm run dev`.

Navigate to `/product/[id]` to test the bug and the solution.