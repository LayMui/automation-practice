import { Duration, Task } from '@serenity-js/core'
import { Click, Enter, isVisible, Scroll, Select, Wait } from '@serenity-js/web'
import { DOB } from '../page-objects/DOB'
import { registrationPage } from '../page-objects/registrationPage'

export const FillUp = {
  registrationForm: () =>
    Task.where(
      `#actor want to fill up the registration form`,
      Scroll.to(registrationPage.titleMr()),
      Wait.upTo(Duration.ofMilliseconds(500000)).until(
        registrationPage.titleMr(),
        isVisible()
      ),

      Click.on(registrationPage.titleMr()),
      Enter.theValue('LayMui').into(registrationPage.firstName()),
      Enter.theValue('Toh').into(registrationPage.lastName()),
      Click.on(DOB.dropDownDays),
      Select.option('1').from(DOB.days),
      Click.on(DOB.dropDownMonths),
      Select.option('January').from(DOB.months),
      Click.on(DOB.dropDownYears),
      Select.option('2022').from(DOB.years)
      ),
}
