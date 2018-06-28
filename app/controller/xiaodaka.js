'use strict';

const Controller = require('egg').Controller;

class xiaodakaController extends Controller {
    async index() {
        this.ctx.body = 'hi, home';
    }

    async update(){
        const { ctx, service } = this;

        console.log(ctx.body);
    }
}

module.exports = xiaodakaController;
