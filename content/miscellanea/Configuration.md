---
title: Configuration
subtitle: Technical details about the configuration of the website
author:
authorURL:
date:
bannerURI:
type:
language: en
tags:
keywords:
doi:
url:
uuid: c3663c28-dc09-41ec-a33b-245abfd040cd
arweaveHashes:
publish: true
headDescription:
headIcon:
quartzShowTitle: true
quartzShowSubtitle: true
quartzShowTOC: true
quartzShowExplorer: true
quartzShowBacklinks: true
quartzShowCitation: false
quartzShowFlex: false
quartzShowGraph: true
quartzSearch: false
internalRef:
---

---

## Frontmatter (Annotated)

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

## Frontmatter (Clean)

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
