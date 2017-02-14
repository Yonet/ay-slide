import { AySlidePage } from './app.po';

describe('ay-slide App', function() {
  let page: AySlidePage;

  beforeEach(() => {
    page = new AySlidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
