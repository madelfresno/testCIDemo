'use strict';

var request = require('supertest');
var app = require('../app');

describe('GET /', function () {
    if ('expects HTTP response 200', function (done) {
            request(app)
                .get('/')
                .expect(200, done);
        });
});