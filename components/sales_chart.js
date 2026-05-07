"use client";

import {LineChart, Line, XAxis, YAxis, Tooltip} from "recharts";

export default function SalesChart({data, className}) {    
    return (
        <div className={className}>
            <LineChart width="95%" height="100%" data={data} margin={{top: 20, right: 20, left: 20, bottom: 20}} responsive>
                <XAxis dataKey="date" stroke="var(--color-text)" label={{value: "Date", position: "insideBottom", offset: -15, fill: "var(--color-text)"}}/>
                <YAxis stroke="var(--color-text)" label={{value: "Revenue", position: "insideLeft", angle: -90, fill: "var(--color-text)", dy: 35}}/>
                <Line type="monotone" dataKey="revenue" stroke="var(--color-chart-line)"/>
                <Tooltip contentStyle={{backgroundColor: 'var(--color-tooltip)', borderColor: 'var(--color-border-2)'}}/>
            </LineChart>
        </div>
    );
}