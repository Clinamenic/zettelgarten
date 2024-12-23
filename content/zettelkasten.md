---
title: Zettelkasten
hideComments: true
keywords:
  - clinamenic, spencer saar cavanaugh, clinamenic LLC,
publish: true
headDescription:
headIcon:
quartzShowTitle: true
quartzShowSubtitle: false
quartzShowTOC: true
quartzShowExplorer: true
quartzShowBacklinks: true
quartzShowCitation: false
quartzShowFlex: false
quartzShowGraph: true
quartzSearch: true
tags:
---

<style>
  .center {
    &h2 {
      font-weight: 300;
      font-size: 1.5rem;
      text-align: center !important;
      justify-content: center !important;
      transform: translateX(1.25rem);
    }
    &h3 {
      font-size: 1.3rem;
    }
  }
</style>

This is the zettelkasten of Spencer Saar Cavanaugh of [Clinamenic LLC](/index.html).

---

## Content

---

### Notes on Books

- [[Common Sense]] by Thomas Paine
  - [[r-TP-CS-Hub]] ([scanned notes](https://app.ardrive.io/#/file/37f0b454-27ef-43a4-9691-971b14bfef35/view))
- [[The Prince]] by Niccolo Machiavelli
  - [[r-NM-TP-Hub]] ([scanned notes](https://app.ardrive.io/#/file/ef27fff7-e813-4a46-8673-4f121190415c/view))
- [[Discourses on Livy]] by Niccolo Machiavelli
  - [[r-NM-DL-Hub]] ([scanned notes](https://app.ardrive.io/#/file/aa34741e-109a-44a3-b45e-5987ba8540f9/view))
- The Art of War by Niccolo Machiavelli
  - [[r-NM-AW-Hub]] ([scanned notes](https://app.ardrive.io/#/file/ee2a3695-37b7-435d-9448-6bbdb6b40b33/view))
- The Road to Serfdom by Friedrich Hayek
  - [[r-FH-RS-Hub]] ([scanned notes](https://app.ardrive.io/#/file/32b1dd3c-c1c3-453e-97e3-1de99b51f31a/view))
- The Constitution of Liberty by Friedrich Hayek
  - [[r-FH-CL-Hub]] ([scanned notes](https://app.ardrive.io/#/file/4ab5c166-19e4-47be-b49e-a782158d34b6/view))
- The Use of Knowledge in Society by Friedrich Hayek
  - [[r-FH-UK-Hub]] ([scanned notes](https://app.ardrive.io/#/file/94219817-8498-450f-9ad6-e575a70954a9/view))
- [[Progress and Poverty]] by Henry George
  - [[r-HG-PP-Hub]] ([scanned notes](https://app.ardrive.io/#/file/6ded2432-4be8-4d22-9042-9058a8157bae/view))
- [[On the Nature of Things]] by Lucretius
  - [[r-Lu-NT-Hub]] ([scanned notes](https://app.ardrive.io/#/file/67854654-f077-43c8-bf95-ad43ee238a7c/view))
- [[The General Theory of Employment, Interest and Money]] by John Maynard Keynes
  - [[r-JK-GT-Hub]] ([scanned notes](https://app.ardrive.io/#/file/a8b10b15-dad2-4bad-bf7c-72c76fc94edd/view))
- Discourse on the Origin and Basis of Inequality Among Men by Jean-Jacques Rousseau
  - [[r-JR-DO-Hub]] ([scanned notes](https://app.ardrive.io/#/file/9aa862f5-0340-4281-a21b-e4858d069c42/view))
- [[The Federalist Papers]] by Publius
  - [[r-Pu-FP-Hub]] ([scanned notes](https://app.ardrive.io/#/file/7d04009d-ba6e-40e6-a5dd-3ee9e2afc2fe/view))

---

### Canvassing

![[Boilerplate#Canvas Foreword]]

- [[Notes on Active Discursive Efforts]]
- [[Notes on the Distinction between Theoretical and Applied Governance]]
- [[Notes on Extitutional Theory and Progressive Protocolization]]
- [[Notes on Keynes, Hayek, and Fiscal Protocols]]
- [[Notes on Experimental Zettelkasten Methodology]]
- [[Notes on Methodology for Communities of Practice]]
- [[Notes on an Ethical Hermeneutics of Machiavelli]]
- [[Notes on Experimental Zettelkasten Methodology, Part 2]]
- [[Intimations of a Post-Machiavellian Moral-Tactical Calculus]]
- [[Considerations on Delegate Agents]]

---

## Configuration

---

### File Naming

#### Reference Note Format

"r-AuthorInitials-TitleInitials-1" or "r-JK-GT-1"

For example, the first note made primarily in reference to John Maynard Keynes' _General Theory_ would be r-JK-GT-1, the second would be r-JK-GT-2, etc. See this [Reddit post](https://www.reddit.com/r/Zettelkasten/comments/1f8hap4/how_i_give_ids_to_my_reference_notes/) for more information.

This method permits the interstitial inclusion of recursive reference notes, along the lines of folgezettel. For example, note r-JK-GT-1a could be made in reference to r-JK-GT-1, perhaps as a correction or an elaboration.

### File Storage

Arweave is the primary storage solution for this zettelkasten. Arweave hashes function as the primary URIs for inline images, videos, and other media.

```md
MALjimE4g6_dO_DOWwbA_LOPOCNQkjI2v2aL3oYuG3w
```

For example, the following markdown code renders the subsequent image in the browser:

```md
![The Baths of Caracalla](https://arweave.net/MALjimE4g6_dO_DOWwbA_LOPOCNQkjI2v2aL3oYuG3w)
```

![The Baths of Caracalla](https://arweave.net/MALjimE4g6_dO_DOWwbA_LOPOCNQkjI2v2aL3oYuG3w)

Arweave hashes are also used as URIs in frontmatter for page metadata. For example, page banners are expressed as:

```yaml
bannerURI: https://arweave.net/1OCpB8IN7kO8LiEOoutCLSSyGbHLHfhoJSQoloN_Y5g
```

### Frontmatter

Below is the full annotated frontmatter for the pages on this site. Not all pages will use all of the fields, and many of the fields are not required. Additionally, some of the fields are specific to this particular Quartz site(such as the 'quartzShowGraph' field). Some field are still in development.

Arweave is the preferred permanent storage solution for this site's static assets, with content accessible via Arweave-based URIs.

```yaml
## Page Metadata
title: A Rhapsody on Neurodiversity # Title of the page (visualized by 'ArticleTitle.tsx', 'LicenseInfo.tsx', and 'CitationGenerator.tsx'; converted into HTML 'title' tag by 'Head.tsx')
subtitle: Reflections on auto-didacticism and neurodiversity # Subtitle of the page (visualized by 'ArticleSubtitle.tsx')
author: Spencer Saar Cavanaugh # Author of the page (visualized by 'AuthorName.tsx', 'LicenseInfo.tsx', and 'CitationGenerator.tsx')
authorURL: https://www.clinamenic.com # URL of the author (visualized by 'LicenseInfo.tsx')
date: 2023-01-01 # Date of the page (visualized by 'Date.tsx', 'LicenseInfo.tsx', and 'CitationGenerator.tsx')
bannerURI: https://arweave.net/xyErVkoWdB0uDWV5a5onev40x8gZBSd8yINxgzKKOrE # URI of the banner image (Arweave is preferred; visualized by 'Banner.tsx'; converted into HTML 'og:image' tag and 'twitter:image' tag by 'Head.tsx')
type: Article # Item type of the page (visualized by 'ItemType.tsx')
language: en # Language of the publication
tags: # An array of tags for the page (visualized by 'TagList.tsx'; supports sub-tags)
  - psychoanalysis
  - neurodiversity
  - PSYC/SCHI

## Academic Publication Metadata
abstract: Reflections on auto-didacticism and neurodiversity. # Abstract of the publication
keywords: # Keywords of the publication
  - auto-didacticism
  - neurodiversity
  - psychoanalysis
journal: Journal of Imaginary Discourse # Journal of the publication (visualized by 'CitationGenerator.tsx')
volume: 1 # Volume of the publication (visualized by 'CitationGenerator.tsx')
issue: 1 # Issue of the publication (visualized by 'CitationGenerator.tsx')
pages: 1-3 # Pages of the publication (visualized by 'CitationGenerator.tsx')
publisher: Clinamenic Publishing # Publisher of the publication (visualized by 'CitationGenerator.tsx')
publisherLocation: New York, NY # Publisher location of the publication (visualized by 'CitationGenerator.tsx')
edition: 1 # Edition of the publication
institution: Clinamenic Institute for Really Cool and Unusual Studies # Institution of the publication
department: Department of Psychodynamics # Department of the publication
degree: PhD # Degree of the publication

## License and Identification Metadata
license: CC-BY-SA 4.0 # License of the publication (visualized by 'LicenseInfo.tsx')
doi: 10.1234/1234567890 # DOI of the publication (visualized by 'CitationGenerator.tsx')
url: https://www.clinamenic.com/publications/a-rhapsody-on-neurodiversity # URL of the page (visualized by 'CitationGenerator.tsx')
uuid: 245497b4-8ced-46b3-a841-d8e683c09373 # UUID of the page

## Arweave Metadata
arweaveHashes: # An array of [hash, timestamp] pairs corresponding to page versions (Still in development)
  - [A1BQ7QUEnQ5I6W-o-ot4GB0w832OkR0LbNAjtqPX_GQ, "2024-03-15T14:30:00Z"]
  - [2OkRI6B0w832OkR0LbNAjtqPX_GQW-o-ot4GA1B0w83, "2024-03-14T09:15:00Z"]
  - [3OkR0LbNAjtqPX_GQW-o-ot4GB0w832OkR0LbNAjtqP, "2024-03-13T22:45:00Z"]

## Quartz Metadata
publish: true # Whether the page is published (true or false)
headDescription: Reflections on auto-didacticism and neurodiversity. # Description of the page (Converted into HTML meta description tag by 'Head.tsx')
headIcon: https://arweave.net/xyErVkoWdB0uDWV5a5onev40x8gZBSd8yINxgzKKOrE # URI of the icon image (Arweave is preferred; converted into HTML icon tag by 'Head.tsx')
quartzShowTitle: true # Whether the 'ArticleTitle.tsx' component is shown (true or false)
quartzShowSubtitle: true # Whether the 'ArticleSubtitle.tsx' component is shown (true or false)
quartzShowTOC: true # Whether the 'TableOfContents.tsx' component is shown (true or false)
quartzShowExplorer: true # Whether the 'Explorer.tsx' component is shown (true or false)
quartzShowBacklinks: true # Whether the 'Backlinks.tsx' component is shown (true or false)
quartzShowCitation: true # Whether the 'CitationGenerator.tsx' component is shown (true or false)
quartzShowFlex: true # Whether the 'FlexContainer.tsx' component is shown (true or false)
quartzShowGraph: true # Whether the 'Graph.tsx' component is shown (true or false)
quartzSearch: true # Whether the contents of the pages are indexed to be searchable by the 'Search.tsx' component (true or false)
internalRef: # An array of internal references to other pages (still in development)
  - "[[Page A]]"
  - "[[Page B]]"
  - "[[Page C]]"
```

---

#### Frontmatter (Clean)

Feel free to copy and paste the following template into your new page.

```yaml
title:
subtitle:
author:
authorURL:
date:
bannerURI:
type:
language: en
tags:
abstract:
keywords:
journal:
volume:
issue:
pages:
publisher:
publisherLocation:
edition:
institution:
department:
degree:
license:
doi:
url:
uuid:
arweaveHashes:
publish: true
headDescription:
headIcon:
quartzShowTitle: true
quartzShowSubtitle: true
quartzShowTOC: true
quartzShowExplorer: true
quartzShowBacklinks: true
quartzShowCitation: true
quartzShowFlex: true
quartzShowGraph: true
quartzSearch: true
internalRef:
```

---

### Customizations

- [x] Add AuthorName.ts component.
- [x] Add PublishDate.ts component.
- [x] Add LicenseInfo.ts component.
- [x] Add ArticleSubtitle component
- [x] Configure Arweave sync functionality via Github workflows using protocol.land ([docs](https://docs.protocol.land/working-with-repositories/import-a-repository-from-github)).
- [x] Add CitationGenerator component
  - [x] Support MLA, APA, IEEE, Harvard, Chicago citation styles
- [x] Add FlexContainer component to hold LicenseInfo and CitationGenerator components
- [ ] Configure
- [x] Configure custom frontmatter -> HTML meta tag functionality
  - [x] Icon path
  - [x] OG image
  - [x] Description
  - [ ] [Canonical URL](https://www.semrush.com/blog/canonical-url-guide/)
  - [ ] SEO keyword
- [x] Configure limitations around search indexing, such that only pages with 'quartzSearch: true' in their frontmatter appear in inline search results.
- [ ] Configure custom global graph layout
  - [x] Tags in a fixed ring around the border of the rest of the graph.
  - [x] Monogram logo on background
- [ ]
- [ ]
- [ ]

---

## Articles & Resources

- https://strengejacke.wordpress.com/wp-content/uploads/2015/10/introduction-into-luhmanns-zettelkasten-thinking.pdf
- [Zettelkasten: Hypertext, Linearity and Sequentiality](https://www.thesing-online.de/blog/zettelkasten-hypertext-linearity-sequentiality)
- [https://writing.bobdoto.computer/folgezettel-is-not-an-outline-luhmanns-playful-appreciation-of-disfunction/](https://writing.bobdoto.computer/folgezettel-is-not-an-outline-luhmanns-playful-appreciation-of-disfunction/)
- The Process of Writing World History of Design, 2015. [https://www.youtube.com/watch?v=Kxyy0THLfuI](https://www.youtube.com/watch?v=Kxyy0THLfuI).
- [Example](https://docs.paragraph.xyz/docs/integrations/arweave) of querying Arweave for version history of articles.

### Article/Resource Lists

- https://www.reddit.com/r/Zettelkasten/comments/10wj6tv/what_are_your_two_favourite_articles_videos_or/

---

## Miscellaneous

- 'Function thinking' framework / The Multipotentialite Kit
  - https://www.reddit.com/r/ObsidianMD/comments/1fqfjy3/i_made_the_most_powerful_setup_i_could/
  - https://github.com/Avefector/The-Multipotentialite-Kit
  - https://www.youtube.com/watch?v=y1dbwSbXggg
- https://web.archive.org/web/20150919121615/http://www.abolish.me/blog/semantic-notes
- Kepano's web clipper bookmark: https://stephango.com/obsidian-web-clipper
