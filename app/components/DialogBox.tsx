import {
  
    
    Setting,
    User,
    ArrowDown2 ,
    Logout
  } from "iconsax-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Typography } from "./tokens/Typography"
  import { Avatar,AvatarFallback,AvatarImage } from "@/components/ui/avatar"
  function DialogBox() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className=" flex gap-1 h-[3.5rem] items-center  justify-between  rounded-full ">
        <div>
             
       <Avatar>
          <AvatarFallback>JB</AvatarFallback>
          <AvatarImage className="h-10 w-10" src={'https://github.com/shadcn.png'} />
        </Avatar>
       </div>

          <div className="flex flex-col text-left">

<h3 className={`p-0 ${Typography.Inter.className} ${Typography.body_regular.md}`}>Justin Bergson</h3>
<p className={`p-0 ${Typography.Inter.className} font-normal`} >Justin@gmail.com</p>
       </div>

       <ArrowDown2/>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User variant="TwoTone" className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Setting variant="TwoTone" className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Logout variant="TwoTone" className="mr-2 h-4 w-4" />
              <span>Logout</span>
              <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
           
         
          </DropdownMenuGroup>
        
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
  export default DialogBox