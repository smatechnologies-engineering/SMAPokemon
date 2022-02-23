import { checkArrayEquality } from './Search'

describe('Search', () => {
  describe('checkArrayEquality', () => {
    it('should return true when given null for both arrays', () => {
      expect(checkArrayEquality(null, null)).toBe(true)
    })
    it('should return true when given 2 empty arrays', () => {
      expect(checkArrayEquality([], [])).toBe(true)
    })
    it('should return true when given 2 arrays with a length of 1 and the same element', () => {
      expect(checkArrayEquality(['a'], ['a'])).toBe(true)
    })
    it('should return true when given 2 arrays with the same elements in the same order', () => {
      expect(checkArrayEquality(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true)
    })
    it('should return false when given null for first array', () => {
      expect(checkArrayEquality(null, ['a'])).toBe(false)
    })
    it('should return false when given null for second array', () => {
      expect(checkArrayEquality(['a'], null)).toBe(false)
    })
    it('should return false when given 2 arrays with a length of 1 but different elements', () => {
      expect(checkArrayEquality(['a'], ['b'])).toBe(false)
    })
    it('should return false when given 2 arrays with different lengths', () => {
      expect(checkArrayEquality(['a', 'b'], ['a', 'b', 'c'])).toBe(false)
    })
    it('should return false when given 2 arrays with same elements but in different order', () => {
      expect(checkArrayEquality(['a', 'b'], ['b', 'a'])).toBe(false)
    })
  })
})
