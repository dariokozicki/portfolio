---
title: Incremental modernization
description: A rewrite is rarely a single decision. It is a long interval in which ownership has to move without losing the ability to return.
publishedAt: 2026-05-06
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

<div data-sketch-anchor="ownership"></div>

## What I would establish first

- A stable interface around the behavior you intend to move.
- One narrow slice of traffic or responsibility, rather than a horizontal layer of the entire system.
- Observability that compares the old and new paths before the new one decides the response.
- A rollback that is operationally boring, not a plan someone has to improvise during an incident.

## A V1 is allowed to be incomplete

One early extraction was a reports service. The first version was deliberately small: enough of a boundary to deploy and change it independently, but not an attempt to settle every question about shared data, ownership, or the shape of the services that would come after it.

It had shortcuts. Some assumptions were still inherited from the existing application, and the interface was only as general as the reporting use case required. That was not ideal in the abstract, but it was a reasonable place to start. The useful part was being clear about which decisions were temporary instead of treating the first version as an architecture we had to defend forever.

As more services appeared, those shortcuts became visible in a different way. A question that had been harmless for one consumer—where a piece of data came from, which system was allowed to shape it, whether a query belonged in the new service or the old one—became a coordination problem. At that point, the work was not to make the original V1 look prescient. It was to write down the assumptions, decide what needed a proper contract, and make a plan for the next boundary without stopping everything else.

That is the version of incremental modernization I trust: a small useful change, an honest account of its limits, and enough intention to improve it when the system gives you a reason to.

<div data-sketch-anchor="dependencies"></div>

## Conclusion

A migration can feel slow when you measure it in repositories, services, or files moved. That is usually the wrong unit. The work is moving a responsibility without losing the ability to explain it, operate it, or back out when the new version behaves differently than expected.

The reports service did not solve the whole system, and it was not meant to. It gave us one place to learn from. From there, the next changes could be based on real friction rather than a diagram of how the final architecture was supposed to look. That is more modest than a rewrite plan, but I think it has a better chance of surviving contact with production.
