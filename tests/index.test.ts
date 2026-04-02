import { describe, expect, it } from 'vitest'

import { toContentSlug, unaccentize } from '../src/index'

describe('should convert stuff', () => {
  it('unaccentize removes accents', () => {
    expect(unaccentize('mangé')).toBe('mange')
  })

  it.each([
    ['Carl', 'carl'],
    ['', ''],
    ["j'ai mangé des pommes et des poires et c'était bon !", 'mange-pommes-poires-bon'],
    ['le chien et le chat', 'chien-chat'],
    ['foo_bar_baz', 'foo-bar-baz'],
  ])('convert: %s', (input, output) => {
    expect(toContentSlug(input)).toBe(output)
  })

  it('limits slug length to 150 characters', () => {
    const longInput = Array.from({ length: 200 }, () => 'word').join(' ')
    const result = toContentSlug(longInput)
    expect(result.length).toBeLessThanOrEqual(150)
  })
})
