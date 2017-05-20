import { Ang4MaterialPage } from './app.po';

describe('ang4-material App', () => {
  let page: Ang4MaterialPage;

  beforeEach(() => {
    page = new Ang4MaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
