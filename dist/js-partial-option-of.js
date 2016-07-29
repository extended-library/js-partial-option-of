/**
 * @overview A partial to get the specific option value from the options object.
 *
 * @module js/partial/optionOf
 * @version 1.0.0
 *
 * @author Richard King <richrdkng@gmail.com> [GitHub]{@link https://github.com/richrdkng}
 * @license MIT
 */

/**
 * UMD - [returnExports.js pattern]{@link https://github.com/umdjs/umd/blob/master/templates/returnExports.js}
 * For more information and license, check the link below:
 * [UMD GitHub Repository]{@link https://github.com/umdjs/umd}
 */
(function(root, factory) {
    // AMD
    /* istanbul ignore next: ignore coverage test for UMD */
    if (typeof define === 'function' && define.amd) {
        define([], factory);

    // CommonJS
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();

    // Browser
    } else {
        root.js_partial_optionof =
        root.js_partial_optionOf =
        root.js_partial_option_of = factory();
    }
}(this, function() {
    'use strict';

        // constants
    var DEFAULT_RETURN_VALUE = null,

        // general variables
        returnValue = DEFAULT_RETURN_VALUE;

    /**
     * Sets the global config options for "optionOf".
     *
     * @private
     * @function setOptions
     *
     * @param {Object} [options]              The options Object.
     * @param {*}      [options.defaultValue] Specifies the default return value.
     *
     * @return {void}
     */
    function setOptions(options) {
        if (options) {
            if ('defaultValue' in options) {
                returnValue = options.defaultValue;
            }
        }
    }

    /**
     * Returns the specific option value from the options object.
     *
     * @function optionOf
     *
     * @param {string} option        The option which will be checked and if found
     *                               in the options object ("optionsObject"), its value will be returned.
     * @param {*}      optionsObject The options object in which the option key/keys will be checked
     *                               amd if found, return the value.
     *
     * @param {*}      [defaultValue=null] The default return value, which will be returned, when the option
     *                                     cannot be found in the options object.
     *                                     The default return value is null.
     *
     * @param {Object} [additionalOptions] Additional config options, which will determine
     *                                     the optionsOf partial behaviour.
     * @param {*}      [additionalOptions.defaultValue] Sets the overall, global default return value
     *                                                  for optionsOf partial.
     *                                                  The global default return value is null.
     *
     * @example
     *     optionOf('option', options);
     *     optionOf('default', options, false);
     *     optionOf('width.max-width', options, 1200);
     *     optionOf('.default.key', options, 'default-key-value');
     *
     * @returns {*} The option in options object.
     *              If the option cannot be found in the options object, the default return value will be returned.
     *              The default return value is null
     */
    function optionOf(option, optionsObject, defaultValue, additionalOptions) {

        var options  = optionsObject,
            defValue = defaultValue,
            value,
            parts,
            part,
            i,
            len;

        setOptions(additionalOptions);

        if (typeof defValue === 'undefined') {
            defValue = returnValue;
        }

        value = defValue;

        if (options) {
            if (typeof option === 'string' && option.length > 0) {
                parts   = option.split('.');

                for (i = 0, len = parts.length; i < len; i++) {
                    part = parts[i];

                    // guard against leading . (dot) - e.g.: '.config.key'
                    if (part === '') {
                        continue;
                    }

                    if (part in options && options.hasOwnProperty(part)) {
                        options = options[part];
                        value = options;

                    } else {
                        value = defValue;
                    }
                }
            }
        }

        return value;
    }

    /**
     * @lends setOptions
     */
    optionOf.setOptions = setOptions;

    return optionOf;
}));
