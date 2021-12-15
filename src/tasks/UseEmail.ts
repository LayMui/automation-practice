import { Task } from '@serenity-js/core'
import { Click, Enter, isVisible, Wait } from '@serenity-js/webdriverio'
import { accountPage } from '../page-objects/accountPage'


export const UseEmail = {
  forNewAccount: (email: string) =>
    Task.where(
      `#actor wants to use email ${email} to create an account`,
      Wait.until(accountPage.emailInput(), isVisible()),
      Enter.theValue(email).into(accountPage.emailInput()),
      Click.on(accountPage.submitButton())
    ),
}
