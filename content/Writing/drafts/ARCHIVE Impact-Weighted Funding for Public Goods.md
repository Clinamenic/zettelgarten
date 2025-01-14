---
author: Spencer Saar Cavanaugh
authorURL: https://www.clinamenic.com
title:
subtitle:
date:
license:
arweaveHash:
publish: true
tags:
  - personal-discourse/draft
---

# Introduction

There remains an active spirit of experimentation with regards to the usage of smart contracts for funding public goods. Thanks to the open and "permissionless" nature of the underlying peer-to-peer financial settlement technology, individuals and institutions can economically engage with one another freely - albeit at the cost of technical complexity.

This frontier has seen a wide array of innovation so far, both theoretical and applied. Mechanisms like Hypercerts, Grants Stack, and Grantee Accountability Protocol have enabled systems involving quadratic funding, impact attestation, and more. While much of this is unfolding in response to perceived inadequacies in the traditional nonprofit world, many of these new systems still involve problems of their own, such as Keynesian Beauty Contests and technical literacy barriers to participation.

What follows here is not a prescriptive solution to these problems, but a number of ideas to consider in our collective search for such solutions. If we would like to systemically and efficiently expand and facilitate funding for public goods, there remains a good deal of technical solutions and social practices to develop. This article will focus on the former.

# A Cadence of Impact Feedback

As I explored in a previous piece about progressive public goods funding, there remains a strong argument in favor of cultivating and sustaining a dialogue between people making impact and people funding impact. The people doing impactful work may wish to focus on said work, it is also in their interest to broadcast what they are doing, as a signal to prospective funding sources. Given the spirit of transparency around philanthropy, especially in the open-source public goods movement, such broadcasts arguably ought to be public.

As we consider where this dialogue is to take place, a number of things are worth taking into consideration. Here we will focus on the accessibility and the preservability of this dialogue, with attestations being the proposed infrastructure. Attestations are statements which can be published to the blockchain, creating a public social knowledge graph which inherits in the financial settlement capabilities of its underlying technology. In other words, its like a social network where people can make statements, reference each other's statements, and send money to the authors of other statements. All of this is possible without any gatekeeper institutions.

## Attestation Accessibility and Preservability

The primary mechanisms facilitating the creation of these statements are not especially accessible to the general public, and thats largely because it was designed as infrastructure for other platforms to build on, platforms more streamlined for general users. This constitutes a paradigm of social media and publishing which many people are not used to, wherein the creation and publishing of the content itself is uncensorable, but the surfacing of that content to particular social platforms depends on the censorship policies of those platforms.

In a way, it is arguably good that the fundamental technology is not more accessible, because that would allow content to proliferate in uncensorable manners. In this paradigm, nobody can censor what content you create, but particular sites can censor what shows up for their users.

With regards to attestations, the infrastructure is there to facilitate these dialogues, but the platforms for people to public attestations still generally are not accessible for non-technical users. This remains an active front for software developers in this industry: to render the technology more accessible without sacrificing its core values of censorship-resistance and silo-resistance.

Given that attestations can be stored onchain, or offchain on IPFS, they make a compelling choice with regards to preservability. The primary risks, in terms of choosing where these dialogues are to be had, are those having to do with loss of content owing to undue censorship or deprecation. Certain alternatives may be more accessible and/or more cost-efficient, but so long as they involve centrally-maintained storage solutions which depend on the financial sustainability of a given company, the risks of censorship and deprecation arguably outweigh these benefits.

Here it is worth remembering that the effort at hand, namely the renovation of the systems by which we develop and fund certain public goods, is a long-term effort, spanning many business cycles. Distributed networks, with proper financial incentives, arguably make a more prudent choice as storage solutions given both the timeframe of such an effort, and given the nature of the value being cultivated through public goods. Finally, given who would be using such a system, we may discern another compelling reason to opt for such distributed solutions.

## Grassroots and Expert Impact Evaluation

Across the breadth of social and environmental impact projects, and any public goods generated therein, exists justifications for community-driven and for expert-driven evaluation regimes. While these two approaches may be construed as conflicting, they are actually compatible, even complementary, within the context of onchain attestations. Subject matter experts and impact evaluation institutions may bring a necessary depth to impact assessments, but ultimately the impacted community itself is the most grounded judge of such things.

An example may help illustrate this system. Alice is leading an organization, WuGwei, to install certain equipment and facilities in a given locale. They do the work, document the work, and make public statements, via attestations, regarding the completion of the work. These attestations are published onchain, from wugwei.eth, the official account of Alice's organization. Now, anyone can browse the knowledge graph of attestations and see that her organization made these statements about the work they did.

Here arises one challenge: the verification of the statements. Using attestations, anyone can make any statement they want, without the need to get approval before publishing. There is a need to establish trust within a trustless regime, and that is where the social dimension comes into play. With certain protocols like Ethereum Name Service, which maps human-readable domain names to cumbersome machine-readable account addresses, users can get a better sense of the identities behind these statements. They can see that wugwei.eth published a statement containing detailed accounts of the work completed.
