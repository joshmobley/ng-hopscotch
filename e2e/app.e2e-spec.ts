import { NgHopscotchPage } from './app.po';

describe('ng-hopscotch App', () => {
  let page: NgHopscotchPage;

  beforeEach(() => {
    page = new NgHopscotchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
