import { LoggedInGuard } from './logged-in.guard';

describe('LoggedInGuard', () => {
  it('should be defined', () => {
    expect(new LoggedInGuard()).toBeDefined();
  });
});
