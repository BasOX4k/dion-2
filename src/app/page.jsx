"use client"
import Banner from "@/components/Banner/Banner"
import Carousel from "@/components/Carousel/Carousel"
import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import Newsletter from "@/components/Newsletter/Newsletter"
import Views from "@/components/Views/Views"
export default function Home() {
  return (
    <>
      <Navbar />
      
      <Banner />

      <Views />

      <Newsletter />

      <Carousel />

      

      <Footer />
    </>
  )
}
