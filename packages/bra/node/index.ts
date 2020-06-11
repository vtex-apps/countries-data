import { Service, method } from '@vtex/api'

import validateDocument from './middlewares/validateDocument'

export default new Service({
  routes: {
    validateDocument: method({ GET: [validateDocument] }),
  },
})
