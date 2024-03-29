import { NextApiRequest, NextApiResponse } from "next";
import { pusherServer } from "@/app/libs/pusher";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/libs/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const data = {
    user_id: session.user.email,
  };

  const auth = pusherServer.authorizeChannel(socketId, channel, data);

  return res.send(auth);
}
