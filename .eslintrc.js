module.exports = {
    extends : [
        'eslint:all'
    ],
    globals : {
        'define': true,
        'module': true
    },
    'parserOptions': {
        'ecmaVersion': 5
    },
    rules : {
        'strict': 'off',
        'padded-blocks': 'off',
        'func-names': 'off',
        'no-var' : 'off',
        'sort-vars' : 'off',
        'no-multi-spaces': 'off',
        'init-declarations': 'off',
        'prefer-arrow-callback' : 'off',
        'func-style': 'off',
        'no-plusplus': 'off',
        'no-continue': 'off',
        'no-prototype-builtins': 'off',
        'vars-on-top': 'error',
        'max-params': [
            'error', 5
        ],
        'id-length': [
            'error', {
                'exceptions': [
                    'i', 'j', 'p', 'n', 'x', 'y', 'w', 'h'
                ]
            }
        ],
        'linebreak-style': [
            'error', 'unix'
        ],
        'complexity': [
            'error', 50
        ],
        'max-statements': [
            'error', 30
        ],
        'indent': [
            'error', 4,
            {
                'SwitchCase': 1
            }
        ],
        'max-len': [
            'error', 120, 4
        ],
        'camelcase': [
            'error', {
                'properties': 'never'
            }
        ],
        'quotes' : [
            'error', 'single', {
                'avoidEscape' : true,
                'allowTemplateLiterals' : true
            }
        ],
        'default-case': [
            'error', {
                'commentPattern' : '^skip\\sdefault'
            }
        ],
        'no-magic-numbers': [
            'error', {
                'ignore' : [0, 1],
                'ignoreArrayIndexes' : true
            }
        ],
        'space-before-function-paren': [
            'error', {
                'anonymous' : 'never',
                'named' : 'never'
            }
        ]
    }
};
