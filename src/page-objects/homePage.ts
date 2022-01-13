import { By, PageElement } from '@serenity-js/web'

export const homePage = {
  signIn: () =>
    PageElement.located(
      By.css('.login')
    

    ),
}



