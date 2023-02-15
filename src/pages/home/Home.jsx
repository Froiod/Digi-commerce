import React from 'react'
import Directory from '../../components/directory/Directory'

const Home = () => {

  const categories = [
    {
      id: 1,
      title: "mobiles",
      imageUrl: "https://www.cnet.com/a/img/resize/cb4f65b0a78c0d86ea0aeb0a95e9461dcc2f96b3/hub/2022/03/30/e841545d-e55c-47fc-b24a-003bf14e58c8/oneplus-10-pro-cnet-review-12.jpg?auto=webp"
    },
    {
      id: 2,
      title: "laptops and PCs",
      imageUrl: "https://cdn1.dotesports.com/wp-content/uploads/2021/11/03033405/Razer-Products-OGimage-1200x630-1.jpg"
    },
    {
      id: 3,
      title: "accessories",
      imageUrl: "https://media.istockphoto.com/id/1034427464/photo/usb-charging-cables-for-smartphone-and-tablet.jpg?s=612x612&w=0&k=20&c=OCWuHn0R87-kJT4g1_F7SLE9eNR13Gm6hhNl7Xfq388="
    },
    {
      id: 4,
      title: "home appliances",
      imageUrl: "https://d1af89beukha9h.cloudfront.net/wp-content/uploads/2018/04/Global-Smart-Hubs-Market-1024x731.jpg"
    },
    {
      id: 5,
      title: "lifesyles",
      imageUrl: "https://gadgetpilipinas.net/wp-content/uploads/2019/02/samsung-wearables-1.png"
    }
  ]

  return (
    <Directory categories={categories} />
  )
}

export default Home