import { Card } from "@repo/ui/card";

export default function ({
  transactions,
}: {
  transactions: {
    id: number;
    amount: number;
    timestamp: Date;
    toUser: {
      name: string | null;
      number: string;
    };
    fromUser: {
      name: string | null;
      number: string;
    };
  }[];
}) {
  if (!transactions.length) {
    return (
      <Card title="Transactions">
        <div className="text-center pb-8 pt-8">No Transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Transactions">
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">
                {t.fromUser.name} To {t.toUser.name}
              </div>
              <div className="text-slate-600 text-xs">{t.timestamp.toDateString()}</div>
            </div>
            <div className="flex flex-col justify-center">+ Rs {t.amount / 100}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
