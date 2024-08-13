import GridPattern from '@/components/magicui/animated-grid-pattern'
import React from 'react'
import { cn } from "@/lib/utils";
import { BorderBeam } from '@/components/magicui/border-beam';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import { LampContainer } from '@/components/ui/Lamp';
// import { Spotlight } from '@/components/ui/spotlight';
import Footer from '@/components/Shared/Footer';


const Home = () => {
    return (
        <div className='h-full w-full flex justify-center items-center flex-col pt-[7%]'>
            {/* <Spotlight/> */}
            <div className='w-full h-full'>
                <div className="relative flex h-[30rem] w-full items-center justify-center overflow-hidden bg-background p-20 ">
                    <div className="relative h-[15rem] w-[60rem] rounded-xl border flex justify-center items-center ">
                        <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white w-full">
                        "Efficient staff scheduling is the cornerstone of seamless operations and satisfied employees."
                        </p>
                        <BorderBeam />
                    </div>
                    <GridPattern
                        width={20}
                        height={20}
                        x={-1}
                        y={-1}
                        className={cn(
                            "[mask-image:linear-gradient(to_bottom_right,green,transparent,transparent)] ",
                        )}
                        />
                </div>
            </div>
            <div className="relative flex h-1/2 w-full items-center justify-center bg-background">
                <div className='w-full h-full justify-center items-center flex flex-row gap-x-10'>
                    <Card className="w-[25%] h-full rounded-[2rem] mb-5">
                        <CardHeader className='flex flex-col justify-center items-center'>
                            {/* <LampContainer className='w-10 h-10 text-primary mb-3' /> */}
                            <CardTitle className='text-center'>Free Trial Offer</CardTitle>
                            <CardDescription className='text-center'>Try Us for Free!</CardDescription>
                        </CardHeader>
                        <CardContent className='flex justify-center items-center'>
                            <p>"Sign up today and get a 30-day free trial. Experience the full power of our scheduling app without any commitment!"</p>
                        </CardContent>
                        <CardFooter className='flex justify-center items-center'>
                            <button className='rounded-3xl w-full bg-orange-500 p-3'>Start Free Trial</button>
                        </CardFooter>
                    </Card>

                    <Card className="w-[25%] h-full rounded-[2rem] mb-5">
                        <CardHeader className='flex flex-col justify-center items-center'>
                            {/* <LampContainer className='w-10 h-10 text-primary mb-3' /> */}
                            <CardTitle className='text-center'>Time-Saving Benefits</CardTitle>
                            <CardDescription className='text-center'>Save Time, Increase Efficiency</CardDescription>
                        </CardHeader>
                        <CardContent className='flex justify-center items-center'>
                            <p>"Our intuitive scheduling tools save you hours each week. Focus on what matters most while we handle your scheduling efficiently."</p>
                        </CardContent>
                        <CardFooter className='flex justify-center items-center'>
                            <button className='rounded-3xl w-full bg-orange-500 p-3'>Learn More</button>
                        </CardFooter>
                    </Card>

                    <Card className="w-[25%] h-full rounded-[2rem] mb-5">
                        <CardHeader className='flex flex-col justify-center items-center'>
                            {/* <LampContainer className='w-10 h-10 text-primary mb-3' /> */}
                            <CardTitle className='text-center'>Customer Testimonials</CardTitle>
                            <CardDescription className='text-center'>Loved by Businesses Like Yours</CardDescription>
                        </CardHeader>
                        <CardContent className='flex justify-center items-center'>
                            <p>"See why thousands of businesses trust us for their scheduling needs."
                                Featuring quotes and photos from happy customers.</p>
                        </CardContent>
                        <CardFooter className='flex justify-center items-center'>
                            <button className='rounded-3xl w-full bg-orange-500 p-3'>Read Testimonials</button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
