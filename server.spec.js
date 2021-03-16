const request = require('supertest')
const app = require('./app')

describe('Server', () => {
  it('should fetch all products', async () => {
    const res = await request(app).get('/api/v1/products')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveLength(4)
  })

  it('should fetch a single product', async () => {
    const postId = '60508b013d14ab54f9c33be6'
    const res = await request(app).get(`/api/v1/products/${postId}`)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('styleId')
    done()
  })
})
