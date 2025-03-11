import { assertEquals } from 'jsr:@std/assert'
import { expect } from 'jsr:@std/expect'
import plugin from '../my-plugin.ts'

Deno.test('function-name-convention', async (t) => {
  await t.step('linter should report PascalCase', () => {
    const diagnostics = Deno.lint.runPlugin(
      plugin,
      'main.ts',
      `function FooBar() {} FooBar()`
    )
    assertEquals(diagnostics.length, 1)
    const d = diagnostics[0]
    console.log(d)
    expect(d.message).toEqual(expect.stringContaining('lowercase'))
    assertEquals(d.id, 'function-name-convention/start-with-lowercase')
  })
  await t.step('linter should ignore camelCase functions', () => {
    const diagnostics = Deno.lint.runPlugin(
      plugin,
      'main.ts',
      `function fooBar() {} fooBar()`
    )
    assertEquals(diagnostics.length, 0)
  })
})
