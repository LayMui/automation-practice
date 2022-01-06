import { By, PageElement } from "@serenity-js/web";


export class DOB {
   static days = PageElement.located(
    By.id('days')
  ).describedAs('days')
  static months= PageElement.located(
    By.id('months')
  ).describedAs('months')
  static years = PageElement.located(
    By.id('years')
  ).describedAs('years')
}

