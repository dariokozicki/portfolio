---
title: Integrations are product surfaces
description: External systems, retries, and edge cases are part of the product—not plumbing around it.
publishedAt: 2026-08-12
topics: [Integrations, APIs, Reliability]
draft: true
---

# Integrations are product surfaces

<!-- Begin with a real integration failure mode: a delayed response, duplicate
delivery, partial sync, schema change, or an unclear ownership boundary. -->

An integration is where two systems disagree about time, state, and responsibility. That makes it part of the product experience, even when no user sees the request directly.

## Design for partial truth

<!-- Cover retries, idempotency, reconciliation, and the difference between
"accepted" and "completed". -->

## Make failure observable

<!-- What should be visible to an operator? What can be retried safely? What
requires a human decision? -->

## Treat contracts as living dependencies

<!-- Discuss API evolution, schema changes, rate limits, and test environments. -->

## The operational path is the product path

<!-- Finish with how a team earns trust in an integration over time. -->
