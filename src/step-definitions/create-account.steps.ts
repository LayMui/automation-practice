import 'expect-webdriverio'

import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import { Actor, actorInTheSpotlight, Log } from '@serenity-js/core'
import { Navigate } from '@serenity-js/webdriverio'
import { SignIn } from '../tasks/signIn'
import { UseEmail } from '../tasks/UseEmail'
import { VerifyAccount } from '../tasks/VerifyAccount'
import { FillUp } from '../tasks/FillUp'
import { registrationPage } from '../page-objects/registrationPage'
import { Select } from '@serenity-js/web'


require('dotenv').config()

Given(
  '{actor} is at the Automation Practice site', {timeout: 80000},
  async (actor: Actor) =>
    await actor.attemptsTo(Navigate.to(process.env.AUTOMATION_PRACTICE_BASE_URL), 
    SignIn.toCreateAccount())
)

When(
  '{pronoun} create a new account using email', {timeout: 80000},
  async (actor: Actor, table: DataTable) => {
    const email = table.hashes()[0].email
    await actor.attemptsTo(
      UseEmail.forNewAccount(email),
    )
  }
)

When(
  '{pronoun} fill up the registration form',
  async (actor: Actor, table: DataTable) => {
    const email = table.hashes()[0].email
    await actor.attemptsTo(FillUp.registrationForm())
  }
)


Then('{pronoun} is able to register', async (actor: Actor) => {
  await actor.attemptsTo(Log.the('TODO'))
})
