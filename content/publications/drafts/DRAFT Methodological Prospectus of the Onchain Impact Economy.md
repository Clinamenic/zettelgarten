---
author: Spencer Saar Cavanaugh
authorURL: https://www.clinamenic.com
title: DRAFT Methodological Prospectus of the Onchain Impact Economy
subtitle: Preliminary survey of existing practices and challenges to inform an ontologically integrated distributed impact paradigm.
draft started: 0024-06-28
date: 
license: CC BY-SA 4.0
sponsor: LexDAO, SuperBenefitDAO
arweaveHash: 
publish: true
tags:
---



## Table of Contents



## Acknowledgments

The following research was conducted by Spencer Saar Cavanaugh of [Clinamenic LLC](https://www.clinamenic.com/). Funding for this research was provided by [LexDAO](https://lexdao.org/) and SuperBenefitDAO.

I would like to thank the following individuals for their feedback and support: Kyle Smith of LexClinic, rathermercurial of SuperBenefitDAO, Holke Brammer and bitbeckers of Hypercerts, Mahesh Murthy of Karma, Natalie J. Crüe, Monty Merlin of ReFi DAO, Eugene Leventhal of MetaGov, Mashal Waqar of Octant, LauNaMu of Optimism, and Mike Natanzon of Abundance Protocol.

## Abstract

The onchain impact economy, which utilizes open-source blockchain infrastructure to evaluate and fund public goods, has occasioned various methodological breakthroughs which may bring innovation to the traditional philanthropic sector. It has also encountered various challenges familiar to, and runs the risk of repeating some systematic inefficiencies of, traditional philanthropy. Various open-source protocols exist, or are actively being developed, to: administer onchain grant programs; configure and issue onchain certificates of impact; publish claims and attestations to build onchain trust networks; and retroactively fund public goods via protocol-based fiscal systems. These functions are developed as distinct softwares, but with the intention of being combined into multi-functional open-source assemblages for evaluating and funding impact, based largely on the premise that impact is not adequately valued at present, thus resulting in inadequate funding for publicly impactful work. While the infrastructure is being engineered to technologically enable more robust evaluation and funding practices, the actual assessment methodology is also being refined to minimize burdensome procedure and ensure equitable funding arrangements. That is, the _what_ and the _how_ are being developed in parallel, and ought to learn from the successes and failures of traditional philanthropy where applicable, in what could optimistically be considered an inter-paradigm dialogue, in order to avoid reinventing wheels and recreating systematic inefficiencies. This report is a holistic survey of existing practices and challenges, and a prospectus of methodological considerations to inform the collective stewardship of this promising ecosystem.

## Section 1 - Introduction

The ecosystem under consideration, referred to as the onchain impact economy, is multi-faceted, interdisciplinary, and rapidly evolving in lockstep with breakthroughs in its underlying technological infrastructure. Due to the promising potential of this technology to improve human coordination at scale, there is an unusual degree of solidarity across this industry, which spans from the simple alignment of values to the more ideological forms of utopianism.

The effects this potential has on the culture of this industry, including the more philanthropic sector in question, can be beneficial or detrimental, in terms of the actual impact this technology makes. A beneficial aspect of this alignment is that it promotes a communitarian spirit of collaboration across organizational lines, with projects openly promoting each other's donation portals and grant applications, to drive interest in and funding for their respective areas of impact<sup>1</sup>. A detrimental aspect of this technologically-oriented alignment is the collective propensity to fixate on the engineering-related dimensions of these challenges without adequate feedback from non-technical beneficiaries and stakeholders. This design vacuum tends to create a technological environment which is only accessible to people who are already actively involved, and, moreover, who are able to keep up with the bleeding edge.

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

|                   | Excludable                                          | Non-Excludable                                           |
| ----------------- | --------------------------------------------------- | -------------------------------------------------------- |
| **Rivalrous**     | _Private Goods_<br>(food, clothing, parking spaces) | _Common Goods_<br>(fish, timber)                         |
| **Non-Rivalrous** | _Club Goods_<br>(cinemas, private parks)            | _Public Goods_<br>(clean air, national defense, privacy) |

The term 'network good' refers to any good which experiences an increase in value as its adoption or usage levels increase, such as how the value of the telephone grew as the number of people using telephones grew.

While this network dynamic generally seems non-rivalrous in nature, i.e. it is difficult to conceive of network private goods or network common goods in the sense provided above, one can conceive of how this may apply to non-rivalrous goods. For example, certain open-source software can constitute a public network good insofar as it promotes interoperability and diminishes technical friction as its usage levels increase. An example of a club network good would be membership in a professional society, wherein the value of membership is simultaneously enabled by its exclusion of non-lucrative acquaintances, and expanded by its increasing inclusion of lucrative acquaintances.

#### 'Platforms' and 'Protocols'

One key distinction at play in these considerations is that between a platform and a protocol. While this distinction deserves a more rigorous treatment than what is provided here, what follows should be sufficient for our purposes.

Platforms, such as Gmail, are usually apps intended for users to engage with, which may or may not incorporate open-source software or open protocols, and which are usually managed as a product by some central company. Protocols, such as Simple Mail Transfer Protocol (SMTP), exist as communication standards for computer networking, enabling different ways for end users to interact through these networks.

Most of the time, users engage with these protocols through platforms, i.e. the platform creates a user-friendly environment for people to leverage the underlying capabilities of the protocols. Gmail creates a relatively simple and accessible way for people to use SMTP without requiring them to be a programmer. Broadly speaking, if not for these platforms, only highly technical individuals would be able to use the internet.

A key aspect of the nascent coordination paradigm under consideration is the potential to couch the actual mechanisms of coordination within the protocol layer, rather then restricting them to the platform level, which usually involves centralized administration by companies with profit-maximizing imperatives which are not always incentivized to maintain digital public infrastructure as such. Much of this can be understood in terms of capture-resistant technology (Graham, 2022).

This engineering constraint is intended to distinguish digital public goods from digital private goods, because while they each need sustainable funding, the manners by which each can be viably funded are different. If we are to build digital public infrastructure using this technology, there is a strong argument to be made that, at the protocol level, the solutions themselves need to be distributed and resistant to capture.

#### 'Digital Public Infrastructure'

The term 'digital public infrastructure' is meant here to refer to the complex of digital public goods comprising the digital public sphere. Here, again, a more rigorous definition is deserved than what is provided, but for our purposes is it sufficient to frame it as such.

It is also worthwhile to draw attention to a certain analogy between digital public infrastructure and physical public infrastructure, namely manners in which they are systemically funded. It is argued that market dynamics, i.e. private enterprise, lack the economic incentive structures to fund and maintain public infrastructure, seeing as public goods, by virtue of being non-excludable, rule out many of the standard monetization models, such as subscriptions. If subscriptions are ruled out, alternative monetization models need to be established, such as the monetization of user data.

The major conventional alternative to private funding is, of source, public funding, but seeing as much of the digital public infrastructure under consideration seeks to operate with greater autonomy and plurality than what government subsidization would likely permit, we are faced with a significant challenge regarding sustainable funding, at scale, for digital public infrastructure. These challenges, and potential solutions, will be covered in the later sections of this survey.

#### 'Onchain'

The term 'onchain' refers to any activity on a blockchain, similar to how the term 'online' refers to any activity on the internet. The particulars capacities in which this technology enters into the complex of digital public infrastructure will be covered in the section on selected onchain infrastructure. For now, it will suffice to introduce the following technology as viable infrastructure for peer-to-peer settlement and computation.

### 1.2 - Selected Onchain Infrastructure

In this section we will highlight how certain blockchain-based protocols and platforms can factor into the complex of digital public infrastructure.

Worth bearing in mind throughout this section is the distinction between solutions based on peer-to-peer protocols, and solutions based on institutionally maintained platforms. While both classes of technical tooling have their place in the larger stack, they each come with their own risk profile.

Much of the potential of this technology, as digital public infrastructure, rests on the premise that the software itself is functionally autonomous and not reliant on the revenue models of the institutions that developed it. While institutions, public and private, have crucial roles to play in these socio-economic systems, they also have their own economic and legal imperatives which may preclude them from effectively stewarding public goods. After all, the institutional tooling will not de-enshittify the institutional paradigm<sup>2</sup>. 

#### Hypercerts

[Hypercerts](https://hypercerts.org/docs/) are onchain certificates designed to facilitate the assessment and funding of public goods. Someone working on a public good can mint a hypercert, specify the work they are doing, and sell a number of these hypercerts to funders who want to support public goods. This last step can also be understood as issuing a donation receipt to funders of public goods.

Like other protocols in the blockchain public goods space, hypercerts were designed with the intention of supporting an ecosystem. That is, they are configured to be interoperable within a network of developers, funders and beneficiaries revolving around public goods, all of whom having their own information to share and seek. People building public goods need to convey the work they are doing and the impact it is having, in order to receive funding. People funding public goods want to see evidence of the impactful work being done, in order to feel confident that their donations are being effectively allocated.

#### Ethereum Attestation Service

[Ethereum Attestation Service](https://docs.attest.org/docs/purpose/eas-purpose) (EAS) is a general-purpose protocol for storing and indexing information onchain. Users can create and publish attestations as particular statements of information, and these statements can be integrated with smart contracts to trigger desired onchain outcomes. Not only can individuals publish information using attestations, they can also create attestation schemas to for other users to publish information.

Using attestations, individuals can make claims and reference the claims of others. In our case, we will be exploring how attestations can be used to qualitatively and quantitatively evaluate the impact and outcomes of public goods in the field of legal engineering. EAS, like Hypercerts, is itself a public good insofar as it is freely accessible and open-source. In this sense, protocols such as these collectively constitute digital public infrastructure, and can be used to systematically promote and support philanthropic and commercial work alike.

#### Allo Protocol & Grants Stack

[Allo Protocol](https://docs.allo.gitcoin.co/) is a framework for constructing custom funding allocation processes. Specifically this framework enables the configuration of certain processes, such as how funds are collected into a pool, how recipients are approved, and how funds are disbursed.

One example of an implementation of Allo Protocol is [Grants Stack](https://www.gitcoin.co/grants-stack), which can be described as an off-the-shelf customizable grant-making program. An institution or community can operate a grant program using Grants Stack, which allows them to pool funds, field and approve grantee applications, determine the precise allocation of the funding pool to the grantees, and disburse this funding. This entire process unfolds publicly onchain, according to the underlying mechanisms of Allo Protocol<sup>3</sup>. Further implementation nuances of Grants Stack will be explored in a later section.

#### Grantee Accountability Protocol

[Grantee Accountability Protocol](https://docs.gap.karmahq.xyz/) (GAP) is an onchain protocol and application built using EAS, specifically geared around accountability, impact reporting and philanthropic transparency. Grantees or other beneficiaries of public goods funding use GAP to publish statements around the outcomes they intend to have through their work. Upon completion of work, they share their work along with proof, all of which are recorded on chain.

The goal behind this arrangement of attestations is to facilitate insight into and expectations around the work being done by beneficiaries of philanthropic funding. In this respect, GAP can be understood along the lines of existing reporting requirements for nonprofits<sup>4</sup>, albeit in a more granular peer-to-peer fashion.

While GAP provides specialized infrastructure for onchain impact reporting and assessment, there remains work to be done in the area of standardization and ontology. This matter will be explored in a later section of this inquiry.

#### Additional Examples

In addition to the various platforms and protocols highlighted above, there are various other examples of onchain infrastructure. These smart contracts can be understood as components for designing onchain organizations (Cavanaugh, 2023). The following examples, as those provided above, qualify as public goods insofar as they are free and inexhaustible, but that does not necessarily extend

[0xSplits](https://docs.splits.org/) and [Drips](https://docs.drips.network/) are smart contracts which can facilitate targeted fund distribution, with incoming funds divided among recipients according to a specified breakdown.

[Hats Protocol](https://www.hatsprotocol.xyz/) is a distributed role and permissions management protocol, which lends itself to centralized and decentralized oversight of organizational hierarchy.

[Ethereum Name Service](https://ens.domains/) (ENS) is an Ethereum-based domain registry and protocol, allowing users to resolve human-readable domain names to their account addresses.

[Safe](https://docs.safe.global/home/what-is-safe) multi-signature or "multisig" accounts are shared accounts which allow users to exercise joint custody of assets. These shared accounts presently constitute the industry standard for organizational treasury management.

### 1.3 - Selected Funding Processes

The fundamental innovation of the onchain philanthropy sector is the usage of smart contracts to facilitate the financial and computational elements of philanthropy. Arguably the primary purpose of the usage of this technology in these capacities is to uphold high standards of financial transparency while automating unnecessary administrative burden. 

Ideals aside, the utilization of blockchain and related technologies for philanthropic purposes, such as funding public goods, is still a radically novel economic phenomenon, constituting a movement in its own right. Over the last several years, this experimental infrastructure has enabled several novel funding mechanisms, which will be examined throughout this section. This infrastructure has facilitated the distribution of over $150 million dollars in public goods funding over the last few years. For more information on the financial scale and nuance of this technology, see the Appendix on Grant Volume.

However, as we will see in the section on challenges, there remain significant obstacles which these experiments face as they attempt to scale.

#### Direct and Quadratic Funding

The most popular examples of philanthropic applications of smart contracts are grant programs. Many of these grant programs implement participatory grant allocation mechanisms, based on quadratic formulae, which aim to proportionately reward grantees according to the amount of donations they receive (Buterin, Hitzig, & Weyl, 2018). 

For the purpose of this section, we will focus on Grants Stack, as digital public infrastructure to facilitate grantmaking, and Gitcoin's [grant manager platform](https://manager.gitcoin.co/#/) as an interface to enable  communities and institutions to configure their instance of Grants Stack. Those who operationally administer these grant programs (henceforth "round operators") can choose either direct or quadratic funding mechanisms<sup>5</sup>, depending on how participatory they want the grant program to be.

Both direct and quadratic grant rounds involve a matching pool funding process, whereby administrators deposit funds into the smart contract to eventually be disbursed to grantees, and a grantee application process, whereby applicants submit forms to be approved by the round operators. Once approved, the accepted grantees have their project profiles published, and the funding can be facilitated. 

In the case of quadratic funding, there is a customizable period of time, conventionally two to three week, whereby anyone can visit the grantees' profiles, and donate to them in crypto or in fiat currencies<sup>6</sup>. During this donation period, various data are collected automatically, such as the amount of donations, the value of each donation, and various other analytics performed upon donor activity. One significant aspect of this analysis pertains to the identification and prevention of fraudulent donor behavior, which will be examined more closely in the section on technical challenges.

Once these results are calculated, the funds from the matching pool are disbursed to grantees according to a quadratic formula such as the following: 

$$F^p = (∑_j \sqrt{c_j^p})^2$$

Direct funding, on the other hand, merely has round operators directly determine the amount each grantee receives from the matching pool. 

Allo Protocol uses smart contracts to programmatically facilitate both direct and quadratic funding rounds, meaning that the essential mechanisms of this grantmaking process occur onchain, and that the public data involved is stored on a global peer-to-peer network which is not managed by a single institution. Instead, institutions such as Gitcoin maintain dedicated user interfaces, like the Gitcoin round manager interface, for people to interact with the underlying smart contracts. In this case, the users in question are grant round operators, grant applicants, and donors. 

#### Retroactive Funding

Whereas the above quadratic and direct grants, as facilitated by the likes of Allo Protocol, are prospective in nature in that they generally fund work which is yet to be done, there also exists a class of funding processes concerned with retroactively funding work which has been completed. 

This idea that "it is easier to agree on what was useful than what will be useful" has guided the prominent examples of retroactive funding programs in this ecosystem so far, such as Optimism's Retroactive Public Goods Funding program, or RetroPGF (Optimism Collective, 2023b). In the case of RetroPGF, applications are reviewed by members of the Optimism Collective, and funding is provided by institutional donors (wheebill, 2024). For more information about the economic volume of the RetroPGF rounds, see the appendix on grant volume.

#### Ecosystem Development Funding

One of the primary difficulties encountered in the allocation of funding to public goods is that of sustainable value exchange. With respect to the source of funding, this funding process ought to be sustainable if it is to support the long term development and maintenance of public goods. That said, by virtue of public goods being non-rivalrous and non-excludable, it is often difficult to configure a financial model which permits a return on investment. Indeed, depending on how strictly we define public goods, it may even be impossible to conceive of a public good which can entail exclusive rights to profit.

But is exclusive rights to profit needed in order to enable sustainable funding for public goods at scale, and would it necessarily compromise the entire value of public goods? This question of value exchange and profitability has been discussed extensively in the ecosystem. 

Ecosystem development funding arguably constitutes an example of this sort of compromise. In these arrangements, grants are awarded to projects which incorporate the software of the grantor institution, thus expanding the ecosystem or user base of that software. In cases like this, the projects receiving funding can still qualify as public goods, even if the constraints of ecosystem development limit the effective beneficiary base of the value created. 

For example, if a software company receives a grant from a protocol foundation to incorporate a certain protocol into the company's software, that grant constraint itself does not necessarily preclude the software from being non-rivalrous and non-excludable. While the devil is ultimately in the details, some voices in the ecosystem rightfully point out how, in stressing the pedantic criteria of public goods, we risk losing the forest for the trees<sup>7</sup>.

### 1.4 - Ontological Considerations

Text here

#### LinkedClaims & Verifiable Credentials

Text here

#### Common Impact Data Standard

Text here

## Section 2 - Challenges

Having provided some measure of orientation, we will now advance to address the various challenges faced by the communities and institutions implementing this technology in philanthropic and prosocial capacities.

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

### 2.3 - Financial Challenges

Text here

#### Value Exchange

Text here, something about ROI for public goods.

#### Asset Liquidity and Volatility

Text here, something about risk tolerance

### 2.4 - Operational Challenges

Text here

#### Promotional Overhead

In some of the more participatory and community-driven grant programs, such as quadratic funding rounds, grantees are expected to undertake some degree of promotional work to receive donations from their community and other surrounding donor bases.

Similar to more traditional donation campaigns, this promotional work primarily serves to increase grantee's exposure to the wider potential donor base. However, in the case of quadratic funding rounds and similarly participatory grant programs, this promotional work also serves to increase exposure to the other grantees in the round, as well as any institution involved in operating or funding the grant round.

For example, it is common practice during quadratic funding rounds for grantees of a given round to join some number of twitter spaces, usually hosted by the institution operating the ground round. During these twitter spaces, grantees take turns describing to listeners the nature of their project, and encouraging listeners to donate. The tone of these twitter spaces is usually highly cooperative and cross-promotional, with grantees often promoting one another's projects.

Depending on the size of the audience, as well as other technical factors, grantees may or may not receive additional donations as a result of these promotional efforts. That is, this promotional work does not always prove worthwhile for the grantees.

#insert-more

#### Reporting Burden

Text here

#### Accountability and Execution

Text here

## Section 3 - Prospective Methodology

Text here

### 3.1 - Hypothetical Funding Processes

Text here

#### Progressive Public Goods Funding

text here

#### Hyperactive Public Goods Funding

text here

#### Continuous Funding Streams

Text here
Consolidate [[ARCHIVE Impact-Weighted Funding for Public Goods]] into this section

### 3.2 - Unified Ontology for Impact Reporting

Text here, Common Impact Data Standards

### 3.3 - A Peer-to-Peer Parafiscal Paradigm

Text here

- Optimism onchain revenue tracker: https://docs.google.com/spreadsheets/d/1XtyBu5lvCI6MtMBQPC6ZOnjZ5nbbPw4bOH7WO2Pn7cI/edit?gid=0#gid=0

## Conclusion

Text here

## Endnotes

1. For example, grantees included in Gitcoin's quadratic funding rounds tend to participate in public panels, such as Twitter spaces, intended to cross-promote the grantees' projects and to more generally promote the development of the Gitcoin ecosystem.
2. See ["The Master's Tools Will Never Dismantle the Master's House"](https://collectiveliberation.org/wp-content/uploads/2013/01/Lorde_The_Masters_Tools.pdf) by Audre Lord, Cory Doctorow's concept of [enshittification](https://en.wikipedia.org/wiki/Enshittification), and ["An Introduction to Extitutional Theory"](https://medium.com/berkman-klein-center/an-introduction-to-extitutional-theory-e74b5a49ea53) by Jessy Kate Schingler and Primavera de Filippi.
3. While the process at large is public and transparent, there are certain configurable exceptions to this, such as the solicitation of private personal data from grant applicants, such as email addresses and KYC/AML screening information.
4. For example, information collected via [IRS Form 990](https://www.irs.gov/forms-pubs/about-form-990) is public, and constitutes a major part of the existing reporting paradigm for impact and philanthropy. It is in full awareness of this existing reporting paradigm that any novel unified onchain impact assessment ontologies should be devised.
5. For more resources regarding the quadratic funding mechanism, see this [calculator](https://www.wtfisqf.com/?match=10000&grant=34-56&grant=3-100-4&grant=2-2-2-2-2&grant=700) provided by Gitcoin.
6. Recently there have been successful attempts to integrate payment processing for fiat currencies in these grant rounds, thanks to projects like [ViaPrize](https://www.viaprize.org/). For example, the [OpenCivics Collaborative Research Round](https://gov.gitcoin.co/t/gg21-retrospective-opencivics-collaborative-research-round/19313) utilized ViaPrize to facilitate dollar donations to grantees, thus eliminating the need for donors to donate in cryptoassets.
7. This sentiment can be discerned in the shift of certain currents of discourse in the industry, such as Gitcoin's pivot from language around funding public goods to simply "Fund what Matters".

## Bibliography

- Buterin, V., Hitzig, Z., & Weyl, E. G. (2018). [A Flexible Design for Funding Public Goods](https://arxiv.org/abs/1809.06421v2). (Self-published).
- Cavanaugh, S. S. (2023). [[What Are Onchain Organizations?]] (Self-published). [Arweave](https://viewblock.io/arweave/tx/GxrelcyAGMRd0lqR-uNZG9pcWGRaaqf1HaEtLy8nNvs).
- Graham, S. (2022). [Anticapture: Towards a Framework of Capture-Resistant Governance](https://spengrah.mirror.xyz/f6bZ6cPxJpP-4K_NB7JcjbU0XblJcaf7kVLD75dOYRQ) (Self-published). [Arweave](https://viewblock.io/arweave/tx/yAxnXi_oZlIa5eB3CkKujBwzrprX177jEPemu2LeLl8).
- Optimism Collective (2023a). [Announcing the Results of RetroPGF 2](https://arc.net/l/quote/ndqlckpa). (Self-published). [Arweave](https://viewblock.io/arweave/tx/8UPSPW9Fpim1rrZWDnhCiWQg0T9Hd0S0FebLEdJljzs).
- Optimism Collective (2023b). [RetroPGF2: Learnings & Reflections](https://arc.net/l/quote/iuqqismf). (Self-published). [Arweave](https://viewblock.io/arweave/tx/ry5yRtkJYgehHoKSTr-Wd92MkyaCYAcHxwL5NnycoH8).
- Optimism Collective (2024a). [Announcing RetroPGF Round 3 Recipients](https://optimism.mirror.xyz/37Bgum6MfTJWDuE41CH9RXSH5KBm_RCL5zsSFeRZl4E). (Self-published). [Arweave](https://viewblock.io/arweave/tx/8UPSPW9Fpim1rrZWDnhCiWQg0T9Hd0S0FebLEdJljzs).
- Optimism Collective (2024b). [RetroPGF 3: Learnings & Reflections](https://arc.net/l/quote/tguyvict). (Self-published) [Arweave](https://viewblock.io/arweave/tx/Tz3JQkadZHSVrFTipuCNAMOU80-MjZWGPEoiH05gZqI).
- wheebill (2024, September 18) [Badgeholder Onchain Analysis Report](https://gov.optimism.io/t/badgeholder-onchain-analysis-report/8881) (online forum post). Optimism Collective Governance Forum.

‌

## Appendix on Grant Volume

1. See the following reports:
   1. Gitcoin, over \$60 million to date ([Report](https://impact.gitcoin.co/))
   2. Optimism Collective's RetroPGF results. For calculations of simple moving average (SMA), I am using discrete weekly snapshots of the closing price of the asset (\$OP) taken every Monday at midnight UTC. I am using data exported from CoinMarketCap's price history.
      1. Round 1, Q4 2022, \$1 million distributed ([Results](https://github.com/ethereum-optimism/op-analytics/blob/main/rpgf/rpgf1/results/rpgf1_results.csv)).
      2. Round 2, Q2 2023, 10 million \$OP distributed, approx. \$25 million FMV ([Results](https://optimism.mirror.xyz/Upn_LtV2-3SviXgX_PE_LyA7YI00jQyoM1yf55ltvvI)) ([Learnings](https://optimism.mirror.xyz/7v1DehEY3dpRcYFhqWrVNc9Qj94H2L976LKlWH1FX-8)).
         1. In Q2 2023 the \$OP token had an SMA of \$1.73, and a standard deviation of approximately 24%.
      3. Round 3, Q4 2023, 30 million \$0P, approx. \$78 million ([Results](https://vote.optimism.io/retropgf/3/summary)) ([Learnings](https://optimism.mirror.xyz/Bbu5M1mTNV2Z637QxOiF7Qt7R9hy6nxghbZiFbtZOBA))
         1. In Q4 2023 the \$OP token had an SMA of \$1.95, and a standard deviation of approximately 65%, indicating drastic volatility, even by the standards of crypto markets.
      4. Round 4, Q2 2024, 10 million \$OP, approx. \$25 million ([Results](https://retrofunding.optimism.io/round/results))
         1. In Q2 2024 the \$OP token had an SMA of \$2.40, and a standard deviation of approximately 16%, indicating relative stability compared to the previous round.

## Disclaimers

At the time of writing this, I hold a material amount of ETH and other Ethereum-based assets, and am actively involved in the governance and operations of several organizations and projects in this ecosystem, in various paid and unpaid capacities. 

The contents of this report do not constitute legal, financial or professional advice, and is intended purely for informational purposes. The publication of this report should not be construed as grounds for a professional relationship between the reader and the author, or the reader and any of the sponsor organizations.

## Licensing

The contents of this report are licensed under [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
