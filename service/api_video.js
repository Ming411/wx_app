import xmRequest from './index'
export function getTopMV(offset, limit = 10) {
  return xmRequest.get('/top/mv', {
    offset,
    limit
  })
}