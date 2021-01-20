import { useMemo } from 'react'

export function useAvailableTagTitles(controllers) {
  return useMemo(() => retrieveAllTagsStringsFromControllers(controllers), [
    controllers,
  ])
}

function retrieveAllTagsStringsFromControllers(controllers) {
  const titlesSet = controllers
    .map((c) => c.tags.map((t) => t.title))
    .reduce((acc, titles) => {
      titles.forEach((title) => acc.add(title))
      return acc
    }, new Set())

  return [...titlesSet]
}
