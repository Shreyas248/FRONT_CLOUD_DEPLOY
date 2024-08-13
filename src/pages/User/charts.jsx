import React from 'react'

export const charts = () => {
  return (
    <div>
    <div className="w-full flex flex-row p-4 gap-4">
<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
    <p className="text-2xl"> BarChart representation of Active and Inactive sessions in a month </p><br/>
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis
      dataKey="month"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 3)}
      />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="Active" fill="var(--color-Active)" radius={4} />
    <Bar dataKey="Inactive" fill="var(--color-Inactive)" radius={4} />
  </BarChart>
</ChartContainer>

    </div>
    </div>
  )
}
