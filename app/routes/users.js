import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      name: "Brent Schooley",
      twitter: "@brentschooley"
    }, {
      name: "Sam Agnew",
      twitter: "@sagnewshreds"
    }, {
      name: "Eddie Zaneski",
      twitter: "@eddiezane"
    }];
  }
});
