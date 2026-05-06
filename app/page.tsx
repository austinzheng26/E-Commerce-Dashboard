import TopProducts from "../components/top_products";

const products = [
  {name: "Socks", revenue: 230, orders: 25},
  {name: "Shirt", revenue: 300, orders: 27},
  {name: "Hat", revenue: 180, orders: 12},
  {name: "Pants", revenue: 290, orders: 23},
  {name: "Gloves", revenue: 150, orders: 15},
  {name: "Coat", revenue: 410, orders: 22}
];

const byRevenue = [...products];
byRevenue.sort((a,b) => b.revenue - a.revenue);

const byOrders = [...products];
byOrders.sort((a,b) => b.orders - a.orders);

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans dark:bg-black">
      <h1 className="max-w-xs text-3xl leading-50 font-bold text-black dark:text-white">
        Analytics Dashboard
      </h1>

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center w-full bg-zinc-400 dark:bg-gray-700 p-5 rounded-3xl">
          <h1 className="max-w-xs text-2xl font-semibold text-black dark:text-white mb-5">
            Top 5 Products by Revenue
          </h1>

          <TopProducts className="w-full bg-zinc-300 dark:bg-gray-600 p-3 rounded-3xl" products={byRevenue}/>

          <h1 className="max-w-xs text-2xl font-semibold text-black dark:text-white mt-5 mb-5">
            Top 5 Products by Orders
          </h1>

          <TopProducts className="w-full bg-zinc-300 dark:bg-gray-600 p-3 rounded-3xl" products={byOrders}/>
        </div>
      </main>
    </div>
  );
}
