function isCamelCase(str: string): boolean {
  return /^[A-Z].*$/.test(str)
}

const plugin: Deno.lint.Plugin = {
  name: 'function-name-convention',
  rules: {
    'start-with-lowercase': {
      create(context) {
        return {
          FunctionDeclaration(node) {
            if (node.id?.type === 'Identifier' && isCamelCase(node.id?.name)) {
              context.report({
                node,
                message: 'Function names must start with a lowercase letter',
              })
            }
          },
        }
      },
    },
  },
}

export default plugin
