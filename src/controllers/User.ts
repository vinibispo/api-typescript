import { Request, Response } from 'express'

class UserController {
  index (req: Request, res: Response) {
    return res.send('Hello')
  }
}

const userController = new UserController()

export { userController }
