export default function TopProducts({products, className}) {
    if (products.length > 5) {
        products = products.slice(0,5);
    }
    
    return (
        <div className={className}>
            <div className="grid grid-cols-2 sm:grid-cols-4 text-black dark:text-white">
                <div className="flex justify-center border-r font-semibold">Rank</div>
                <div className="flex justify-center sm:border-r font-semibold">Name</div>
                <div className="hidden sm:flex justify-center border-r font-semibold">Revenue</div>
                <div className="hidden sm:flex justify-center font-semibold">Orders</div>
            </div>

            <hr/>

            <div>
                {products.map((p, i) => (
                    <div key={i} className="grid grid-cols-2 sm:grid-cols-4 text-black dark:text-white">
                        <div className="flex justify-center border-r">#{i + 1}</div>
                        <div className="flex justify-center sm:border-r">{p.name}</div>
                        <div className="hidden sm:flex justify-center sm:border-r">${p.revenue}</div>
                        <div className="hidden sm:flex justify-center">{p.orders}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}