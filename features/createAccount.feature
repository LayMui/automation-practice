
Feature: Create Account

  In order to sign in to start shopping
  As a shopper Alice
  Alice wants to create a new account

  Background:
    Given Alice is at the Automation Practice site
@test
  Scenario: Able to create a new account
    When she create a new account using email
    | email                  |
    | siow_chan@hotmail.com  |
    Then she able to see the fill up form
  

  