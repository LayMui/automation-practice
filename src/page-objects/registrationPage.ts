import { By, PageElement } from '@serenity-js/web'
import { by, Target } from '@serenity-js/webdriverio'


export const registrationPage = {
  title: (gender: string) => {
    switch (gender) {
      case 'Mr':
        Target.the('title radio button').located(by.id('uniform-id_gender1'))
        break

      case 'Mrs':
        Target.the('title radio button').located(by.id('uniform-id_gender2'))
        break
    }
  },

  titleMr: () =>
    Target.the('title Mr radio button').located(by.id('uniform-id_gender1')),

  titleMrs: () =>
    Target.the('title Mrs radio button').located(by.id('uniform-id_gender2')),

  firstName: () =>
    Target.the('first name field').located(by.id('customer_firstname')),

  lastName: () =>
    Target.the('last name field').located(by.id('customer_lastname')),

  password: () => Target.the('password field').located(by.id('passwd')),

  // DOBdays: () =>  PageElement.located(By.id('days')),
 
  DOBDaysUsingTarget: () => Target.the('DOB days field').located(by.id('days')),
 // DOBMonths: () => Target.the('DOB months field').located(by.id('months')),
 // DOBYears: () => Target.the('DOB years field').located(by.id('years')),



}
