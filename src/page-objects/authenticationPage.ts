import { By, PageElement, Text } from '@serenity-js/web'
import { heading } from './heading'
import { includes } from '@serenity-js/assertions'

export const authenticationPage = {
  emailInput: () => PageElement.located(By.id('email_create')),
  submitButton: () => PageElement.located(By.id('SubmitCreate')),

  accountHeading: (headingText: string) =>
    heading.accountCreation().where(Text, includes(headingText)).first(),
}






