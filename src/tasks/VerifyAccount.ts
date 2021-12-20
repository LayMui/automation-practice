import { Task } from '@serenity-js/core'
import { isVisible, Wait } from '@serenity-js/webdriverio'
import { authenticationPage } from '../page-objects/authenticationPage'

export const VerifyAccount = {
  fillUpForm: () =>
    Task.where(
      `#actor wants to fill up the account form`,
      Wait.until(
        authenticationPage.accountHeading('Your personal information'),
        isVisible()
      )
    ),
}
