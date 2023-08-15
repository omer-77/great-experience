// NOTE : this basic auth method used on next server side
// since (fakestoreapi.com) auth Api is not stable

import { NextApiRequest, NextApiResponse } from "next";

const AUTHORIZED_USER_DATA = {
  username: "omer",
  password: "12345",
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  
  if (body.username === AUTHORIZED_USER_DATA.username && body.password === AUTHORIZED_USER_DATA.password) {
    res.status(200).json({
      message: "User Logged In",
    });
  }

  res.status(401).json({
    message: "Username or Password Is Wrong.",
  });
};

export default handler;
