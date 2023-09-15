import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel className=" mt-[5%] bg-black rounded-lg" >
      <img
        src="https://img.freepik.com/free-vector/gradient-flash-sale-background_23-2149027975.jpg?w=2000"
        alt="image 1"
        className="h-full w-full object-contain"
      />
      <img
        src="https://media.istockphoto.com/id/1195558677/es/vector/conjunto-de-plantillas-de-etiquetas-promocionales-de-flash-sale-dise%C3%B1o-de-texto-de-oferta.jpg?s=612x612&w=0&k=20&c=-l1tNV7vnOmDgTOKyuLNKFkPqy1NNRCtmusqWGZW2RM="
        alt="image 2"
        className="h-full w-full object-contain"
      />
      <img
        src="https://d226aj4ao1t61q.cloudfront.net/0toefrpw_sales-ecomm.png"
        alt="image 3"
        className="h-full w-full object-contain"
      />
    </Carousel>
  );
}