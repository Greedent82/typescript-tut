import { test, expect, vi } from 'vitest';
import { speak } from './level1';

test('word passed should be logged', () => {
    const bug = vi.spyOn(console, 'log');
    speak('underneath');
    expect(bug).toHaveBeenCalledWith('underneath');
    bug.mockRestore();
});


//why did I make the test for a console log and not a return
// I'm 8 pages deep in vitest documentation and very upset, what is this test lmao AAAAAAAAH 