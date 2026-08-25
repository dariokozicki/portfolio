---
title: Incremental modernization
description: A rewrite is rarely a single decision. It is a long interval in which ownership has to move without losing the ability to return.
publishedAt: 2026-08-25
topics:
  - Legacy systems
  - Architecture
  - Risk
draft: false
---

![A black paper weave kept under tension while pale strips are threaded in one by one, marked by a small red stitch.](./assets/incremental-modernization-v2.png)

A legacy migration is usually described as a direction: old system to new system. That makes it look simpler than it is. In practice, there is a long and uncomfortable middle where both exist, behavior is still being discovered, and somebody needs to know which one is allowed to decide the outcome.

The dangerous version of a rewrite is not just expensive. It is the one that makes every unknown appear at the same time: data assumptions, edge cases, operational habits, integrations that were never documented because they were only visible in production.

## A migration is an interval, not an event

The aim is not to move as many files as possible. It is to move one bounded responsibility at a time, make the ownership explicit, and keep a return path while the new behavior earns trust.

The sketch below is the model I find useful when thinking through a change. It asks the questions that matter before a percentage is moved: who owns this request, where is the source of truth, and what exactly happens if the new path is wrong?

## What I would establish first

- A stable interface around the behavior you intend to move.
- One narrow slice of traffic or responsibility, rather than a horizontal layer of the entire system.
- Observability that compares the old and new paths before the new one decides the response.
- A rollback that is operationally boring, not a plan someone has to improvise during an incident.

The rest of this article is still a draft. I want to write it from actual migration decisions rather than turn it into advice that is technically correct but too clean to be useful.
