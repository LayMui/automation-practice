import { Duration, Log, Task } from '@serenity-js/core'
import { By, PageElement, Select } from '@serenity-js/web'
import { Click, Enter, isVisible, Wait } from '@serenity-js/webdriverio'
import { registrationPage } from '../page-objects/registrationPage'


// class DOB {
//   static days = PageElement.located(By.id('days')).describedAs('days')
//   static months = PageElement.located(By.id('months')).describedAs('months')
//   static years = PageElement.located(By.id('years')).describedAs('years')
// }



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
     Enter.theValue('Toh').into(registrationPage.lastName()),
 //    Select.value('1').from(DOB.days())
 )
   


}
