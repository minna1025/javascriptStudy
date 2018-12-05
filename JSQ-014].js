function getLogger(namespace) {
  // 나만의 logger 함수를 리턴
  // console.log(namespace)
};

var debug = getLogger('[DEBUG]');
debug('hello', 'world'); //> [DEBUG] hello world
var test = getLogger('[TEST]');
test('hello', 'world'); //> [TEST] hello world