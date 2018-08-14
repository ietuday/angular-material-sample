import { Baxture.ErpPage } from './app.po';

describe('baxture.erp App', () => {
  let page: Baxture.ErpPage;

  beforeEach(() => {
    page = new Baxture.ErpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
