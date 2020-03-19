import DEVICE_DB from '../database/device.db'

const ADD = (req: any, res: any) => {
  DEVICE_DB.ADD(req.body.id)
    .then((e) => {
      return res.status(200).json({
        message: 'Device added'
      })
    })
    .catch((e) => {
      return res.status(400).json({
        error: {
          code: e
        }
      });
    })
}

const REMOVE = (req: any, res: any) => {
  DEVICE_DB.REMOVE(req.params.id)
    .then((e) => {
      return res.status(200).json({
        message: 'Device removed'
      })
    })
    .catch((e) => {
      return res.status(400).json({
        error: {
          code: e
        }
      });
    })
}

const SET_NAME = (req: any, res: any) => {
  DEVICE_DB.SET_NAME(req.params.id, req.params.name)
    .then((e) => {
      return res.status(200).json({
        message: 'Device name set'
      })
    })
    .catch((e) => {
      return res.status(400).json({
        error: {
          code: e
        }
      });
    })
};

const GET_ALL = (req: any, res: any) => {
  DEVICE_DB.GET_ALL()
    .then((e) => {
      return res.status(200).json({
        data: e
      })
    })
    .catch((e) => {
      return res.status(400).json({
        error: {
          code: e
        }
      });
    })
}

export default {
  ADD,
  REMOVE,
  SET_NAME,
  GET_ALL
}