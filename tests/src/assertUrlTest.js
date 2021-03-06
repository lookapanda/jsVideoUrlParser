/*jshint unused:false */
function assertUrlTest(assert, tests) {
  /*jshint unused:true */
  tests.forEach(function (test) {
    test.urls.forEach(function (url) {
      assert.deepEqual(window.urlParser.parse(url), test.videoInfo, url);
    });
    for (var format in test.formats) {
      if (test.formats.hasOwnProperty(format)) {
        assert.equal(window.urlParser.create({
          videoInfo: test.videoInfo,
          format: format,
          params: test.videoInfo.params
        }), test.formats[format], JSON.stringify(test.videoInfo));
      }
    }
  });
}
