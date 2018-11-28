import dotProp from 'dot-prop-immutable';

export default () => {
  console.log('test excute');

  const data = {
    foo: {
      bar: 'unicorn',
      dot: {
        dot: 'dogg'
      },
      'abc.def': 'abcdefg'
    },
    arr: [
      {
        bar: 'gold-unicorn'
      },
      'white-unicorn'
    ]
  }

  // getter
  console.log('1', dotProp.get(data, 'foo.bar')); // 'unicorn'
  console.log('2', dotProp.get(data, 'foo.bar2', 'default value')); //'default value'
  console.log('3', dotProp.get(data, ['foo', 'dot'])); // { dot: 'dogg' }
  console.log('4', dotProp.get(data, 'foo.abc\\.def')); // 'abcdefg'
  console.log('5', dotProp.get(data, ['foo', 'abc.def'])); // 'abcdefg'
  console.log('6', dotProp.get(data, 'arr.1')); // 'white-unicorn'
  console.log('7', dotProp.get(data, 'arr.0.bar')); // 'gold-unicorn'
  console.log('8', dotProp.get(data.arr, '0.bar')); // 'gold-unicorn'

  // setter
  const immutableObjFoo = dotProp.set(data, 'foo.dot', {dot: 'catt'});
  console.log(immutableObjFoo);
}
