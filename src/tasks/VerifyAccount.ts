import { Task } from '@serenity-js/core'
import { isVisible, Wait } from '@serenity-js/webdriverio'
import { accountPage } from '../page-objects/accountPage'

export const VerifyAccount = {
  fillUpForm: () =>
    Task.where(
      `#actor wants to fill up the account form`,
      Wait.until(
        accountPage.accountHeading('Your personal information'),
        isVisible()
      )
    ),
}
