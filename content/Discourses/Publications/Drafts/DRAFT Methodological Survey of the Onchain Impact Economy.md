---
author: Spencer Saar Cavanaugh
author URL: https://www.clinamenic.com
title: Methodological Survey of Onchain Impact Ecosystems
subtitle: Preliminary survey of existing practices and challenges to inform an ontologically integrated distributed impact paradigm.
draft started: 0024-06-28
date published:
license: CC BY-SA 4.0
sponsor(s): LexDAO, SuperBenefitDAO
arweave hash:
publish: true
tags:
---

## Acknowledgments

The following research was conducted for [LexDAO](https://lexdao.org/) by Spencer Saar Cavanaugh of [Clinamenic LLC](https://www.clinamenic.com/). Funding for this research was provided by LexDAO and SuperBenefitDAO.

I would like to thank the following individuals for their feedback and support: Kyle Smith of LexClinic, rathermercurial of SuperBenefitDAO, Holke Brammer and bitbeckers of Hypercerts, Mahesh Murthy of Karma, Natalie J. Crüe, Monty Merlin of ReFi DAO, Eugene Leventhal of MetaGov, Mashal Waqar of Octant, LauNaMu of Optimism, and Mike Natanzon of Abundance Protocol.

## Abstract

The onchain impact economy, which utilizes open-source blockchain infrastructure to evaluate and fund public goods, has occasioned various methodological breakthroughs which may bring innovation to the traditional philanthropic sector. It has also encountered various challenges familiar to, and runs the risk of repeating some systematic inefficiencies of, traditional philanthropy. Various open-source protocols exist, or are actively being developed, to: administer onchain grant programs; configure and issue onchain certificates of impact; publish claims and attestations to build onchain trust networks; and retroactively fund public goods via protocol-based fiscal systems. These functions are developed as distinct softwares, but with the intention of being combined into multi-functional open-source assemblages for evaluating and funding impact, based largely on the premise that impact is not adequately valued at present, thus resulting in inadequate funding for publicly impactful work. While the infrastructure is being engineered to technologically enable more robust evaluation and funding practices, the actual assessment methodology is also being refined to minimize burdensome procedure and ensure equitable funding arrangements. That is, the _what_ and the _how_ are being developed in parallel, and ought to learn from the successes and failures of traditional philanthropy where applicable, in what could optimistically be considered an inter-paradigm dialogue, in order to avoid reinventing wheels and recreating systematic inefficiencies. This report is a holistic survey of existing practices and challenges, and a prospectus of methodological considerations to inform the collective stewardship of this promising ecosystem.

## Section 1 - Introduction

The ecosystem under consideration, referred to as the onchain impact economy, is multi-faceted, interdisciplinary, and rapidly evolving in lockstep with breakthroughs in its underlying technological infrastructure. Due to the promising potential of this technology to improve human coordination at scale, there is an unusual degree of solidarity across this industry, which spans from the simple alignment of values to the more ideological forms of utopianism.

The effects this potential has on the culture of this industry, including the more philanthropic sector in question, can be beneficial or detrimental, in terms of the actual impact this technology makes. A beneficial aspect of this alignment is that it promotes a communitarian spirit of collaboration across organizational lines, with projects openly promoting each other's donation portals and grant applications, to drive interest in and funding for their respective areas of impact $^1$. A detrimental aspect of this technologically-oriented alignment is the collective propensity to fixate on the engineering-related dimensions of these challenges without adequate feedback from non-technical beneficiaries and stakeholders. This design vacuum tends to create a technological environment which is only accessible to people who are already actively involved, and, moreover, who are able to keep up with the bleeding edge.

For the purposes of this discourse, which is intended for curious newcomers to this industry as well as its more seasoned practitioners, it may help to clearly define some of the more important terms at play, and introduce some of the novel concepts and technologies. It is in this spirit of sensemaking that following introductory section is provided.

### 1.1 - Nomenclature & Semantic Considerations

Because the matters at hand are complex enough without the added confusion of semantic ambiguity, some effort here is made to disambiguate the meaning of the integral terms of this discourse. The following is not necessarily presented as prescriptive, but rather merely as an indication of how these terms are interpreted for our purposes in this survey. If this clarity isn't needed, the reader may wish to skip past the nomenclature section.

#### 'Impact' and 'Outcome'

These terms are meant in the sense articulated by the [Impact Management Norms](https://impactfrontiers.org/norms/), developed by Impact Frontiers:

_"Impact is a change in an outcome caused by an organization. An impact can be positive or negative, intended or unintended._

_An outcome is the level of well-being experienced by a group of people, or the condition of the natural environment, as a result of an event or action._

_Impact management is the process of identifying the positive and negative impacts that an enterprise has on people and the planet, and then reducing the negative and increasing the positive."_

#### 'Public Goods' and 'Network Goods'

The term '[public good](<https://en.wikipedia.org/wiki/Public_good_(economics)>)' is meant in its conventional economic sense, referring to a good which is non-rivalrous (meaning it is inexhaustible, so people do not need to compete for it) and non-excludable (meaning it cannot be gatekept or otherwise enclosed according to private interests). Examples of public goods can include physical infrastructure, knowledge, and open-source software, depending on how these things are specifically configured.

One can understand public goods within the fourfold model of goods, composed of the axes of rivalrousness and excludability, as shown below:

|                   | Excludable                                          | Non-Excludable                                                    |
| ----------------- | --------------------------------------------------- | ----------------------------------------------------------------- |
| **Rivalrous**     | _Private Goods_<br>(food, clothing, parking spaces) | _Common Goods_<br>(fish stocks, timber)                           |
| **Non-Rivalrous** | _Club Goods_<br>(cinemas, software, private parks)  | _Public Goods_<br>(free-to-air television, air, national defense) |

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

### 1.2 - Selected Onchain Infrastructure

In this section we will highlight how certain blockchain-based protocols and platforms factor into the complex of digital public infrastructure. Because this technology is still nascent, and its field of application is still being explored, we will consider it all in light of both its current actual implementation, as well as how it may be implemented in the future, in a more integrated ecosystem of impact.

#### Hypercerts

[Hypercerts](https://hypercerts.org/docs/) are onchain certificates designed to facilitate the assessment and funding of public goods. Someone working on a public good can mint a hypercert, specify the work they are doing, and sell a number of these hypercerts to funders who want to support public goods. This last step can also be understood as issuing a donation receipt to funders of public goods.

Like other protocols in the blockchain public goods space, hypercerts were designed with the intention of supporting an ecosystem. That is, they are configured to be interoperable within a network of developers, funders and beneficiaries revolving around public goods, all of whom having their own information to share and seek. People building public goods need to convey the work they are doing and the impact it is having, in order to receive funding. People funding public goods want to see evidence of the impactful work being done, in order to feel confident that their donations are being effectively allocated.

#### Ethereum Attestation Service

[Ethereum Attestation Service](https://docs.attest.org/docs/purpose/eas-purpose) (EAS) is a general-purpose protocol for storing and indexing information onchain. Users can create and publish attestations as particular statements of information, and these statements can be integrated with smart contracts to trigger desired onchain outcomes. Not only can individuals publish information using attestations, they can also create attestation schemas to for other users to publish information.

Using attestations, individuals can make claims and reference the claims of others. In our case, we will be exploring how attestations can be used to qualitatively and quantitatively evaluate the impact and outcomes of public goods in the field of legal engineering. EAS, like Hypercerts, is itself a public good insofar as it is freely accessible and open-source. In this sense, protocols such as these collectively constitute digital public infrastructure, and can be used to systematically promote and support philanthropic and commercial work alike.

#### Allo Protocol & Grants Stack

[Allo Protocol](https://docs.allo.gitcoin.co/) is a framework for constructing custom funding allocation processes. Specifically this framework enables the configuration of certain processes, such as how funds are collected into a pool, how recipients are approved, and how funds are disbursed. 

One example of an implementation of Allo Protocol is [Grants Stack](https://www.gitcoin.co/grants-stack), which can be described as an off-the-shelf customizable grantmaking program. An institution or community can operate a grant program using Grants Stack, which allows them to pool funds, field and approve grantee applications, determine the precise allocation of the funding pool to the grantees, and disburse this funding. This entire process unfolds publicly onchain, according to the underlying mechanisms of Allo Protocol$^2$. Further implementation nuances of Grants Stack will be explored in a later section.

#### Grantee Accountability Protocol

[Grantee Accountability Protocol](https://docs.gap.karmahq.xyz/) (GAP) is a particular configuration of EAS, specifically geared around impact reporting and philanthropic transparency. Grantees or other beneficiaries of public goods funding use GAP to publish statements around the outcomes they intend to have through their work. These statements are public, and can be referenced by other attestations. For example, a given grantmaking institution may wish to publish a statement verifying a grantee's specified outcome. 

The goal behind this arrangement of attestations is to facilitate insight into and expectations around the work being done by beneficiaries of philanthropic funding. In this respect, GAP can be understood along the lines of existing reporting requirements for nonprofits$^3$, albeit in a more granular peer-to-peer fashion. 

While GAP provides specialized infrastructure for onchain impact reporting and assessment, there remains work to be done in the area of standardization and ontology. This matter will be explored in a later section of this inquiry.

#### Miscellaneous

In addition to the various platforms and protocols highlighted above, there are various other examples of onchain infrastructure. Protocols like 0xSplits and Drips can facilitate targeted fund distribution, in 

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

#### Quadratic and Direct Funding

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

The contents of this report do not constitute legal, financial or professional advice, and is intended purely for informational purposes. The publication of this report should not be construed as grounds for a professional relationship between the reader and the author, or the reader and any of the sponsor organizations. 

The contents of this report are licensed under [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

At the time of writing this, the author holds a material amount of ETH and other Ethereum-based assets, and is actively involved in the governance and operations of several organizations and projects in this ecosystem, in various paid and unpaid capacities.

If you would like to consult with the author or commission research similar in nature to this report, please reach out to ssc@clinamenic.com with your inquiry.

## Footnotes

1. For example, grantees included in Gitcoin's quadratic funding rounds tend to participate in public panels, such as Twitter spaces, intended to cross-promote the grantees' projects and to more generally promote the development of the Gitcoin ecosystem.
2. While the process at large is public and transparent, there are certain configurable exceptions to this, such as the solicitation of private personal data from grant applicants, such as email addresses and KYC/AML screening information.
3. For example, information collected via [IRS Form 990](https://www.irs.gov/forms-pubs/about-form-990) is public, and constitutes a major part of the existing reporting paradigm for impact and philanthropy. It is in full awareness of this existing paradigm that any novel unified onchain impact assessment ontology should be adopted.