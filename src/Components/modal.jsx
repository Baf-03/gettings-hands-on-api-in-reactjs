import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faStar } from '@fortawesome/free-solid-svg-icons'
 
export function DialogSizes(props) {
  const [size, setSize] = React.useState(null);

  let {title,image,description,price,rate}=props;
  // console.log(title)
  const handleOpen = (value) => setSize(value);
 
  return (
    <>
      <div className="mb-3 flex gap-3">
        <Button onClick={() => handleOpen("lg")} variant="gradient" className="bg-slate-600">
          More Info
        </Button>
      </div>
      
      <Dialog
        open={
          size === "lg" 
        }
        size={size || "lg"}
        handler={handleOpen}
      >
        <DialogHeader className="flex justify-center w-[100%] bg-gray-500 text-center rounded-lg  " >{title}</DialogHeader>
        
        <DialogBody className="flex justify-center w-[100%] items-center gap-5 flex flex-col sm:flex-row ">
            <div className="bg-red-600 w-[60%] flex justify-center border border-black rounded-lg"> <img src={image} className=" w-[100%] h-[20vh] sm:h-[50vh]"/></div>
            <div className=" w-[92%] ml-2 ">
                <div className="flex justify-between">
                    <h1 className="font-bold text-xl text-black">
                        Description</h1>
                        
                        
                    <div className="font-bold">
                    Price:{price}$
                     </div>
                 </div>
                 <div className="mt-3">{description}</div>
                 <div className="mt-3"><FontAwesomeIcon icon={faStar} className=" text-yellow-500 "/>{rate.rate}</div>
                </div>
            
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Go Back</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Buy {price}$</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}