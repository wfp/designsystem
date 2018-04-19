export function getDefaultTextDirection (api) {
  const queryParam = api.getQueryParam('direction')
  const bodyDirection = window.getComputedStyle(document.body).direction.toLowerCase()
  return queryParam || bodyDirection || 'ltr'
}

export function setTextDirection (direction) {
  document.body.dir = direction
}
