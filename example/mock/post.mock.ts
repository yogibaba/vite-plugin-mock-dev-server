import post from './data/post'
import { defineAPIMock } from './shard'

/**
 * 定义单个接口
 */
export const fetchPostList = defineAPIMock({
  url: '/post/list',
  method: 'POST',
  body({ body }) {
    return {
      code: 200,
      msg: 'success',
      result: {
        page: body.page,
        total: 10,
        list: [...post],
      },
    }
  },
})
