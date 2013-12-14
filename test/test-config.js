// Note that both mocha and sinon do NOT play well with AMD, and are included 
// in the loading test pages.  As a result, it really makes for cleaner code to
// just load most of this in boilerplate in the test page, via script tags.

require.config({
  'paths': {
    // test
    'squire': '../bower_components/squire/src/Squire',
    'chai': '../bower_components/chai/chai',
    'chai-backbone': '../bower_components/chai-backbone/chai-backbone',
    'sinon-chai': '../bower_components/sinon-chai/lib/sinon-chai',
    'chai-jquery': '../bower_components/chai-jquery/chai-jquery'
  }
});