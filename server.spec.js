const request = require('supertest')
const server = require('./server')

describe('Server', () => {
  afterEach(() => server.close())
  it('should fetch all products', async done => {
    const res = await request(server).get('/api/v1/products')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveLength(4)
    done()
  })

  it('should fetch a single product', async done => {
    const postId = '60508b013d14ab54f9c33be6'
    const res = await request(server).get(`/api/v1/products/${postId}`)
    expect(res.statusCode).toEqual(200)
    expect(res.body._id).toBe('60508b013d14ab54f9c33be6')
    done()
  })
})
