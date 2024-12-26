import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('Testing sum function with positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5, 'Expected sum(2, 3) to equal 5');
});

test('Testing sum function with negative numbers', () => {
  assert.strictEqual(sum(-2, -3), -5, 'Expected sum(-2, -3) to equal -5');
});

test('Testing sum function with mixed positive and negative numbers', () => {
  assert.strictEqual(sum(5, -3), 2, 'Expected sum(5, -3) to equal 2');
});

test('Testing sum function with zero', () => {
  assert.strictEqual(sum(0, 0), 0, 'Expected sum(0, 0) to equal 0');
  assert.strictEqual(sum(0, 5), 5, 'Expected sum(0, 5) to equal 5');
});
