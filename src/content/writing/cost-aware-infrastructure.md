---
title: Cost-aware infrastructure
description: Cost is a system-design concern, not a monthly surprise.
publishedAt: 2026-08-25
topics:
  - Cloud
  - AWS
  - Systems
draft: false
---

![A suspended field of balanced platforms, weights, and cables.](./assets/cost-aware-infrastructure.png)


[AWS Config](https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html). We had $1200/month worth of that service and turned into $200 by changing from continuous recording to daily, after verifying requirements. That's 5 minutes worth of effort. You might spend a few months building the credibility to convince people to pull the switch.

Money has become more important to most of enterprise. They're looking for ways to cut their expenses, and that's where initiatives like the [FinOps Foundation](https://www.finops.org/framework/) come in. I looked into it and found that they're pretty varied in specialty: there's engineers, finance people, managers, and all sorts in the middle. I think the engineers offer a unique perspective: **You can link the cost to the actual resources you use, and understand how to change them to lower costs.**

So, having spent most of this year battling costs at my current job, here's a list of tips that I think are useful if you find yourself with the task of making your business more sustainable:

## Explore as much as you can

To give accurate recommendations, you need understanding. If you just recently joined the organization, you might find that there are thousands of resources in the company's vendor (AWS, Azure, GCP). Some will be from active projects; some will be leftovers from coworkers that have left before you, (*in some cases turned on and burning cash!*), some will be red herrings that look expensive but aren't. You need to assess them as well as the current project, identify what's currently being used and how, and allow yourself to discover things as time goes on.

Talk to stakeholders who can get you up to speed and give you access. Until then, look for invoices in Slack channels. Anything you can do to say 'hey, I'm interested in solving this for you' will usually be received with a mix of skepticism and receptiveness.

## Use AI as an exploratory tool

Not only is it good for asking for the vendor's billing specifics, if you manage to get your hands on a read-only credential for your agent of choice (say, Codex), you can tell it to use the CLI and investigate certain services like S3, EC2, RDS, etc., and try to correlate cost drivers, spikes on certain dates, names that have a shared meaning: all of these help you understand the underlying infrastructure better than an outdated diagram, and you can discover decisions and assumptions through what costs the company money.

Cost Explorer is also a very good tool for the day to day, but you'll find it limiting as for correlation. Same goes for the "FinOps Agent" that was recently released from AWS, it doesn't have access to anything outside CUR.

## Understand the underlying services

This can be somewhat obvious, but to give an actual recommendation you need two things:
- The context (why some service is being used and in what way, what purpose does it have, is it there for compliance or for operational support)
- The pricing model (what does it scale off of and how it relates to the context)

You can look for your company's docs (or experts) for the first, and your vendor's documentation for the second. You can go to Cost Explorer, filter the service and group by Usage Type to get a hint out of what's hurting said service.
Don't rush to voice your initial assessment, as you're still getting acquainted with the system.

## Know your audience

Engineers will usually care about the technical details. Talk to them about actual AWS services and their usage, and good practices that the vendor recommends.

Business people (CEOs, managers, CFOs, Sales people) will usually care about unit economics, allocating spend to projects, cost per tenant, etc.

Talk to each one about what **they** care about, not what *you* care about. Your role can be a bridge between business and product, and that gives you leverage to keep pushing for change within your organization. Understand that sometimes their priorities will be on the accrual side (new features, more sales) and not on the spend side, and that you'll need influence to make things happen.

## Prioritize

Generate a table mapping low hanging fruit, medium tasks, and long term objectives. Identify their efforts. For example: 
- Config,  CloudWatch, and 'niche' services are usually short term bandaids
- Autoscaling Groups, S3, instance types, and some queries are medium tasks
- EC2, ECS, RDS are usually long term objectives
Usually the more the current solution depends on the service, the hardest it is to change organizationally. Some teams will not care that their solution costs three times as much as it should.

## Use Cost Allocation Tags

If you have many applications, through using microservices, or a workflow-segregated monolith, CQRS, or something else, you'll find it useful to tag them so management has a more insightful, business-related cost rather than just "EC2" or "ECS" or "Lambda". Tag it as you would like to present it, for example: environment, service, department, etc. This will have to be activated by the Owner Account in the case of AWS.

The FinOps Framework's [allocation guidance](https://framework.finops.org/framework/capabilities/allocation/) is useful if you're figuring out how much of that structure you need.

## If you're an engineer: Study AWS patterns

There are many ways to skin a cat, but not all of them are correct. Look for unoptimized queries, synchronous workflows where there shouldn't be, huge instance types, high transfer costs, compliance assumptions. You'll find that there's usually a hidden assumption like 'compliance makes us do this'. GDPR and HIPAA, for example, don’t prescribe a single AWS configuration; you still have to map the requirement to the control.

Same goes for pre-signed URLs, dead-letter queues, transactional outbox, S3 → event → Lambda. You're not only reducing cost, you're helping the company improve its scalability while you do it. Take an opportunity to make recommendations beyond "Buy reserved instances". In fact, in most cases doing that flips the incentives towards more spend, because otherwise you're 'losing' money by not using the instances.

## Conclusion

Lowering costs is not an easy task. It requires technical knowledge, finance knowledge, and **influence**. You're not achieving success without all three, but it is well worth the effort for the business and for your career development.
