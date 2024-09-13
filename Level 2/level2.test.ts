import { test, expect, vi } from 'vitest';
import { array } from './level2';

test('array gaming', () => {
    let result = array();
    expect(result).toEqual(["Sydney", "Dallas", "Warsaw"]);
});