import { getServerSession } from "next-auth";
import ExistingTranscations from "../../../components/existingTranscations";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

async function getTranscations() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session.user.id),
    },
    select: {
      id: true,
      amount: true,
      timestamp: true,
      toUser: {
        select: {
          name: true,
          number: true,
        },
      },
      fromUser: {
        select: {
          name: true,
          number: true,
        },
      },
    },
  });
  return txns.map((t) => ({
    id: t.id,
    amount: t.amount,
    timestamp: t.timestamp,
    toUser: t.toUser,
    fromUser: t.fromUser,
  }));
}

export default async function () {
  const transactions = await getTranscations();

  return (
    <div className="w-full m-2">
      <ExistingTranscations transactions={transactions} />
    </div>
  );
}
