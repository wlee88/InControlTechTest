import { InControlTechnicalChallengePage } from './app.po';

describe('in-control-technical-challenge App', () => {
  let page: InControlTechnicalChallengePage;

  beforeEach(() => {
    page = new InControlTechnicalChallengePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
