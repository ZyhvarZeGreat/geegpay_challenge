'use client'
import React from 'react'
import {Progress} from "@nextui-org/react";

import { Typography } from './tokens/Typography'

type Props = {
    title: string
    color:string
    expenditure:string |number
    difference: string | number
    value:number
}




const ProgressBar = (props: Props) => {
    const [progress, setProgress] = React.useState(0)
 
    React.useEffect(() => {
      const timer = setTimeout(() => setProgress(props.value), 1000)
      return () => clearTimeout(timer)
    }, [])
   
    return     <div className="flex flex-col gap-4">
    <h3 className={`${Typography.body_semibold.xl}`}>{props.title}</h3>
    <Progress  classNames={{
        base: "max-w-md",
        track: " border border-default",
        indicator: `bg-${props.color}`,
        label: "tracking-wider font-medium text-default-600",
        value: "text-foreground/60",
      }}   value={progress} className={` h-3 progress-root bg-woodsmoke-100/40`} />
    <div className={`w-full ${Typography.body_regular.xl} text-woodsmoke-600  flex  justify-between`}>
      <p>${props.expenditure}</p>
      <p> {props.difference}</p>
    </div>
  </div> 

}

export default ProgressBar