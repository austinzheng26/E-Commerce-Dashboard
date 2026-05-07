export default function Summary({products, className}) {
    let ttl_revenue = 0;
    let ttl_orders = 0;

    for (let i = 0; i < products.length; i++) {
        ttl_revenue += products[i].revenue;
        ttl_orders += products[i].orders;
    }
    
    return (
        <div className={className}>
            <div className="grid grid-cols-2 text-black dark:text-white">
                <div className="flex justify-center border-r font-semibold text-xs sm:text-base">Total Revenue</div>
                <div className="flex justify-center font-semibold text-xs sm:text-base">Total Orders</div>
            </div>

            <hr/>

            <div className="grid grid-cols-2 text-black dark:text-white">
                <div className="flex justify-center border-r">${ttl_revenue}</div>
                <div className="flex justify-center">{ttl_orders}</div>
            </div>
        </div>
    );
}