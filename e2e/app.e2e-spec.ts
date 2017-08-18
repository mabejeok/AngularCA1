import { CA1Page } from './app.po';

describe('ca1 App', () => {
  let page: CA1Page;

  beforeEach(() => {
    page = new CA1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
