import { Duration, Task } from '@serenity-js/core'
import { Click, Enter, isVisible, Wait } from '@serenity-js/web'
import { registrationPage } from '../page-objects/registrationPage'

export const FillUp = {
    
  registrationForm: () => 
    Task.where(
      `#actor want to fill up the registration form`,
      Wait.upTo(Duration.ofMilliseconds(50000)).until(
        registrationPage.titleMr(),
        isVisible()
      ),

     Click.on(registrationPage.titleMr()),
     Enter.theValue('LayMui').into(registrationPage.firstName()),
     Enter.theValue('Toh').into(registrationPage.lastName())
 //    Select.value('1').from(DOB.days())
 )
   


}
