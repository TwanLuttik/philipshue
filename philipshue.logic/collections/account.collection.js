export default {
  data: {
    test: 2
  },
  routes: {
    create: (request, body) => request.post('/account/create', body),
    login: (request, body) => request.post('/account/login', body),
  },
  actions: {
    
  }
}