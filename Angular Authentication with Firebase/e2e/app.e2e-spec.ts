import { AngularfirebaseauthPage } from './app.po';

describe('angularfirebaseauth App', () => {
  let page: AngularfirebaseauthPage;

  beforeEach(() => {
    page = new AngularfirebaseauthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
