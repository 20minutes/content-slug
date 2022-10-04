import { toContentSlug } from '../src/index'

describe('should convert stuff', () => {
  it.each([
    ['Carl', 'carl'],
    ['', ''],
    ["j'ai mangé des pommes et des poires et c'était bon !", 'mange-pommes-poires-bon'],
  ])('convert: %s', async (input, output) => {
    expect(toContentSlug(input)).toBe(output)
  })
})
