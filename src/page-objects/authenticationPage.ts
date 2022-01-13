import { Question } from '@serenity-js/core'
import { Element } from 'webdriverio'
import { includes } from '@serenity-js/assertions'
import { By, PageElement, PageElements } from '@serenity-js/web'

export const authenticationPage = {
  emailInput: () => PageElement.located(By.id('email_create')),
  submitButton: () => PageElement.located(By.id('SubmitCreate')),

  // accountHeading: (
  //   headingText: string
  // ): Question<Promise<Element<'async'>>> => {
  //   return PageElements.located(By.css('.account_creation')
  //     .where(Text, includes(headingText))
  //     .first()
  // },


}





