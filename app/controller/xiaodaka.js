'use strict';

const Controller = require('egg').Controller;

class xiaodakaController extends Controller {
    async index() {
        this.ctx.body = 'hi, home';
    }

    async update(){
        console.log('----===卡卡看看',this.ctx.query);
        this.ctx.body = 'get';
    }
    async updatePost(){
        console.log('----===卡卡看看',this.ctx.request.body);
        this.ctx.body = 'post';
    }

}

module.exports = xiaodakaController;
