module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: 'ensure imports starting with /opt end with .js',
            category: 'Best Practices',
            recommended: false
        },
        schema: []
    },
    create: function (context) {
        return {
            ImportDeclaration(node) {
                const importPath = node.source.value;
                if (importPath.startsWith('/opt') && !importPath.endsWith('.js')) {
                    context.report({
                        node,
                        message: 'Imports starting with "/opt" must end with ".js".'
                    });
                }
            }
        };
    }
};
