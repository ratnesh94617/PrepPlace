import { ApplicationCrudModel } from '../model'
import { ResponseBody } from '../helper'

const ApplicationController = {
  register,
  logIn
}

async function search (req, res, next) {
  const { body } = req
  const data = await ApplicationCrudModel.searchUsers(body)
  const { message } = data
  const responseBody = new ResponseBody(201, message, data)

  console.log(message)
}

async function logIn (req, res, next) {
  const { body } = req
  const data = await Credentials.logIn(body)
  const { message } = data
  console.log(message)
}

export default ApplicationController
