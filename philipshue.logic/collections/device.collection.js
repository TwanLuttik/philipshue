export default {
  routes: {
    register: (request, body) => request.post('/register', body),
    delete: (request, id) => request.delete(`/${id}`),
    setName: (request, id, body) => request.patch(`/${id}/name`, body),
    getAll: (request) => request.get('/')
  }
}