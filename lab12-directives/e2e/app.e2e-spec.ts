import { Lab12DirectivesPage } from './app.po';

describe('lab12-directives App', () => {
  let page: Lab12DirectivesPage;

  beforeEach(() => {
    page = new Lab12DirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
