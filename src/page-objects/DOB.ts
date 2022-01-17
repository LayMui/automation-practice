import { By, PageElement } from "@serenity-js/web";


export class DOB {
  static days = PageElement.located(By.id('days')).describedAs('days')
  static months = PageElement.located(By.id('months')).describedAs('months')
  static years = PageElement.located(By.id('years')).describedAs('years')

  static dropDownDays = PageElement.located(By.id('uniform-days')).describedAs(
    'dropDownDays'
  )
  static dropDownMonths = PageElement.located(
    By.id('uniform-months')
  ).describedAs('dropDownMonths')
  static dropDownYears = PageElement.located(
    By.id('uniform-years')
  ).describedAs('dropDownYears')
}

