import { StudentsAppPage } from './app.po';

describe('students-app App', function() {
  let page: StudentsAppPage;

  beforeEach(() => {
    page = new StudentsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
