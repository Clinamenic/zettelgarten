---
author: "[[Spencer Saar Cavanaugh]]"
title: Methodological Survey of Onchain Impact Ecosystems
subtitle: Preliminary survey of existing practices and challenges to inform an ontologically integrated distributed impact paradigm.
draft started: 0024-06-28
date published: 
license: CC-BY-SA 4.0
sponsor(s): LexDAO, SuperBenefitDAO
arweave hash: 
publish: true
tags: 
---

## Acknowledgments

The following research was conducted for [LexDAO](https://lexdao.org/) by Spencer Saar Cavanaugh of [Clinamenic LLC](https://www.clinamenic.com/). Funding for this research was provided by LexDAO and SuperBenefitDAO.

I would like to thank the following individuals for their feedback and support: Kyle Smith of LexClinic, rathermercurial of SuperBenefitDAO, Holke Brammer and bitbeckers of Hypercerts, Mahesh Murthy of Karma, Natalie J. Crüe, Monty Merlin of ReFi DAO, Eugene Leventhal of MetaGov, Mashal Waqar of Octant, LauNaMu of Optimism, and Mike Natanzon of Abundance Protocol.

## Abstract

The onchain impact economy, which utilizes open-source blockchain infrastructure to evaluate and fund public goods, has occasioned various methodological breakthroughs which may prove instructive to the traditional philanthropic sector. It has also encountered various challenges familiar to, and runs the risk of repeating some systematic inefficiencies of, traditional philanthropy. Various open-source protocols exist, or are actively being developed, to: administer onchain grant programs; configure and issue onchain certificates of impact; publish claims and attestations to build onchain trust networks; and retroactively fund public goods via protocol-based fiscal systems. These functions are developed as distinct softwares, but with the intention of being combined into multi-functional open-source assemblages for evaluating and funding impact, based largely on the premise that impact is not adequately valued at present, thus resulting in inadequate funding for publicly impactful work. While the infrastructure is being engineered to technologically enable more robust evaluation and funding practices, the actual assessment methodology is also being refined to minimize burdensome procedure and ensure equitable funding arrangements. That is, the *what* and the *how* are being developed in parallel, and ought to learn from the successes and failures of traditional philanthropy where applicable, in what could optimistically be considered an inter-paradigm dialogue, in order to avoid reinventing wheels and recreating systematic inefficiencies. This report is a holistic survey of existing practices and challenges, and a prospectus of methodological considerations to inform the collective stewardship of this promising ecosystem. 

## Section 1 - Introduction

The ecosystem under consideration, referred to as the onchain impact economy, is multi-faceted, interdisciplinary, and rapidly evolving in lockstep with breakthroughs in its underlying technological infrastructure. Due to the promising potential of this technology to improve human coordination at scale, there is an unusual degree of solidarity across this industry, which spans from the simple alignment of values to the more ideological forms of utopianism. 

The effects this potential has on the culture of this industry, including the more philanthropic sector in question, can be beneficial or detrimental, in terms of the actual impact this technology makes. A beneficial aspect of this alignment is that it promotes a communitarian spirit of collaboration across organizational lines, with projects openly promoting each other's donation portals and grant applications, to drive interest in and funding for their respective areas of impact $^1$. A detrimental aspect of this technologically-oriented alignment is the collective propensity to fixate on the engineering-related dimensions of these challenges without adequate feedback from non-technical beneficiaries and stakeholders. This design vacuum tends to create a technological environment which is only accessible to people who are already actively involved, and, moreover, who are able to keep up with the bleeding edge.

For the purposes of this discourse, which is intended for curious newcomers to this industry as well as its more seasoned practitioners, it may help to clearly define some of the more important terms at play, and introduce some of the novel concepts and technologies. It is in this spirit of sensemaking that following introductory section is provided. 

While the overall scope of this survey regards the onchain impact economy at large, consisting of various sub-sectors or domain-specific ecosystems, particular reference will be made throughout the survey to the legal engineering ecosystem in particular, which will be introduced after the section on nomenclature.

### 1.1 - Nomenclature & Semantic Considerations

Because the matters at hand are complex enough without the added confusion of semantic ambiguity, some effort here is made to disambiguate the meaning of the integral terms of this discourse. The following is not necessarily presented as prescriptive, but rather merely as an indication of how these terms are interpreted for our purposes in this survey. If this clarity isn't needed, the reader may wish to skip past the nomenclature section.

#### 'Impact' and 'Outcome'

These terms are meant in the sense articulated by the [Impact Management Norms](https://impactfrontiers.org/norms/), developed by Impact Frontiers:

"Impact is a change in an outcome caused by an organization. An impact can be positive or negative, intended or unintended.

An outcome is the level of well-being experienced by a group of people, or the condition of the natural environment, as a result of an event or action.

Impact management is the process of identifying the positive and negative impacts that an enterprise has on people and the planet, and then reducing the negative and increasing the positive."

#### 'Public Goods' and 'Network Goods'

The term '[public good](https://en.wikipedia.org/wiki/Public_good_(economics))' is meant in its conventional economic sense, referring to a good which is non-rivalrous (meaning it is inexhaustible, so people do not need to compete for it) and non-excludable (meaning it cannot be gatekept or otherwise enclosed according to private interests). Examples of public goods can include physical infrastructure, knowledge, and open-source software, depending on how these things are specifically configured. 

One can understand public goods within the fourfold model of goods, composed of the axes of rivalrousness and excludability, as shown below:

|                   | Excludable                                          | Non-Excludable                                                    |
| ----------------- | --------------------------------------------------- | ----------------------------------------------------------------- |
| **Rivalrous**     | *Private Goods*<br>(food, clothing, parking spaces) | *Common Goods*<br>(fish stocks, timber)                           |
| **Non-Rivalrous** | *Club Goods*<br>(cinemas, software, private parks)  | *Public Goods*<br>(free-to-air television, air, national defense) |

The term 'network good' refers to any good which experiences an increase in value as its adoption or usage levels increase, such as how the value of the telephone grew as the number of people using telephones grew. 

While this network dynamic generally seems non-rivalrous in nature, i.e. it is difficult to conceive of network private goods or network common goods in the sense provided above, one can conceive of how this may apply to non-rivalrous goods. For example, certain open-source software can constitute a public network good insofar as it promotes interoperability and diminishes technical friction as its usage levels increase. An example of a club network good would be membership in a professional society, wherein the value of membership is simultaneously enabled by its exclusion of non-lucrative acquaintances, and expanded by its increasing inclusion of lucrative acquaintances. 

#### 'Platforms' and 'Protocols'

One key distinction at play in these considerations is that between a platform and a protocol. While this distinction deserves a more rigorous treatment than what is provided here, what follows should be sufficient for our purposes. 

Platforms, such as Gmail, are usually apps intended for users to engage with, which may or may not incorporate open-source software or open protocols, and which are usually managed as a product by some central company. Protocols, such as Simple Mail Transfer Protocol (SMTP), exist as communication standards for computer networking, enabling different ways for end users to interact through these networks. 

Most of the time, users engage with these protocols through platforms, i.e. the platform creates a user-friendly environment for people to leverage the underlying capabilities of the protocols. Gmail creates a relatively simple and accessible way for people to use SMTP without requiring them to be a programmer. Broadly speaking, if not for these platforms, only highly technical individuals would be able to use the internet. 

A key aspect of the nascent coordination paradigm under consideration is the potential to couch the actual mechanisms of coordination within the protocol layer, rather then restricting them to the platform level, which usually involves centralized administration by companies with profit-maximizing imperatives which are not always incentivized to maintain digital public infrastructure as such. This engineering constraint is intended to distinguish digital public goods from digital private goods, because while they each need sustainable funding, the manners by which each can be viably funded are different. 

#### 'Digital Public Infrastructure'

The term 'digital public infrastructure' is meant here to refer to the complex of digital public goods comprising the digital public sphere. Here, again, a more rigorous definition is deserved than what is provided, but for our purposes is it sufficient to frame it as such. 

It is also worthwhile to draw attention to a certain analogy between digital public infrastructure and physical public infrastructure, namely manners in which they are systemically funded. It is argued that market dynamics, i.e. private enterprise, lack the economic incentive structures to fund and maintain public infrastructure, seeing as public goods, by virtue of being non-excludable, rule out many of the standard monetization models, such as subscriptions. If subscriptions are ruled out, alternative monetization models need to be established, such as the monetization of user data. 

The major conventional alternative to private funding is, of source, public funding, but seeing as much of the digital public infrastructure under consideration seeks to operate with greater autonomy and plurality than what government subsidization would likely permit, we are faced with a significant challenge regarding sustainable funding, at scale, for digital public infrastructure. These challenges, and potential solutions, will be covered in the later sections of this survey.

#### 'Onchain'

The term 'onchain' refers to any activity on a blockchain, similar to how the term 'online' refers to any activity on the internet. The particulars capacities in which this technology enters into the complex of digital public infrastructure will be covered in the section on selected onchain infrastructure.

### 1.2 - The Legal Engineering Ecosystem

Text here

### 1.3 - Selected Onchain Infrastructure

Text here.

Worth noting here is the manner in which blockchain and comparable technologies may factor into the digital public infrastructure under consideration. A great deal of clamor is generated within and around the blockchain industry, owing to the largely speculative nature of its potential. 

#### Hypercerts

Text here

#### Ethereum Attestation Service

#### Grants Stack

Text here

#### Grantee Accountability Protocol

Text here

#### RetroPGF

Text here

#### Miscellaneous

Drips, Stacks, Safe, Hats, ENS

## Section 2 - Challenges

Text here

### 2.1 - Technical Challenges

Text here

#### User Experience & Accessibility

Text here, include something about the need to fund educational efforts.

#### Sybil Resistance

Text here

##### Gitcoin Passport

Text here

##### Connection-Oriented Cluster Matching

Text here

#### Compliance and KYC

Text here

##### Zero-Knowledge KYC

Text here

### 2.2 - Financial Challenges

Text here

#### Value Exchange

Text here, something about ROI for public goods.

#### Asset Liquidity and Volatility

Text here, something about risk tolerance

### 2.3 - Operational Challenges

Text here

#### Promotional Overhead

Text here

#### Reporting Burden

Text here

#### Accountability and Execution

Text here

## Section 3 - Methodology

Text here

### 3.1 - Ontological Considerations

Text here

#### Common Impact Data Standard

Text here

### 3.2 - Stakeholder Roles and Interests

Text here

#### Funders

Text here

#### Operators

Text here

#### Beneficiaries

Text here

### 3.3 - Active Experiments

Text here

#### Progressive Public Goods Funding

text here

#### Hyperactive Public Goods Funding

text here

#### Continuous Funding Streams

Text here
Consolidate [[ARCHIVE Impact-Weighted Funding for Public Goods]] into this section

#### Unified Ontology for Impact Reporting

Text here, Common Impact Data Standards

### 3.4 - Prospects of an Extitutional Neofiscal Paradigm

Text here

## Conclusion

Text here

## Disclaimers, Licensing & Contact

The contents of this report do not constitute legal, financial or operational advice, and is intended purely for educational purposes. 

The contents of this report are licensed under [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

At the time of writing this, Spencer Saar Cavanaugh holds a material amount of ETH and other Ethereum-based assets, and is actively involved in the governance or operations of several organizations and projects in this ecosystem, in various paid and unpaid capacities.

If you would like to consult with Clinamenic LLC or commission research similar in nature to this report, please reach out to ssc@clinamenic.com with your inquiry.

## Footnotes

1. For example, grantees included in Gitcoin's quadratic funding rounds tend to participate in public panels, such as Twitter spaces, intended to cross-promote the grantees' projects and to more generally promote the development of the Gitcoin ecosystem.