import { By, PageElements } from "@serenity-js/web"

export class heading {
   static accountCreation = () =>
     PageElements.located(By.css('.account_creation')).describedAs(
       'heading for account creation'
     )
}

 
