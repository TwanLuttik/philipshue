import nc from 'node-cache';

// Init node-cache
const CACHE = new nc({ checkperiod: 120 });

const GET = (key: any ) => {
  return CACHE.get(key);
}

const SET = async (key: any, value: any) => {
  return await CACHE.set(key, value);
}

const DELETE = (key: any) => {
  return CACHE.del(key);
}