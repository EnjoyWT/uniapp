
import { createRouter, useRouter, useRoute } from '$uni-router'
import pages from '@/pages.json'

const router = createRouter({
  pages,
  addRoutes: [
    {
      path: '*',
      redirect: () => {
        return { path: '/404' }
      },
    },
  ],
})


export {
  router,
  useRouter, 
  useRoute
}