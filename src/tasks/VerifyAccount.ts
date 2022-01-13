import { Duration, Task } from '@serenity-js/core'
import { Wait } from '@serenity-js/web'
import { authenticationPage } from '../page-objects/authenticationPage'

export const VerifyAccount = {
  fillUpForm: () =>
    Task.where(
      `#actor wants to fill up the account form`,
      // Wait.upTo(Duration.ofMilliseconds(5000000)).until(
      //   authenticationPage.accountHeading('Your personal information'),
      //   isVisible()
     // )
    ),
}
