const Router = require('koa-router')

const {
  register,
  getUserList,
  getAllUserList,
  getUserRole,
  updateUserRole,
} = require('../controller/userManage.controller')

const router = new Router()

// 注册接口
router.post('/sys/register', register)

// 获取员工列表
router.get('/user-manage/list', getUserList)

// 获取所有员工列表
router.get('/user-manage/all-list', getAllUserList)

// 获取指定员工当前角色
router.get('/user-manage/role/:id', getUserRole)

// 更新用户角色
router.post('/user-manage/update-role/:userId', updateUserRole)

module.exports = router
