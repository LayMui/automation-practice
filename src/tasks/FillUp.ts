import { Duration, Log, Task } from '@serenity-js/core'
import { Select } from '@serenity-js/web'
import { Click, Enter, isVisible, Wait } from '@serenity-js/webdriverio'
import { registrationPage } from '../page-objects/registrationPage'

export const FillUp = {
    

  registrationForm: () => 
    Task.where(
      `#actor want to fill up the registration form`,
      Wait.upTo(Duration.ofMilliseconds(5000000)).until(
        registrationPage.titleMr(),
        isVisible()
      ),

      Click.on(registrationPage.titleMr()),
      Enter.theValue('LayMui').into(registrationPage.firstName()),
      Enter.theValue('Toh').into(registrationPage.lastName()),
      Select.value('1').from(registrationPage.DOBdays())
      
    ),

}
