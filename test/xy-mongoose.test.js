'use strict';

const mock = require('egg-mock');

describe('test/xy-mongoose.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/xy-mongoose-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, xyMongoose')
      .expect(200);
  });
});
