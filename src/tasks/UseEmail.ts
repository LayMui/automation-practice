import { Task } from '@serenity-js/core'
import { Click, Enter, isVisible, Wait } from '@serenity-js/web'
import { authenticationPage } from '../page-objects/authenticationPage'


export const UseEmail = {
  forNewAccount: (email: string) =>
    Task.where(
      `#actor wants to use email ${email} to create an account`,
      Wait.until(authenticationPage.emailInput(), isVisible()),
      Enter.theValue(email).into(authenticationPage.emailInput()),
      Click.on(authenticationPage.submitButton())
    ),
}
