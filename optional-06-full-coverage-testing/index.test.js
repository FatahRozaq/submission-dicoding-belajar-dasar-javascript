import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum with valid positive numbers', () => {
  assert.strictEqual(sum(5, 10), 15, 'Expected sum(5, 10) to equal 15');
  assert.strictEqual(sum(0, 8), 8, 'Expected sum(0, 8) to equal 8');
  assert.strictEqual(sum(3, 0), 3, 'Expected sum(3, 0) to equal 3');
});

test('sum with negative numbers', () => {
  assert.strictEqual(sum(-3, 5), 0, 'Expected sum(-3, 5) to return 0');
  assert.strictEqual(sum(4, -2), 0, 'Expected sum(4, -2) to return 0');
  assert.strictEqual(sum(-6, -7), 0, 'Expected sum(-6, -7) to return 0');
});

test('sum with non-numeric inputs', () => {
  assert.strictEqual(sum('5', 7), 0, 'Expected sum("5", 7) to return 0');
  assert.strictEqual(sum(4, null), 0, 'Expected sum(4, null) to return 0');
  assert.strictEqual(sum(undefined, 2), 0, 'Expected sum(undefined, 2) to return 0');
  assert.strictEqual(sum(true, 5), 0, 'Expected sum(true, 5) to return 0');
});

test('sum with both inputs zero', () => {
  assert.strictEqual(sum(0, 0), 0, 'Expected sum(0, 0) to equal 0');
});

test('sum with edge cases', () => {
  assert.strictEqual(sum(Number.MAX_SAFE_INTEGER, 1), Number.MAX_SAFE_INTEGER + 1, 'Expected sum(MAX_SAFE_INTEGER, 1) to work correctly');
  assert.strictEqual(sum(Number.MIN_SAFE_INTEGER, 1), 0, 'Expected sum(MIN_SAFE_INTEGER, 1) to return 0 (due to negative input)');
});
