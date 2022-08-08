/**
 * @description 93-复原 IP 地址 test
 * @author 氧化氢
 */

import restoreIpAddresses from './index';

describe('93-复原 IP 地址', () => {
  test('测试用例一', () => {
    const s = "25525511135"
    expect(restoreIpAddresses(s)).toEqual(["255.255.11.135", "255.255.111.35"])
  })
  test('测试用例二', () => {
    const s = "0000"
    expect(restoreIpAddresses(s)).toEqual(['0.0.0.0'])
  })
  test('测试用例三', () => {
    const s = "101023"
    expect(restoreIpAddresses(s)).toEqual(["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"])
  })
})