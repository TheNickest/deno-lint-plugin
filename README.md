# My First Lint Rule

Unfortunately I missed the challenge this month **(March)**. So I decided to try to create my own lint rule/plugin anyway, without receiving stickers 😭

## Goal 🏁

Learn how to create a plugin following this [tutorial](https://deno.com/blog/lint-rules-contest).

## Result 📋

A rule that checks if a declared function's name starts with an upper case letter and prohibits this practice i.e. more or less conforms to pascalCase. 

### Example

```typescript
// linter will show error
function FooBar() {
    console.log('foo')
}

// follows the rule
function fooBar() {
    console.log('bar')
}
```

## Tests 🧪

I never checked out Deno's test runner and hence decided to test my rule.