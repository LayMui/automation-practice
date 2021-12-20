import { Question } from '@serenity-js/core'
import { by, Target, Text } from '@serenity-js/webdriverio'
import { Element } from 'webdriverio'
import { includes } from '@serenity-js/assertions'

export const authenticationPage = {
  emailInput: () => Target.the('email field').located(by.id('email_create')),
  submitButton: () =>
    Target.the('submit button').located(by.id('SubmitCreate')),

  accountHeading: (headingText: string): Question<Promise<Element<'async'>>> => {
    return Target.all('heading')
      .located(by.css('.page-subheading'))
      .where(Text, includes(headingText))
      .first()
  },
}



