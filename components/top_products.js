export default function TopProducts({products, className}) {
    console.log(products);
    
    return (
        <div className={className}>
            <div className="grid grid-cols-3 text-black dark:text-white">
                <div className="flex justify-center border-r">Name</div>
                <div className="flex justify-center border-r">Revenue</div>
                <div className="flex justify-center">Orders</div>
            </div>

            <hr/>

            <div>
                {products.map((p, i) => (
                    <div key={i} className="grid grid-cols-3 text-black dark:text-white">
                        <div className="flex justify-center border-r">{p.name}</div>
                        <div className="flex justify-center border-r">${p.revenue}</div>
                        <div className="flex justify-center">{p.orders}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}