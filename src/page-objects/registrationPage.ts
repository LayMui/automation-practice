import { By, PageElement } from '@serenity-js/web'


export const registrationPage = {
  title: (gender: string) => {
    switch (gender) {
      case 'Mr':
        PageElement.located(By.id('uniform-id_gender1'))
        break

      case 'Mrs':
        PageElement.located(By.id('uniform-id_gender2'))
        break
    }
  },

  titleMr: () => PageElement.located(By.id('uniform-id_gender1')),

  titleMrs: () => PageElement.located(By.id('uniform-id_gender2')),

  firstName: () => PageElement.located(By.id('customer_firstname')),

  lastName: () => PageElement.located(By.id('customer_lastname')),

  password: () => PageElement.located(By.id('passwd')),



}
