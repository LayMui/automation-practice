import 'expect-webdriverio'

import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import { Actor, Log } from '@serenity-js/core'

import { SignIn } from '../tasks/signIn'
import { UseEmail } from '../tasks/UseEmail'
import { FillUp } from '../tasks/FillUp'
import { Navigate, Select } from '@serenity-js/web'
import { DOB } from '../page-objects/DOB'

require('dotenv').config()

Given(
  '{actor} is at the automation practice site',
  { timeout: 80000 },
  async (actor: Actor) =>
    await actor.attemptsTo(
      Navigate.to(process.env.AUTOMATION_PRACTICE_BASE_URL),
      SignIn.toCreateAccount()
    )
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
  async (actor: Actor) => { 
    await actor.attemptsTo(
      FillUp.registrationForm(),
      Select.value('1').from(DOB.days)
    )
  }
)


Then('{pronoun} is able to register', async (actor: Actor) => {
  await actor.attemptsTo(Log.the('TODO'))
})
