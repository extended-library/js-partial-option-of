var assert   = require('assert'),
    vars     = require('./variables'),
    optionOf = require(vars.path);

module.exports = {
    'optionOf' : {
        'default cases' : function() {
            assert(optionOf() === null);
        },

        'general cases' : function() {
            var emptyObject = {};

            assert(optionOf('.default', emptyObject) === null);
            assert(optionOf('.default', emptyObject, false) === false);

            var obj = {
                default : 42,
                other : {
                    nested : {
                        deep : {
                            abyss : 'I am your father!'
                        }
                    }
                }
            };

            assert(optionOf('.default', obj) === 42);
            assert(optionOf('default', obj) === 42);
            assert(optionOf('other.nested.deep.abyss', obj) === 'I am your father!');
        },

        'extended cases' : function() {
            var array = [
                {
                    value : 'T800'
                }
            ];

            assert(optionOf('0.value', array) === 'T800');
            assert(optionOf('0.values', array, 0) === 0);
            assert(optionOf('1.value', array, 'T1000') === 'T1000');

            // test against global options
            assert(optionOf('option', {}) === null);

            optionOf.setOptions({
                defaultValue : false
            });

            assert(optionOf('option', {}) === false);

            optionOf.setOptions({
                defaultValue : null
            });

            optionOf.setOptions({});
        },

        'edge cases' : function() {
            assert(optionOf('') === null);
            assert(optionOf('', {}) === null);
            assert(optionOf('', null) === null);
            assert(optionOf(null, null, null) === null);
        }
    }
};
