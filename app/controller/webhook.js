'use strict';

const Controller = require('egg').Controller;

class webHookController extends Controller {
    async index() {
        this.ctx.body = 'hi, egg~~~~';
    }
}

module.exports = webHookController;
