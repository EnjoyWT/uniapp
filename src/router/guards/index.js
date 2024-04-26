
import permission from './permission/index.js'

export default (app, router) => {
  permission(router, { app })
}
