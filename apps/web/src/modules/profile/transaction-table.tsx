import React from "react";
import { Table } from "@repo/ui/components";
import { V1TransactionByWallet } from "@repo/api-lib";

function TransactionTable({
  transactions,
}: {
  transactions: V1TransactionByWallet;
}) {
  const rows = transactions.results.map((transaction) => (
    <tr key={transaction.hash}>
      <td>{transaction.category}</td>
      <td>{transaction.from_address}</td>
      <td>{transaction.to_address}</td>
      <td>{transaction.hash}</td>
    </tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table mt="md">
        <thead>
          <tr>
            <th>Category</th>
            <th>To</th>
            <th>From</th>
            <th>Hash</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center", marginBottom: 10 }}>
                No transactions found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Table.ScrollContainer>
  );
}

export default TransactionTable;
