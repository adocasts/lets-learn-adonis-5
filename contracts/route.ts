declare module '@ioc:Adonis/Core/Route' {
  interface RouteContract {
    mustBeSigned(): this
  }

  interface RouteGroupContract {
    mustBeSigned(): this
  }

  interface BriskRouteContract {
    goHome(): this
  }

  interface RouteResourceContract {
    mustBeSigned(): this
  }

  interface RouteMatchersContract {
    alphaString(): { match: RegExp }
  }
}