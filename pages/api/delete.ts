// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handleDelete(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.body
    if (!id) {
      res.json({ error: "This method require an UserId" })
      return
    }

    const user = await prisma.user.delete({
      where: { id }
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ message: "Something went wrong!" })
  }
}