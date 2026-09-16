---
title: High-traffic platforms
description: Large events do not just bring more traffic. They change the shape of the system's failure modes.
publishedAt: 2026-03-18
topics:
  - Scale
  - Reliability
  - Systems
draft: false
---

![A dense field of small tokens passing through offset black gates, with one red critical path preserved.](./assets/high-traffic-platforms-v2.png)

Most systems look healthy on an average day. A campaign launch or large commercial event is different because the traffic arrives with shared intent: everyone is trying to see, reserve, pay, or confirm the same thing at roughly the same time.

That does not only increase request volume. It changes the interactions inside the system. A slow dependency becomes a pile of waiting callers. A retry policy turns a short failure into extra load. Work that was harmless in a normal request path starts competing with the part the user actually came for.

## Scale changes the shape of failure

I think the useful question is less “can we handle N requests?” and more “what work will we still insist on doing synchronously when the system is under pressure?” That is where queues, caching, limits, idempotency, and graceful degradation stop being architecture vocabulary and become product decisions.

The sketch below is a deliberately small model of that question. Pick an event, add or remove protections, and watch where the pressure moves. It is not a capacity calculator; the values are not production measurements. It is a way to make the request path concrete enough to argue about it.

## Things I would look for before an event

- The smallest path that still gives a user a useful outcome.
- Dependencies that can be deferred, skipped, or made asynchronous.
- Retry behavior, especially where a timeout can make the original spike wider.
- A way to reject or slow work deliberately instead of failing accidentally.

## When a deal is not just a card on a page

I worked on the deals area at MercadoLibre when I was much more junior. I was not the person setting the capacity strategy or deciding how the platform would behave during an incident. But it was hard to miss that campaign traffic was not normal marketplace traffic turned up a little. A deal concentrates attention: the same offer, the same few minutes, and a much smaller set of paths that people expect to work.

That changes the meaning of a seemingly simple surface. A promotion card is connected to pricing, availability, eligibility, and whatever happens after someone decides to continue. Most of that complexity is invisible when the page is quiet. During a campaign, the question becomes which parts need to be exactly right, which can arrive later, and which should fail in a way that does not make the rest of the system worse.

I did not have the vocabulary for all of that at the time. Looking back, that is why the usual answers—add more capacity, put a cache in front of it—are incomplete. They may be part of the answer, but only after deciding what the system is trying to protect.

<div data-sketch-anchor="traffic-surge"></div>

## Conclusion

The unglamorous work happens before an event: trace the request path, find the dependencies that can amplify a problem, choose what can be deferred, and make sure there is a way to reduce load without improvising under pressure.

The goal is not that every request receives the same experience under every condition. It is that the system makes its compromises deliberately. A stale detail, a delayed report, or a clear “try again” can be preferable to a slow collapse that leaves nobody sure what still works.
