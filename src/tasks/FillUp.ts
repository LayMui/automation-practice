import { Log, Task } from '@serenity-js/core'
import { Click, isVisible, Wait } from '@serenity-js/webdriverio'
import { homePage } from '../page-objects/homePage'

export const FillUp = {
  registrationForm: () =>
    Task.where(
      `#actor want to fill up the registration form`,
         Wait.until(homePage.signIn(), isVisible()),
      Click.on(homePage.signIn()))
    
}
