import { test, expect, vi } from 'vitest';
import { speak } from './level1';

test('word passed should be logged', () => {
    const bug = vi.spyOn(console, 'log');
    speak('underneath');
    expect(bug).toHaveBeenCalledWith('underneath');
    bug.mockRestore();
});