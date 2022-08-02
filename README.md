# Snowboard App Client

This is a client for our snowboard app. It will allow users to see and create new snowboards, as well as edit them, and add boots for their snowboards.

## User Stories

* As a user, I want to be able to create an account.
* As a user, I want to be able to sign in.
* As a user, I want to be able to sign out.
* As a user, I want to be able to change my password.
* As a user, I want to be able to see all snowboards.
* As a user, I want to be able to see information about a specific snowboard.
* As a user, I want to be able to create a new snowboard.
* As a user, I want to be able to update my snowboards.
* As a user, I want to be able to delete my snowboards.
* As a user, I want to be able to create a boot.
* As a user, I want to be able to give boots to any snowboard.
* As a user, I want to be able to update my snowboard's boots.
* As a user, I want to be able to delete my snowboard's boots.

## Views

### User Views

| Route | Description | 
| ----- | ------------|
| /sign-up | allows users to create a new account |
| /sign-in | allows users to sign into their account |
| /sign-out | allows users to sign out of their account |
| /chang-password | allows users to change their password |

## Snowboard Routes

### Snowboard route table

| Verb | URI Pattern | Controller#Action | 
| ----- | ------------| -----------------|
| GET   | /snowboards | snowboards#index |
| GET   | /snowboards/:id | snowboards#show |
| POST  | /snowboards | snowboards#create |
| PATCH | /snowboards/:id | snowboards#update |
| DELETE | /snowboards/:id | snowboards#delete

Snowboard show page will have a modal for updating.
Users will be able to delete via the show page.
Snowboard show page will also allow updating and deleting boots.


## Boots Routes

### Boots route table

| Verb | URI Pattern | Controller#Action |
| ----- | ------------| ----------------- |
| POST | /boots/:snowboardId | boots#create |
| PATCH | /boots/snowboardId/:bootId | boots#update |
| DELETE | /boots/:snowboardId/:bootId | boots#delete |


### WireFrames

Those should go here.
