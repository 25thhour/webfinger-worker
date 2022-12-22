/**
 * Copied from https://hachyderm.io/.well-known/webfinger?resource=acct:jwdn@hachyderm.io
 */

export const webfinger = {
  subject: "acct:jwdn@hachyderm.io",
  aliases: ["https://hachyderm.io/@jwdn", "https://hachyderm.io/users/jwdn"],
  links: [
    {
      rel: "http://webfinger.net/rel/profile-page",
      type: "text/html",
      href: "https://hachyderm.io/@jwdn",
    },
    {
      rel: "self",
      type: "application/activity+json",
      href: "https://hachyderm.io/users/jwdn",
    },
    {
      rel: "http://ostatus.org/schema/1.0/subscribe",
      template: "https://hachyderm.io/authorize_interaction?uri={uri}",
    },
  ],
};
