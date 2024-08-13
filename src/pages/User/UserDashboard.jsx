"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Timer, ShoppingBag, Users } from 'lucide-react'
import NumberTicker from '@/components/magicui/number-ticker'



const chartData = [
        { date: "2024-04-01", Active: 5, Inactive: 5 },
        { date: "2024-04-02", Active: 4, Inactive: 6 },
        { date: "2024-04-03", Active: 7, Inactive: 3 },
        { date: "2024-04-04", Active: 6, Inactive: 4 },
        { date: "2024-04-05", Active: 8, Inactive: 2 },
        { date: "2024-04-06", Active: 6, Inactive: 4 },
        { date: "2024-04-07", Active: 4, Inactive: 6 },
        { date: "2024-04-08", Active: 7, Inactive: 3 },
        { date: "2024-04-09", Active: 5, Inactive: 5 },
        { date: "2024-04-10", Active: 6, Inactive: 4 },
        { date: "2024-04-11", Active: 4, Inactive: 6 },
        { date: "2024-04-12", Active: 8, Inactive: 2 },
        { date: "2024-04-13", Active: 7, Inactive: 3 },
        { date: "2024-04-14", Active: 5, Inactive: 5 },
        { date: "2024-04-15", Active: 4, Inactive: 6 },
        { date: "2024-04-16", Active: 6, Inactive: 4 },
        { date: "2024-04-17", Active: 7, Inactive: 3 },
        { date: "2024-04-18", Active: 5, Inactive: 5 },
        { date: "2024-04-19", Active: 6, Inactive: 4 },
        { date: "2024-04-20", Active: 4, Inactive: 6 },
        { date: "2024-04-21", Active: 8, Inactive: 2 },
        { date: "2024-04-22", Active: 7, Inactive: 3 },
        { date: "2024-04-23", Active: 5, Inactive: 5 },
        { date: "2024-04-24", Active: 4, Inactive: 6 },
        { date: "2024-04-25", Active: 6, Inactive: 4 },
        { date: "2024-04-26", Active: 7, Inactive: 3 },
        { date: "2024-04-27", Active: 8, Inactive: 2 },
        { date: "2024-04-28", Active: 5, Inactive: 5 },
        { date: "2024-04-29", Active: 6, Inactive: 4 },
        { date: "2024-04-30", Active: 4, Inactive: 6 },
    ];
      
  const chartConfig = {
    Active: {
      label: "Active",
      color: "#2563eb",
    },
    Inactive: {
      label: "Inactive",
      color: "#60a5fa",
    },
  };
    

const UserDashboard = () => {
    return (
        <div className=" w-[94%] flex flex-col items-right pt-12 ml-[15.3rem] ">
        
        <div className="flex flex-row p-4 gap-4">
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Revenue Generated
                    </CardTitle>
                    <Timer className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <NumberTicker className="text-2xl font-bold" value={45575}/>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Active Days
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <NumberTicker className="text-2xl font-bold" value={37}/>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Classes
                    </CardTitle>
                    <ShoppingBag className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                <NumberTicker className="text-2xl font-bold" value={80}/>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Hours
                    </CardTitle>
                    <Timer className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                <NumberTicker className="text-2xl font-bold" speed={1.7} value={237}/>
                </CardContent>   
            </Card>
        </div>

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

export default UserDashboard