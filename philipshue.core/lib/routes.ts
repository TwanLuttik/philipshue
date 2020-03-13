enum m {
  get = 'get',
  post = 'post',
  patch = 'patch',
  put = 'put',
  delete = 'delete'
}

const PRE_LIGHTS = '/api/<username>/lights/';
const PRE_GROUPS = '/api/<username>/groups/';

export const lights = {
  GET_ALL: { method: m.get, path: PRE_LIGHTS + '' },
  GET_NEW: { method: m.get, path: PRE_LIGHTS + 'new' },
  SEARCH: { method: m.post, path: PRE_LIGHTS + '' },
  GET_ATTRIBUTES: { method: m.get, path: PRE_LIGHTS + '<id>' },
  SET_ATTRIBUTES: { method: m.put, path: PRE_LIGHTS + '<id>' },
  SET_LIGHT_STATE: { method: m.put, path: PRE_LIGHTS + '<id>/state' },
  DELETE: { method: m.delete, path: PRE_LIGHTS + '<id>'}
}

export const groups = {
  GET_ALL: { method: m.get, path: PRE_GROUPS + '' },
  CREATE: { method: m.post, path: PRE_GROUPS + '' },
  GET_ATTRIBUTES: { method: m.get, path: PRE_GROUPS + '<id>'},
  SET_ATTRIBUTES: { method: m.put, path: PRE_GROUPS + '<id>' },
  SET_STATE: { method: m.put, path: PRE_GROUPS + '<id>/action' },
  DELETE: { method: m.delete, path: PRE_GROUPS + '<id>' }
}

export const bridge = {
  API: { method: m.post, path: '' }
}