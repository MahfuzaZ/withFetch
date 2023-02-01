import React from 'react'
import sass from "../main.module.scss"
import img1 from "../img/img7.jpeg"
import img2 from "../img/img112.jpeg"
import img3 from "../img/img9.jpeg"

function About() {
  return (
    <div className={sass.about} >
         <ul>
          <li><img src={img1} alt="" /></li>
          <li><img src={img2} alt="" /></li>
          <li><img src={img3} alt="" /></li>
         </ul>


         <h1>Anita Black</h1>
         <p><strong>Anita Black</strong> company is the leading company and manufacturer of the textile industry. We took bold steps to resonate in the world market with Moda Tekstil, which we established in 2001 with the slogan "The key to success is efficient, disciplined and systematic work", and the brand Anita Black, which we strengthened with entrepreneurial spirit and courage. The production line is built on a closed area of 6,500 m2 in the company's own facilities in Istanbul. The collections are produced in perfect conditions to meet the highest quality standards, and at the same time, we have a Showroom at international standards, and we are able to present our customers with our wide range of products so that they can visit their selections more easily and comfortably. We provide unconditional customer satisfaction, quality production and high standards of service. We are constantly advancing and improving, giving our customers the best possible products and attention.
We offer women's dresses, skirts, suits, jackets, jeans, sportswear, trench coats, fur and leather jackets, bags, belts, hats, clothing accessories and much more. Thanks to our state-of-the-art infrastructure, we are moving towards success and forming the foundation of the company. We have technical production units and up-to-date equipment that ensure the quality and quantity of our production. <br/> <br/> In today's world, innovation is the name of the game. We also have a research and development department in our company that enables us to come up with trendy clothing, and the department also helps us understand customers' requirements. We have an expert and professional team that adapts to meet even the smallest requirements of our customers, and we keep abreast of the changing trends in the fashion industry.
As we move forward with the world's leading brands, we continue to be successful abroad and to be the contemporary image of Turkish fashion. With the experience we have gained with the understanding of fashion we have been living since 2001, we are preparing original collections containing Anita Black, fabric seals with a stylish, remarkable and elegant design style, which set out with the mission of being the permanent and leading brand of the Turkish textile industry. <br/> <br/> As a second line with the Anita Black VIP series, we expanded the collection. Silk satin, silk chiffon, silk satin fabric patterns used extensively in this collection were specially designed and produced in Italy for Anita Black. SS Club collections stand out as a reflection of the distinguished pragmatism at their core. As a result of this reflection, SS Club models have a vision that emphasizes simplicity and attractiveness. The Anita Black brand, which is known in the luxury brands segment with high awareness and currently exports to Russia, Ukraine, Moldavia, Belarus, Azerbaijan, Kazakhstan, Uzbekistan, USA, Middle East and European countries, has stores.</p>
         
    </div>
  )
}

export default About