import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './hello';
import '../../jestConfig/setupTests';
// 默认给我一个热情
it('renders the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});
// 设置一个热情
it('renders the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});
// 设置5个热情
it('renders the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});
// 热情为 0 抛出错误
it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
  }).toThrow();
});
// 热情值为负也要抛出错误
it('throws when the enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});
