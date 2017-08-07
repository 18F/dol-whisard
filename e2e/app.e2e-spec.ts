import { DolWhisardPage } from './app.po'

describe('dol-whisard App', () => {
  let page: DolWhisardPage

  beforeEach(() => {
    page = new DolWhisardPage()
  })

  it('should display welcome message', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('Welcome to app!')
  })
})
