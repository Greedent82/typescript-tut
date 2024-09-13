import { test, expect, vi } from 'vitest';
import { createPerson, Person } from './level3';

test('best of luck!', () => {
    const person: Person = createPerson('Delta', 124);
    expect(person).toEqual({ name: 'Delta', age: 124 });
});