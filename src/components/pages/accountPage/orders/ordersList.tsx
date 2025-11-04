export function OrdersList() {
  return (
    <>
      <table className="hidden md:table">
        <thead>
          <tr className="bg-muted">
            <th scope="col" className="rounded-l-2xl px-4 py-2 text-start">
              Order ID
            </th>
            <th scope="col" className="px-4 py-2 text-start">
              Date
            </th>
            <th scope="col" className="px-4 py-2 text-start">
              Status
            </th>
            <th scope="col" className="px-4 py-2 text-start">
              Total
            </th>
            <th scope="col" className="rounded-r-2xl px-4 py-2 text-start">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="font-lato">
          <tr>
            <td className="px-4 pt-[30px]">#1357</td>
            <td className="px-4 pt-[30px]">March 15, 2021</td>
            <td className="px-4 pt-[30px]">Processing</td>
            <td className="px-4 pt-[30px]">Total</td>
            <td className="px-4 pt-[30px]">View</td>
          </tr>
        </tbody>
      </table>
      <div className="md:hidden">
        <div className="flex flex-col rounded-xl border border-border p-2.5">
          <div className="mb-2.5 flex justify-between gap-4 border-b border-b-border pb-2">
            <div>Order ID</div>
            <div>#1357</div>
          </div>
          <div className="mb-2.5 flex justify-between gap-4 border-b border-b-border pb-2">
            <div>Date</div>
            <div>March 15, 2021</div>
          </div>
          <div className="mb-2.5 flex justify-between gap-4 border-b border-b-border pb-2">
            <div>Order ID</div>
            <div>Processing</div>
          </div>
          <div className="mb-2.5 flex justify-between gap-4 border-b border-b-border pb-2">
            <div> Total</div>
            <div>Total</div>
          </div>
          <div className="mb-2.5 flex justify-between gap-4 border-b border-b-border pb-2">
            <div>Actions</div>
            <div>View</div>
          </div>
        </div>
      </div>
    </>
  );
}
