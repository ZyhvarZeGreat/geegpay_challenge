import Image from "next/image";
import { Select, Table } from "./components/index";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Typography } from "./components/tokens/Typography";
import Header from "./components/Header";
import Cards from "./components/Cards";
import ProgressBar from "./components/Progress";
import SalesCharts from "./components/SalesCharts";
import Box from '../assets/3d-rotate.svg'
import Cart  from '../assets/shopping-cart.svg'
import Rotate  from '../assets/3d-rotate.svg'
import Coin from '../assets/coin.svg'
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={` ${jakarta.className} overflow-x-scroll bg-slate-100/20 basis-11/12 flex min-h-screen flex-col items-center justify-between `}
    >
      <div className="flex gap-8 overflow-y-scroll h-full justify-between  flex-col w-full">
        <Header />
      
        <div className=" overflow-y-scroll flex flex-col px-4 sm:px-16  w-full h-full  gap-4   items-center justify-around ">
          <div className="  gap-8 col-span-12   flex-col sm:flex-row flex items-center justify-around sm:col-span-8 ">
            <div className="  border-[0.5px] basis-full sm:basis-8/12 rounded-lg border-woodsmoke-500/10  flex flex-col items-center justify-between w-[90%] sm:h-[30rem]">
              <div className=" flex  items-center justify-between w-full px-8">
                <h3 className={`${Typography.body_semibold.xl}`}>
                  Sales Trends
                </h3>
                <div className=" flex gap-4 items-center justify-center h-[4rem]">
                  <p className={`${Typography.body_medium.md}`}>Sort By:</p>
                  <Select />
                </div>
              </div>
              <div className="w-full px-8 h-full flex items-center justify-center ">
                <SalesCharts />
              </div>
            </div>

            <div className=" basis-full sm:basis-5/12 sm:overflow-auto  gap-4  w-full grid grid-cols-12 place-items-center justify-center  ">
              <Cards icon={<Box  className='h-[24px] w-[24px]' />} profit={1} metric={350} />
              <Cards icon={<Rotate className='h-[24px] w-[24px]' />} profit={-1} metric={270}/>
              <Cards icon={<Cart className='h-[24px] w-[24px]' />} profit={-1} metric={1567} />
              <Cards icon={<Coin className='h-[30px] w-[30px] ' />} profit={1} metric={`$350,000`} />
            </div>
          </div>

          <div className="flex-col px-4 sm:px-16 sm:flex-row items-stretch  gap-6 flex  w-full">
           
          <div className="  flex flex-col  shadow-md  basis-full sm:basis-8/12 ">
              <div className="  flex  items-center justify-between w-full px-4 sm:px-8">
                <h3 className={`${Typography.body_semibold.xl}`}>
                  Last Orders
                </h3>
                <div className=" flex gap-4 items-center justify-center h-[4rem]">
                  <p className={`${Typography.body_medium.xl} text-primary`}>
                    See All
                  </p>
                </div>
              </div>
              <div className="sm:px-6 h-full  table ">
                <Table />
              </div>
            </div>

            

            <div className=" basis-full sm:basis-5/12     w-full flex items-center justify-center  ">
            <div className="w-full border-[0.5px] rounded-lg border-woodsmoke-300/15 px-4  sm:px-8 h-full">
                  <div className=" flex  items-center justify-between w-full px-2">
                    <h3 className={`${Typography.body_semibold.xl} ${Typography.Jakarta.className}`}>
                      Top Platforms
                    </h3>
                    <div className=" flex gap-4 items-center justify-center h-[4rem]">
                      <p
                        className={`${Typography.body_medium.xl} text-primary`}
                      >
                        See All
                      </p>
                    </div>
                  </div>
                  <div className="  flex flex-col gap-6">
                 <ProgressBar color="progress1" value={55} title="Book Bazaar" expenditure="2,500,000" difference='+15%'/>
                 <ProgressBar color="" value={44} title="Artisan Aisle" expenditure="1,800,000" difference='+10%'/>
                 <ProgressBar color="warning" value={38} title="Toys Troop" expenditure="1,200,000" difference='+8%'/>
                 <ProgressBar color="secondary" value={19} title="X Store" expenditure="800,000" difference='+5%'/>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
