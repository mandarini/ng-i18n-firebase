# Deeplinks in Angular Firebase with i18n

Issue with i18n on Firebase Hosting with Angular.

1. Navigate to [https://ng-i18n-deeplinks.web.app](https://ng-i18n-deeplinks.web.app).

2. Click the "English" or "Greek" buttons.

3. Each button navigates to `/en` or `/el` respectively.

4. Should show each language, it does not.

Clearly I have misconfigured something. I just cannot find what I have misconfigured.

How to reproduce:

1. Clone this repo.
2. `npm install`
3. `nx build`
4. `nx deploy`

You will not be able to deploy, obviously, but you can see at least the build output.

You can see the firebase hosting settings in my [`firebase.json`](firebase.json) file.

You can see the i18n settings in my [`project.json`](project.json) file.

You can see the routing settings in my [`src/app/app.routes.ts`](src/app/app.routes.ts) file.

## Note

This project was created with Nx, but I am facing the same issue in a pure Angular app (generated with `ng new`) as well. [Here](https://github.com/mandarini/ng-deeplinks-i18n) is the pure Angular example.
