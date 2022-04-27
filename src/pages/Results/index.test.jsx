import { formatFetchParams, formatJobList } from '.'

describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })
  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

describe('format fetch params suite test', () => {
  it('should return rigth format', () => {
    expect(formatFetchParams({ 1: 'res1' })).toEqual('a1=res1')
  })
  it('should use & to concatenate', () => {
    expect(formatFetchParams({ 1: 'res1', 2: 'res2' })).toEqual(
      'a1=res1&a2=res2'
    )
  })
})
