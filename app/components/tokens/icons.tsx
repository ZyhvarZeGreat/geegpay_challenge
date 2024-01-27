import {
  Category,
  Profile2User,
  TrendUp,
  Box,
  DiscountShape,
  InfoCircle,
  ArrowCircleRight2,
  Setting2,
  Logout,
  DocumentDownload,
} from "iconsax-react";

export const iconData = [
    {link: 'Home', icon: <Category variant={"Outline"||"Broken"} color="#B2ABAB" />},
    {link: 'Trends', icon: <TrendUp variant={"Outline"||"Broken"} color="#B2ABAB" />},
    {link: 'Profile', icon: <Profile2User variant={"Outline"||"Broken"} color="#B2ABAB" />},
    {link: 'Orders', icon: <Box variant={"Outline"||"Broken"} color="#B2ABAB" />},
    {link: 'Profits', icon: <DiscountShape  variant={"Outline"||"Broken"}color="#B2ABAB" />},
    {link: 'Info', icon: <InfoCircle variant={"Outline"||"Broken"} color="#B2ABAB" />},
];

export const bottomIconData = [ 
    {link: 'Expand', icon: <ArrowCircleRight2 variant={"Outline"||"Broken"} color="#B2ABAB" />},
    {link: 'Settings', icon: <Setting2  variant={"Outline"||"Broken"}color="#B2ABAB" />},
    {link: 'Logout', icon: <Logout variant={"Outline"||"Broken"} className="  " color="#B2ABAB" />},
]

