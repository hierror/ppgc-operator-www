"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/css-mediaquery";
exports.ids = ["vendor-chunks/css-mediaquery"];
exports.modules = {

/***/ "(ssr)/./node_modules/css-mediaquery/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-mediaquery/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/*\nCopyright (c) 2014, Yahoo! Inc. All rights reserved.\nCopyrights licensed under the New BSD License.\nSee the accompanying LICENSE file for terms.\n*/\n\n\n\nexports.match = matchQuery;\nexports.parse = parseQuery;\n\n// -----------------------------------------------------------------------------\n\nvar RE_MEDIA_QUERY     = /(?:(only|not)?\\s*([^\\s\\(\\)]+)(?:\\s*and)?\\s*)?(.+)?/i,\n    RE_MQ_EXPRESSION   = /\\(\\s*([^\\s\\:\\)]+)\\s*(?:\\:\\s*([^\\s\\)]+))?\\s*\\)/,\n    RE_MQ_FEATURE      = /^(?:(min|max)-)?(.+)/,\n    RE_LENGTH_UNIT     = /(em|rem|px|cm|mm|in|pt|pc)?$/,\n    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;\n\nfunction matchQuery(mediaQuery, values) {\n    return parseQuery(mediaQuery).some(function (query) {\n        var inverse = query.inverse;\n\n        // Either the parsed or specified `type` is \"all\", or the types must be\n        // equal for a match.\n        var typeMatch = query.type === 'all' || values.type === query.type;\n\n        // Quit early when `type` doesn't match, but take \"not\" into account.\n        if ((typeMatch && inverse) || !(typeMatch || inverse)) {\n            return false;\n        }\n\n        var expressionsMatch = query.expressions.every(function (expression) {\n            var feature  = expression.feature,\n                modifier = expression.modifier,\n                expValue = expression.value,\n                value    = values[feature];\n\n            // Missing or falsy values don't match.\n            if (!value) { return false; }\n\n            switch (feature) {\n                case 'orientation':\n                case 'scan':\n                    return value.toLowerCase() === expValue.toLowerCase();\n\n                case 'width':\n                case 'height':\n                case 'device-width':\n                case 'device-height':\n                    expValue = toPx(expValue);\n                    value    = toPx(value);\n                    break;\n\n                case 'resolution':\n                    expValue = toDpi(expValue);\n                    value    = toDpi(value);\n                    break;\n\n                case 'aspect-ratio':\n                case 'device-aspect-ratio':\n                case /* Deprecated */ 'device-pixel-ratio':\n                    expValue = toDecimal(expValue);\n                    value    = toDecimal(value);\n                    break;\n\n                case 'grid':\n                case 'color':\n                case 'color-index':\n                case 'monochrome':\n                    expValue = parseInt(expValue, 10) || 1;\n                    value    = parseInt(value, 10) || 0;\n                    break;\n            }\n\n            switch (modifier) {\n                case 'min': return value >= expValue;\n                case 'max': return value <= expValue;\n                default   : return value === expValue;\n            }\n        });\n\n        return (expressionsMatch && !inverse) || (!expressionsMatch && inverse);\n    });\n}\n\nfunction parseQuery(mediaQuery) {\n    return mediaQuery.split(',').map(function (query) {\n        query = query.trim();\n\n        var captures    = query.match(RE_MEDIA_QUERY),\n            modifier    = captures[1],\n            type        = captures[2],\n            expressions = captures[3] || '',\n            parsed      = {};\n\n        parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';\n        parsed.type    = type ? type.toLowerCase() : 'all';\n\n        // Split expressions into a list.\n        expressions = expressions.match(/\\([^\\)]+\\)/g) || [];\n\n        parsed.expressions = expressions.map(function (expression) {\n            var captures = expression.match(RE_MQ_EXPRESSION),\n                feature  = captures[1].toLowerCase().match(RE_MQ_FEATURE);\n\n            return {\n                modifier: feature[1],\n                feature : feature[2],\n                value   : captures[2]\n            };\n        });\n\n        return parsed;\n    });\n}\n\n// -- Utilities ----------------------------------------------------------------\n\nfunction toDecimal(ratio) {\n    var decimal = Number(ratio),\n        numbers;\n\n    if (!decimal) {\n        numbers = ratio.match(/^(\\d+)\\s*\\/\\s*(\\d+)$/);\n        decimal = numbers[1] / numbers[2];\n    }\n\n    return decimal;\n}\n\nfunction toDpi(resolution) {\n    var value = parseFloat(resolution),\n        units = String(resolution).match(RE_RESOLUTION_UNIT)[1];\n\n    switch (units) {\n        case 'dpcm': return value / 2.54;\n        case 'dppx': return value * 96;\n        default    : return value;\n    }\n}\n\nfunction toPx(length) {\n    var value = parseFloat(length),\n        units = String(length).match(RE_LENGTH_UNIT)[1];\n\n    switch (units) {\n        case 'em' : return value * 16;\n        case 'rem': return value * 16;\n        case 'cm' : return value * 96 / 2.54;\n        case 'mm' : return value * 96 / 2.54 / 10;\n        case 'in' : return value * 96;\n        case 'pt' : return value * 72;\n        case 'pc' : return value * 72 / 12;\n        default   : return value;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY3NzLW1lZGlhcXVlcnkvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixhQUFhO0FBQ2IsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHBnYy1vcGVyYXRvci13d3cvLi9ub2RlX21vZHVsZXMvY3NzLW1lZGlhcXVlcnkvaW5kZXguanM/MDY3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQ29weXJpZ2h0IChjKSAyMDE0LCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLlxuU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiovXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoUXVlcnk7XG5leHBvcnRzLnBhcnNlID0gcGFyc2VRdWVyeTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIFJFX01FRElBX1FVRVJZICAgICA9IC8oPzoob25seXxub3QpP1xccyooW15cXHNcXChcXCldKykoPzpcXHMqYW5kKT9cXHMqKT8oLispPy9pLFxuICAgIFJFX01RX0VYUFJFU1NJT04gICA9IC9cXChcXHMqKFteXFxzXFw6XFwpXSspXFxzKig/OlxcOlxccyooW15cXHNcXCldKykpP1xccypcXCkvLFxuICAgIFJFX01RX0ZFQVRVUkUgICAgICA9IC9eKD86KG1pbnxtYXgpLSk/KC4rKS8sXG4gICAgUkVfTEVOR1RIX1VOSVQgICAgID0gLyhlbXxyZW18cHh8Y218bW18aW58cHR8cGMpPyQvLFxuICAgIFJFX1JFU09MVVRJT05fVU5JVCA9IC8oZHBpfGRwY218ZHBweCk/JC87XG5cbmZ1bmN0aW9uIG1hdGNoUXVlcnkobWVkaWFRdWVyeSwgdmFsdWVzKSB7XG4gICAgcmV0dXJuIHBhcnNlUXVlcnkobWVkaWFRdWVyeSkuc29tZShmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgdmFyIGludmVyc2UgPSBxdWVyeS5pbnZlcnNlO1xuXG4gICAgICAgIC8vIEVpdGhlciB0aGUgcGFyc2VkIG9yIHNwZWNpZmllZCBgdHlwZWAgaXMgXCJhbGxcIiwgb3IgdGhlIHR5cGVzIG11c3QgYmVcbiAgICAgICAgLy8gZXF1YWwgZm9yIGEgbWF0Y2guXG4gICAgICAgIHZhciB0eXBlTWF0Y2ggPSBxdWVyeS50eXBlID09PSAnYWxsJyB8fCB2YWx1ZXMudHlwZSA9PT0gcXVlcnkudHlwZTtcblxuICAgICAgICAvLyBRdWl0IGVhcmx5IHdoZW4gYHR5cGVgIGRvZXNuJ3QgbWF0Y2gsIGJ1dCB0YWtlIFwibm90XCIgaW50byBhY2NvdW50LlxuICAgICAgICBpZiAoKHR5cGVNYXRjaCAmJiBpbnZlcnNlKSB8fCAhKHR5cGVNYXRjaCB8fCBpbnZlcnNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4cHJlc3Npb25zTWF0Y2ggPSBxdWVyeS5leHByZXNzaW9ucy5ldmVyeShmdW5jdGlvbiAoZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgdmFyIGZlYXR1cmUgID0gZXhwcmVzc2lvbi5mZWF0dXJlLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyID0gZXhwcmVzc2lvbi5tb2RpZmllcixcbiAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IGV4cHJlc3Npb24udmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgPSB2YWx1ZXNbZmVhdHVyZV07XG5cbiAgICAgICAgICAgIC8vIE1pc3Npbmcgb3IgZmFsc3kgdmFsdWVzIGRvbid0IG1hdGNoLlxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblxuICAgICAgICAgICAgc3dpdGNoIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnb3JpZW50YXRpb24nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NjYW4nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZXhwVmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3dpZHRoJzpcbiAgICAgICAgICAgICAgICBjYXNlICdoZWlnaHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2RldmljZS13aWR0aCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZGV2aWNlLWhlaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gdG9QeChleHBWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgID0gdG9QeCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmVzb2x1dGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gdG9EcGkoZXhwVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICA9IHRvRHBpKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdhc3BlY3QtcmF0aW8nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2RldmljZS1hc3BlY3QtcmF0aW8nOlxuICAgICAgICAgICAgICAgIGNhc2UgLyogRGVwcmVjYXRlZCAqLyAnZGV2aWNlLXBpeGVsLXJhdGlvJzpcbiAgICAgICAgICAgICAgICAgICAgZXhwVmFsdWUgPSB0b0RlY2ltYWwoZXhwVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICA9IHRvRGVjaW1hbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZ3JpZCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbG9yLWluZGV4JzpcbiAgICAgICAgICAgICAgICBjYXNlICdtb25vY2hyb21lJzpcbiAgICAgICAgICAgICAgICAgICAgZXhwVmFsdWUgPSBwYXJzZUludChleHBWYWx1ZSwgMTApIHx8IDE7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgID0gcGFyc2VJbnQodmFsdWUsIDEwKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21pbic6IHJldHVybiB2YWx1ZSA+PSBleHBWYWx1ZTtcbiAgICAgICAgICAgICAgICBjYXNlICdtYXgnOiByZXR1cm4gdmFsdWUgPD0gZXhwVmFsdWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdCAgIDogcmV0dXJuIHZhbHVlID09PSBleHBWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChleHByZXNzaW9uc01hdGNoICYmICFpbnZlcnNlKSB8fCAoIWV4cHJlc3Npb25zTWF0Y2ggJiYgaW52ZXJzZSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUXVlcnkobWVkaWFRdWVyeSkge1xuICAgIHJldHVybiBtZWRpYVF1ZXJ5LnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgICBxdWVyeSA9IHF1ZXJ5LnRyaW0oKTtcblxuICAgICAgICB2YXIgY2FwdHVyZXMgICAgPSBxdWVyeS5tYXRjaChSRV9NRURJQV9RVUVSWSksXG4gICAgICAgICAgICBtb2RpZmllciAgICA9IGNhcHR1cmVzWzFdLFxuICAgICAgICAgICAgdHlwZSAgICAgICAgPSBjYXB0dXJlc1syXSxcbiAgICAgICAgICAgIGV4cHJlc3Npb25zID0gY2FwdHVyZXNbM10gfHwgJycsXG4gICAgICAgICAgICBwYXJzZWQgICAgICA9IHt9O1xuXG4gICAgICAgIHBhcnNlZC5pbnZlcnNlID0gISFtb2RpZmllciAmJiBtb2RpZmllci50b0xvd2VyQ2FzZSgpID09PSAnbm90JztcbiAgICAgICAgcGFyc2VkLnR5cGUgICAgPSB0eXBlID8gdHlwZS50b0xvd2VyQ2FzZSgpIDogJ2FsbCc7XG5cbiAgICAgICAgLy8gU3BsaXQgZXhwcmVzc2lvbnMgaW50byBhIGxpc3QuXG4gICAgICAgIGV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMubWF0Y2goL1xcKFteXFwpXStcXCkvZykgfHwgW107XG5cbiAgICAgICAgcGFyc2VkLmV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMubWFwKGZ1bmN0aW9uIChleHByZXNzaW9uKSB7XG4gICAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBleHByZXNzaW9uLm1hdGNoKFJFX01RX0VYUFJFU1NJT04pLFxuICAgICAgICAgICAgICAgIGZlYXR1cmUgID0gY2FwdHVyZXNbMV0udG9Mb3dlckNhc2UoKS5tYXRjaChSRV9NUV9GRUFUVVJFKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogZmVhdHVyZVsxXSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlIDogZmVhdHVyZVsyXSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgIDogY2FwdHVyZXNbMl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSk7XG59XG5cbi8vIC0tIFV0aWxpdGllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHRvRGVjaW1hbChyYXRpbykge1xuICAgIHZhciBkZWNpbWFsID0gTnVtYmVyKHJhdGlvKSxcbiAgICAgICAgbnVtYmVycztcblxuICAgIGlmICghZGVjaW1hbCkge1xuICAgICAgICBudW1iZXJzID0gcmF0aW8ubWF0Y2goL14oXFxkKylcXHMqXFwvXFxzKihcXGQrKSQvKTtcbiAgICAgICAgZGVjaW1hbCA9IG51bWJlcnNbMV0gLyBudW1iZXJzWzJdO1xuICAgIH1cblxuICAgIHJldHVybiBkZWNpbWFsO1xufVxuXG5mdW5jdGlvbiB0b0RwaShyZXNvbHV0aW9uKSB7XG4gICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChyZXNvbHV0aW9uKSxcbiAgICAgICAgdW5pdHMgPSBTdHJpbmcocmVzb2x1dGlvbikubWF0Y2goUkVfUkVTT0xVVElPTl9VTklUKVsxXTtcblxuICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgY2FzZSAnZHBjbSc6IHJldHVybiB2YWx1ZSAvIDIuNTQ7XG4gICAgICAgIGNhc2UgJ2RwcHgnOiByZXR1cm4gdmFsdWUgKiA5NjtcbiAgICAgICAgZGVmYXVsdCAgICA6IHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvUHgobGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChsZW5ndGgpLFxuICAgICAgICB1bml0cyA9IFN0cmluZyhsZW5ndGgpLm1hdGNoKFJFX0xFTkdUSF9VTklUKVsxXTtcblxuICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgY2FzZSAnZW0nIDogcmV0dXJuIHZhbHVlICogMTY7XG4gICAgICAgIGNhc2UgJ3JlbSc6IHJldHVybiB2YWx1ZSAqIDE2O1xuICAgICAgICBjYXNlICdjbScgOiByZXR1cm4gdmFsdWUgKiA5NiAvIDIuNTQ7XG4gICAgICAgIGNhc2UgJ21tJyA6IHJldHVybiB2YWx1ZSAqIDk2IC8gMi41NCAvIDEwO1xuICAgICAgICBjYXNlICdpbicgOiByZXR1cm4gdmFsdWUgKiA5NjtcbiAgICAgICAgY2FzZSAncHQnIDogcmV0dXJuIHZhbHVlICogNzI7XG4gICAgICAgIGNhc2UgJ3BjJyA6IHJldHVybiB2YWx1ZSAqIDcyIC8gMTI7XG4gICAgICAgIGRlZmF1bHQgICA6IHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/css-mediaquery/index.js\n");

/***/ })

};
;