import { by, Target } from '@serenity-js/webdriverio'

export const homePage = {
  signIn: () =>
    Target.the('sign in link').located(
      by.css('a[title="Log in to your customer account"]')
    ),
}



