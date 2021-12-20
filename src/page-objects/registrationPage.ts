import { by, Target } from '@serenity-js/webdriverio'

export const registrationPage = {
  title: () =>
    Target.the('title radio button').located(by.id('uniform-id_gender1')),

  firstName: () =>
    Target.the('first name field').located(by.id(' customer_firstname')),


  lastName: () =>
    Target.the('last name field').located(by.id(' customer_firstname')),

}