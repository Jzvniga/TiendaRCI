"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
    {
        id: 1,
        title: "ENVÍO A TODA REGIÓN $4500",
        description: "Productos originales de EEUU",
        link: "#!"
    },
    {
        id: 2,
        title: "Comprar novedades",
        description: "Todas la novedades con un 20% de descuento",
        link: "#"
    }
]

const CarouselTextBanner = () => {
    const router = useRouter()

    return ( 
        <div className="bg-gray-200">
            <Carousel className="w-full max-w-4xl mx-auto"
            plugins={[
                Autoplay({
                    delay: 5000 //milisegundos
                })
            ]}
            >
                <CarouselContent>

                {dataCarouselTop.map(({id, title, link, description}) => (
                    <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                        <div>
                            <Card className="shadow-none border-none bg-transparent">
                                <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                    <p className="sm:text-lg text-wrap">{title}</p>
                                    <p className="text-xs sm:text-sm text-wrap">{description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
     );
}
 
export default CarouselTextBanner;