import React from 'react'
import BrandImage from './SmallComp/BrandImage'
import Fourdiv from './SmallComp/Fourdiv'
import SmallProduct from './SmallComp/smallProduct'
import Threediv from './SmallComp/Threediv'


const data = [
    {
        brandimg: "https://img.gkbcdn.com/bb/jimmy-20200910094916929._p1_.jpg",
        ProductsData: [
            {
                image: "https://img.gkbcdn.com/p/2022-06-21/Jimmy-BX7-Pro-Handheld-Anti-mite-Vacuum-Cleaner-506442-0._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            
            {
                image: "https://img.gkbcdn.com/p/2022-06-21/Jimmy-BX7-Pro-Handheld-Anti-mite-Vacuum-Cleaner-506442-0._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2022-06-21/Jimmy-BX7-Pro-Handheld-Anti-mite-Vacuum-Cleaner-506442-0._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2022-06-21/Jimmy-BX7-Pro-Handheld-Anti-mite-Vacuum-Cleaner-506442-0._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            }
        ]
    },
    {
        brandimg: "https://img.gkbcdn.com/bb/roborock-20211111211035580._p1_.jpg",
        ProductsData: [
            {
                image: "https://img.gkbcdn.com/p/2021-03-01/roborock-s7-robot-vacuum-cleaner-2500pa-powerful-suction-1614568841892._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2022-07-22/roborock-q7-max--robot-vacuum-cleaner-with-auto-empty-dock-pure-3dd70b-1658457753623._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2021-11-11/Roborock-Dyad-Wet-and-Dry-Vacuum-Clenaer-13Kpa-5000mAh-35Mins-Run-Time-478096-1._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2022-06-25/Roborock-S7-Pro-Ultra-Robot-Vacuum-Cleaner-White-506889-2._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            }
        ]
    },
    {
        brandimg: "https://img.gkbcdn.com/bb/sculpfun-20220617114417913._p1_.jpg",
        ProductsData: [
            {
                image: "https://img.gkbcdn.com/p/2021-12-22/SCULPFUN-S9-Laser-Engraver-481991-0._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2022-05-30/SCULPFUN-30L-Min-Air-Pump-Compressor-EU-Plug-501435-0._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2022-05-12/Sculpfun-S10-Laser-Engraver-500429-0._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2021-12-17/Sculpfun-S6-Pro-Laser-Engraver-481732-0._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            }
        ]
    },
    {
        brandimg: "https://img.gkbcdn.com/bb/kugookirin-20220727164736534._p1_.jpg",
        ProductsData: [
            {
                image: "https://img.gkbcdn.com/p/2022-05-27/KUGOOKIRIN-G2-PRO-Adventurers-Dream-Electric-Scooter-501357-3._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2022-04-16/tronsmart-bang-60w-outdoor-party-speaker-b5a77f-1650095218850._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1574132217684._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            },
            {
                image: "https://img.gkbcdn.com/p/2022-08-08/tronsmart-onyx-ace-pro-bluetooth-5-2-tws-earphones-white-fdf9db-1659949918199._w280_p1_.jpg",
                offprice: "27% OFF",
                title: "JIMMY BX7 Pro Anti-Mite Vacuum Cleaner 700W",
                price: "₹12005.56",
                del: "₹16446.28"
            }
        ]
    }
]

const ThreeDiv = {

    page1: [
        {
            image: "https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg",
            title: "Smart Home & Garden",
            description: "Smart cleaning robots and vacuums, living room furniture, patio & garden supplies, up to 60% off!"
        },
        {
            image: "https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg",
            title: "E-transport",
            description: "New e-rides for less. Skip gas prices with electric bikes, scooters & beyond."
        },
        {
            image: "https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg",
            title: "3D Printers",
            description: "3D printers allow you to bring digitally modeled designs to life by using highly detailed filament printing."
        }
    ],
    page2: [
        {
            image: "https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg",
            title: "Smart Home & Garden",
            description: "Smart cleaning robots and vacuums, living room furniture, patio & garden supplies, up to 60% off!"
        },
        {
            image: "https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg",
            title: "E-transport",
            description: "New e-rides for less. Skip gas prices with electric bikes, scooters & beyond."
        },
        {
            image: "https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg",
            title: "3D Printers",
            description: "3D printers allow you to bring digitally modeled designs to life by using highly detailed filament printing."
        }
    ],
}


const sdsdas = [
    {
        title: "Go outside for fun and health",
        divData : [
            {
                img: "https://img.gkbcdn.com/bn/2208/PowerStation210-62ebad822b40c9647801966e._p1_.jpg",
                title2 :"Powering your camping"
            },
            {
                img: "https://img.gkbcdn.com/bn/2205/210x2104-62902c152b40c91cb09e7ada._p1_.jpg",
                title2 :"Cost-effective commuting"
            },
           
        ]
    },
    {
        title: "Efficiently work from home",
        divData : [
            {
                img: "https://img.gkbcdn.com/bn/2205/210x2103-62902ce92b40c91cb09e7adb._p1_.jpg",
                title2 :"Lightweight laptop for play"
            },
            {
                img: "https://img.gkbcdn.com/bn/2206/210x210-62b126d12b40c91cb022a653._p1_.jpg",
                title2 :"More free clean free"
            },
           
        ]
    },
    {
        title: "Summer chill for less",
        divData : [
            {
                img: "https://img.gkbcdn.com/bn/2207/airfan-62d68f9c2b40c913288ea562._p1_.jpg",
                title2 :"Keep the air moving"
            },
            {
                img: "https://img.gkbcdn.com/bn/2206/lALPJuZB2ShsBi3M0szS210210-629de75c2b40c92584276d1f._p1_.png",
                title2 :"TronSmart TWS Speaker"
            },
           
        ]
    },
    {
        title: "Unlimit your days",
        divData : [
            {
                img: "https://img.gkbcdn.com/bn/2205/210x2102-629039202b40c91cb0d51f4c._p1_.jpg",
                title2 :"TikTok Trending"
            },
            {
                img: "https://img.gkbcdn.com/bn/2205/210x210-6290393f2b40c91cb0d51f4d._p1_.jpg",
                title2 :"Kitchen and Dining"
            },
           
        ]
    },
]




const BrandProducts = () => {


    return (
        <>
            <div style={{ border: "1px solid red", gap: "50px" }} >

                {data.map((el) => (
                    <div style={{ border: "1px solid green", display: "flex" }}  >
                        <BrandImage data={el.brandimg} />
                        <SmallProduct data={el.ProductsData} />
                    </div>

                ))

                }



            </div>

            <div style={{ display: "grid", gridTemplateColumns:"repeat(3,1fr)" }} >
                {ThreeDiv.page1.map((el) => (
                    <Threediv data={el} />
                ))}
            </div>

   <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",width:"80%",border:"1px solid"}} >
     <img style={{width:"300px"}} src="https://img.gkbcdn.com/bn/2205/500x632-6290272b2b40c91cb007bd35._p1_.jpg" alt=""  />

     <div style={{ display: "grid", gridTemplateColumns:"repeat(2,1fr) " ,border:"1px solid",margin:"auto"}} >
                {sdsdas.map((el)=>(
                    <Fourdiv data={el}/>
                ))}
            </div>
   </div>
           
        </>
    )
}

export default BrandProducts
