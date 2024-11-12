import helpers from './CitationHelpers'
import { CitationFields } from './types'
import { ValidLocale } from "../i18n/locales/definition"

export const citationStyles = {
  apa: function(data) {
    const authors = data?.author ? helpers.apa.formatAuthors(data.author) : 'No author'
    const year = data?.date ? helpers.apa.formatDate(data.date) : 'n.d.'
    const title = data?.title || ''
    const journal = data?.journal || ''
    const volume = data?.volume || ''
    const issue = data?.issue || ''
    const pages = data?.pages || ''
    const doi = data?.doi || ''

    return `${authors} (${year}). ${title}. ${journal}, ${volume}(${issue}), ${pages}${doi ? `. https://doi.org/${doi}` : ''}`
  },

  mla: function(data) {
    const authors = helpers.mla.formatAuthors(data.author).replace(/\.+/g, '')
    const title = data.title || ''
    const journal = data.journal || ''
    const volume = data.volume || ''
    const issue = data.issue || ''
    const year = helpers.mla.formatDate(data.date)
    const pages = data.pages || ''

    return `${authors}. "${title}." ${journal}, vol. ${volume}, no. ${issue}, ${year}, pp. ${pages}.`
  },

  chicago: function(data) {
    const authors = helpers.chicago.formatAuthors(data.author)
    const title = data.title || ''
    const journal = data.journal || ''
    const volume = data.volume || ''
    const issue = data.issue || ''
    const year = helpers.chicago.formatDate(data.date)
    const pages = data.pages || ''

    return `${authors}. "${title}." ${journal} ${volume}, no. ${issue} (${year}): ${pages}`
  },

  ieee: function(data) {
    const authors = helpers.ieee.formatAuthors(data.author)
    const title = data.title || ''
    const journal = helpers.ieee.abbreviateJournal(data.journal || '')
    const volume = data.volume || ''
    const issue = data.issue || ''
    const year = helpers.ieee.formatDate(data.date)
    const pages = data.pages || ''

    return `${authors}, "${title}," ${journal}, vol. ${volume}, no. ${issue}, pp. ${pages}, ${year}`
  },

  harvard: function(data) {
    const authors = helpers.harvard.formatAuthors(data.author)
    const year = helpers.harvard.formatDate(data.date)
    const title = data.title || ''
    const journal = data.journal || ''
    const volume = data.volume || ''
    const issue = data.issue || ''
    const pages = data.pages || ''

    return `${authors}, ${year}. ${title}. ${journal}, ${volume}(${issue}), pp.${pages}`
  }
}

export default citationStyles 