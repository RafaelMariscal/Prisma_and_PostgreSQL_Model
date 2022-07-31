// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handleUpdate(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({
      message: 'Method not allowed. Required method PUT'
    })
  }
  console.log(req)
  try {
    const { user } = req.body
    const id = user.id
    const updatedUser = await prisma.user.update({
      where: { id },
      data: user
    })
    res.status(200).json(updatedUser)
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' })
  }

}