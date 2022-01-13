import { Task } from '@serenity-js/core'
import { Click, isVisible, Wait } from '@serenity-js/web'
import { homePage } from '../page-objects/homePage'


export const SignIn = {
  toCreateAccount: () =>
    Task.where(
      `#actor want to sign in`,
      Wait.until(homePage.signIn(), isVisible()),
      Click.on(homePage.signIn())
    ),
}
