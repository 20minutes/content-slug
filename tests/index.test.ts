import { describe, expect, it } from 'vitest'

import { toContentSlug, unaccentize } from '../src/index'

describe('should convert stuff', () => {
  it('unaccentize removes accents', () => {
    expect(unaccentize('mangé')).toBe('mange')
  })

  it('unaccentize handles a broader unicode range', () => {
    expect(unaccentize('Ångström déjà Noël')).toBe('Angstrom deja Noel')
  })

  it.each([
    ['Carl', 'carl'],
    ['', ''],
    ["j'ai mangé des pommes et des poires et c'était bon !", 'mange-pommes-poires-bon'],
    ["À l'école des Ångströms", 'ecole-angstroms'],
    ['le chien et le chat', 'chien-chat'],
    ['foo_bar_baz', 'foo-bar-baz'],
  ])('convert: %s', (input, output) => {
    expect(toContentSlug(input)).toBe(output)
  })

  it('limits slug length to 150 characters', () => {
    const longInput = Array.from({ length: 200 }, () => 'word').join(' ')
    const result = toContentSlug(longInput)
    expect(result.length).toBeLessThanOrEqual(150)
    expect(result).not.toMatch(/-$/)
  })

  it('returns an empty slug when the input only contains stop words', () => {
    expect(toContentSlug('le et de ou à')).toBe('')
  })

  it('normalizes repeated punctuation and underscores', () => {
    expect(toContentSlug('Bonjour!!!___test??')).toBe('bonjour-test')
  })

  it('keeps an already normalized slug stable', () => {
    expect(toContentSlug('deja-vu-bonjour')).toBe('deja-vu-bonjour')
  })

  it('drops unsupported non latin content instead of throwing', () => {
    expect(toContentSlug('🍕 Café 東京')).toBe('cafe')
    expect(toContentSlug('مرحبا بالعالم')).toBe('')
  })
})
