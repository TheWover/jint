// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
es5id: 13.2.1_L15
description: >
    Tests that Number.prototype.toLocaleString meets the requirements
    for built-in objects defined by the introduction of chapter 17 of
    the ECMAScript Language Specification.
author: Norbert Lindenberg
includes: [isConstructor.js]
features: [Reflect.construct]
---*/

assert.sameValue(Object.prototype.toString.call(Number.prototype.toLocaleString), "[object Function]",
                 "The [[Class]] internal property of a built-in function must be " +
                 "\"Function\".");

assert(Object.isExtensible(Number.prototype.toLocaleString),
       "Built-in objects must be extensible.");

assert.sameValue(Object.getPrototypeOf(Number.prototype.toLocaleString), Function.prototype);

assert.sameValue(Number.prototype.toLocaleString.hasOwnProperty("prototype"), false,
                 "Built-in functions that aren't constructors must not have a prototype property.");

assert.sameValue(isConstructor(Number.prototype.toLocaleString), false,
                 "Built-in functions don't implement [[Construct]] unless explicitly specified.");