'use strict';
/* global describe, it */

const assert = require('assert');
const app = require('../../../index');

describe('Candidate Model', () => {
    it('should exist', () => {
        assert(app.api.models['Candidate']);
    });
});
