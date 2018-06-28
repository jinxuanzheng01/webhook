'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/ceshi', controller.webhook.index);
  router.get('/xiaodaka/push', controller.xiaodaka.update);
  router.get('/xiaodaka/pushPost', controller.xiaodaka.updatePost);

};
