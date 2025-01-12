// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'payment_links',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{paymentLink}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{paymentLink}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{paymentLink}/line_items',
    methodType: 'list',
  }),
});
