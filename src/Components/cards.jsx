import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { DialogSizes } from "./modal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'


  export function CardDefault(props) {
    let {title,image,description,rate,price}=props;
    // console.log(rate,"rate")
    // console.log(image)
    return (
      <Card className="mt-6 w-[17vw] hover:shadow-xl">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={image}
            alt="card-image"
            className="w-[100%] h-[100%]"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2 ">
            <span className="line-clamp-1">{title}</span>
           <span className="font-bold text-xs">
                Price:{price}$
            </span>
          </Typography>
          
          <Typography className="line-clamp-2">
            {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between items-center font-bold">
          <div><DialogSizes title={title} image={image} description={description} price={price} rate={rate}/></div>
          <div><FontAwesomeIcon icon={faStar} className=" text-yellow-500 "/>{rate.rate} {rate.count}K</div>
        </CardFooter>
      </Card>
    );
  }