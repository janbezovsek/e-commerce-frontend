import img1 from '../images/electronics/Hairdryer Dyson.jpg'
import img2 from '../images/electronics/Hairdryer Philips.webp'
import img3 from '../images/electronics/Hairdryer Remington.webp'
import img4 from '../images/electronics/Vacuum cleaner Dyson.webp'
import img5 from '../images/electronics/Vacuum cleaner Dyson2.webp'
import img6 from '../images/electronics/Vacuum cleaner iRobot roomba.jpg'
import img7 from '../images/electronics/Vacuum cleaner Philips.webp'
import img8 from '../images/electronics/Vacuum Cleaner Shark.avif'
import img9 from '../images/electronics/Washing machine Electrolux.avif'
import img10 from '../images/electronics/Washing machine Gorenje.webp'
import img11 from '../images/electronics/Washing machine Gorenje2.jpg'
import img12 from '../images/electronics/Washing machine LG.png'
import img13 from '../images/electronics/Washing machine Westinghouse.avif'

import img14 from '../images/watches/cartier tank.avif'
import img15 from '../images/watches/longines.jpg'
import img16 from '../images/watches/mido.avif'
import img17 from '../images/watches/omega speedmaster.avif'
import img18 from '../images/watches/daytona.jpg'
import img19 from '../images/watches/orient40.jpg'
import img20 from '../images/watches/rolex rainbow.webp'
import img21 from '../images/watches/zenith.jpg'

import img22 from '../images/handbags/guess1.webp'
import img23 from '../images/handbags/guess2.jpg'
import img24 from '../images/handbags/guess3.webp'
import img25 from '../images/handbags/guess4.jpg'
import img26 from '../images/handbags/guess5.jpg'
import img27 from '../images/handbags/guess6.jpg'
import img28 from '../images/handbags/guess7.webp'
import img29 from '../images/handbags/guess8.avif'

import img30 from '../images/sofas/sofa1.webp'
import img31 from '../images/sofas/sofa2.jpg'
import img32 from '../images/sofas/sofa3.jpg'
import img33 from '../images/sofas/sofa4.webp'
import img34 from '../images/sofas/sofa5.webp'
import img35 from '../images/sofas/sofa6.jpeg'
import img36 from '../images/sofas/sofa7.jpg'
import img37 from '../images/sofas/sofa8.jpg'



let dataProducts = [
    
    {
    electronics : [

    {
        id: 1,
        title: "Dyson",
        stock: "In stock",
        quantity: 3,
        image: img1,
        description: "Slopehill Professional Ionic Hair Dryer, Powerful 1800W Fast Drying Low Noise Blow Dryer with 2 Concentrator Nozzle 1 Diffuser Attachments for Home Salon Travel",
        price: 530,
        info: "Professional Hair Dryer"
    },
    {
        id: 2,
        title: "Philips",
        stock: "In stock",
        quantity: 9,
        image: img2,
        description: "Panasonic Nanoe Salon Hair Dryer with Oscillating QuickDry Nozzle, Diffuser and Concentrator Attachments, 3 Speed Heat Settings for Easy Styling and Healthy Hair - EH-NA67-W (White)",
        price: 220,
        info: "Professional Hair Dryer"
    },
    {
        id: 3,
        title: "Remington",
        stock: "In stock",
        quantity: 10,
        image: img3,
        description: "Remington Damage Protection Hair Dryer with Ceramic + Ionic + Tourmaline Technology, Black, 3 Piece Set",
        price: 120,
        info: "Professional Hair Dryer"
    },
    {
        id: 4,
        title: "Dyson",
        stock: "In stock",
        quantity: 12,
        image: img4,
        description: "Small Vacuum Cleaner, Mini Vacuum, 20Kpa Powerful Suction, Hand Vacuum Rechargeable with 4000mAh, 50-Min Runtime for Small Cleaning",
        price: 720,
        info: "Vacuum cleaner"
    },
    {
        id: 5,
        title: "Dyson",
        stock: "In stock",
        quantity: 12,
        image: img5,
        description: "Vacuum Cleaner, 80000 RPM High-Speed Brushless Motor, 7 in 1 Lightweight Stick Vacuum, Rechargeable Electric Broom, V-Shaped Anti-Tangle Roller Brush for Home Pet Hair Carpet Hard Floor",
        price: 680,
        info: "Vacuum cleaner"
    },
    {
        id: 6,
        title: "iRobot",
        stock: "In stock",
        quantity: 2,
        image: img6,
        description: "iRobot Roomba 694 Robot Vacuum-Wi-Fi Connectivity, Personalized Cleaning Recommendations, Works with Alexa, Good for Pet Hair, Carpets, Hard Floors, Self-Charging, Roomba 694",
        price: 499,
        info: "Vacuum cleaner"
    },
    {
        id: 7,
        title: "Philips",
        stock: "In stock",
        quantity: 5,
        image: img7,
        description: "Vacuum Cleaner, 38Kpa/450W Stick Vacuum with Smart Display, 2024 Newest Dual Handle Vacuum Cleaners for Home, Up to 55 Mins Run Time, Suitable for Pet Hair/Carpet/Hard Floors",
        price: 3400,
        info: "Vacuum cleaner"
    },
    {
        id: 8,
        title: "Shark",
        stock: "In stock",
        quantity: 4,
        image: img8,
        description: "Shark NV360 Navigator Lift-Away Deluxe Upright Vacuum with Large Dust Cup Capacity, HEPA Filter, Swivel Steering, Upholstery Tool & Crevice Tool, Blue",
        price: 400,
        info: "Vacuum cleaner"
    },
    {
        id: 9,
        title: "Electrolux",
        stock: "In stock",
        quantity: 16,
        image: img9,
        description: "Colour: White Inverter PowerDrive motor WaveActive drum Washing capacity: 10 kg Drum volume: 68 Control: Button Type of display: LED display Drum illumination: Yes Cold wash: 15 °C",
        price: 750,
        info: "The Electrolux EW2F5W82 washing machine is equipped with the GentleCare basket, specially designed to take care of your clothes. With the Sanitizing Steam program you can remove more than 99.99% of viruses and bacteria."
    },
    {
        id: 10,
        title: "Gorenje",
        stock: "In stock",
        quantity: 12,
        image: img10,
        description: "Colour: White Inverter PowerDrive motor WaveActive drum Washing capacity: 10 kg Drum volume: 68 Control: Button Type of display: LED display Drum illumination: Yes Cold wash: 15 °C",
        price: 620,
        info: "Washing machine · WE843 Energy efficiency class: D, Washing capacity: 8 kg, Construction type: Freestanding, Width of the product: 600 mm, Height of the product: 850 mm"
    },
    {
        id: 11,
        title: "Gorenje",
        stock: "In stock",
        quantity: 12,
        image: img11,
        description: "Colour: White Inverter PowerDrive motor WaveActive drum Washing capacity: 10 kg Drum volume: 68 Control: Button Type of display: LED display Drum illumination: Yes Cold wash: 15 °C",
        price: 720,
        info: "Washing machine  Washing capacity: 9 kg  Inverter PowerDrive motor"
    },
    {
        id: 12,
        title: "LG",
        stock: "In stock",
        quantity: 5,
        image: img12,
        description: "Colour: White Inverter PowerDrive motor WaveActive drum Washing capacity: 10 kg Drum volume: 68 Control: Button Type of display: LED display Drum illumination: Yes Cold wash: 15 °C",
        price: 520,
        info: "Front Load Washer 7KG , Direct Drive Motor, 6 Motion , Silver color"
    },
    {
        id: 13,
        title: "Westinghouse",
        stock: "In stock",
        quantity: 6,
        image: img13,
        description: "Colour: White Inverter PowerDrive motor WaveActive drum Washing capacity: 10 kg Drum volume: 68 Control: Button Type of display: LED display Drum illumination: Yes Cold wash: 15 °C",
        price: 500,
        info: "12kg capacity top load washing machine with easy to use controls, everyday fast wash programs and durable soft close glass lid."
    }

    ]},
    {
    handbags : [
        {
        id: 1,
        title: "Guess",
        stock: "In stock",
        quantity: 4,
        image: img22,
        description: "Interior features double compartments with 2 slip pocket and 1 zip pocket Antique gold hardware l: 14.25 w: 5 h: 9",
        price : 850,
        info: "GUESS Sestri Logo Luxury Satchel"
        },
        {
        id: 2,
        title: "Guess",
        stock: "In stock",
        quantity: 3,
        image: img23,
        description: "Interior features double compartments with 2 slip pocket and 1 zip pocket Antique gold hardware l: 14.25 w: 5 h: 9",
        price : 1029,
        info: "GUESS Sestri Logo Luxury Satchel"
        },
        {
        id: 3,
        title: "Guess",
        stock: "In stock",
        quantity: 1,
        image: img24,
        description: "Interior features double compartments with 2 slip pocket and 1 zip pocket Antique gold hardware l: 14.25 w: 5 h: 9",
        price : 760,
        info: "GUESS Sestri Logo Luxury Satchel"
        }
        ,
        {
        id: 4,
        title: "Guess",
        stock: "In stock",
        quantity: 2,
        image: img25,
        description: "Interior features double compartments with 2 slip pocket and 1 zip pocket Antique gold hardware l: 14.25 w: 5 h: 9",
        price : 320,
        info: "GUESS Sestri Logo Luxury Satchel"
        },
        {
        id: 5,
        title: "Guess",
        stock: "In stock",
        quantity: 7,
        image: img26,
        description: "Interior features double compartments with 2 slip pocket and 1 zip pocket Antique gold hardware l: 14.25 w: 5 h: 9",
        price : 452,
        info: "GUESS Sestri Logo Luxury Satchel"
        },
        {
        id: 6,
        title: "Guess",
        stock: "In stock",
        quantity: 6,
        image: img27,
        description: "Interior features double compartments with 2 slip pocket and 1 zip pocket Antique gold hardware l: 14.25 w: 5 h: 9",
        price : 934,
        info: "GUESS Sestri Logo Luxury Satchel"
        },
        {
        id: 7,
        title: "Guess",
        stock: "In stock",
        quantity: 5,
        image: img28,
        description: "Interior features double compartments with 2 slip pocket and 1 zip pocket Antique gold hardware l: 14.25 w: 5 h: 9",
        price : "200.00",
        info: "GUESS Sestri Logo Luxury Satchel"
        },
        {
        id: 8,
        title: "Guess",
        stock: "In stock",
        quantity: 5,
        image: img29,
        description: "Interior features double compartments with 2 slip pocket and 1 zip pocket Antique gold hardware l: 14.25 w: 5 h: 9",
        price : 520,
        info: "GUESS Sestri Logo Luxury Satchel"
        }
    ]},
    {
    sofas : [
        {
        id: 1,
        title: "Sofa Relax",
        stock: "In stock",
        quantity: 8,
        image: img30,
        description: "【Elegant And Stylish Sectional Sofa】This modern sectional sofa has a classic design that will never go out of style. The upholstery and sleek lines blend perfectly to create a harmonious appearance that can suit any decor style and enhance your space.【Comfy Cloud Couch】Upholstered in polyester blend fabric with cushions featuring thick foam cushion padding for prime relaxation. Lean back and stretch out your legs out long on the chaise lounge when you or guests need more space. The extra-wide and extra-deep seating makes it perfect for entertaining or relaxing with loved ones.【Quality And Durability】Manufactured with high-quality wood with spring reinforced cushions, the sturdy frame provides the utmost seating support. The humanization design of the waist pillows provide you enough support when you sit on the sofa for a long time.【Overall product dimensions】32.7'' H x 110.6''W x68.9''D, This sectional couch set is compact enough to be able to fit into your apartment, loft, and more while offering ample seating space.【Easy Assembly】The sleeper sofa comes with clear instructions and all the tools to help you assemble it easily and quickly. Enjoy the fun of assembly with your partner!",
        price: 3500,
        info: "EASELAND 83 L Shaped Convertible Chenille Couch, Sectionals Sofa for Living Room, Modern 3-Seat Lounge Sofa for Bedroom with Chaise, Sleeper Sofa Bed with Fluffy Armrests, Washable Cushion(White)"
        },
        {
        id: 2,
        title: "Sofa Wind2",
        stock: "In stock",
        quantity: 9,
        image: img31,
        description: "L SHAPED SOFA: 83.07 W x 54.33 D x 34.25 H; Seat Height: 18.11, Seat Depth: 23.6, Back Cushion Height: 17.3. Modern sofa for bedrooms, apartments, living rooms, offices, and small spaces. REVERSIBLE COUCH: This couch with chaise has a modern design with large mats and fluffy armrests. The soft back can provide long-term support, so you can feel the best comfortable experience during entertainment and rest.STURDY AND DURABLE: This comfortable sofa is based on solid wood construction with premium springs and high-density foam that easily holds up to 1,000 pounds and is suitable for 3-5 people. The solid wood construction not only gives the sofa sturdy support but also adds color. Upholstered seat cushions and removable back cushions provide ergonomic seating angles and the ultimate in lounging comfort.EASY ASSEMBLY: With your convenience in mind, we have provided a detailed instruction manual that allows you to assemble the sofa in about 15 minutes. In addition, the cover is removable for easy machine washing and drying, ensuring that your sofa remains fresh at all times. The backrests of the sofa are compressed in the package and can be patted for 5-8 minutes or left for 24-48 hours to fluff them up and provide more comfort for your use.",
        price: 2400,
        info: "EASELAND 83 L Shaped Convertible Chenille Couch, Sectionals Sofa for Living Room, Modern 3-Seat Lounge Sofa for Bedroom with Chaise, Sleeper Sofa Bed with Fluffy Armrests, Washable Cushion(White)"
        },
        {
        id: 3,
        title: "Sofa Cubino S",
        stock: "In stock",
        quantity: 1,
        image: img32,
        description: "Modern Mid-Century Style: Experience the epitome of Modern Mid-Century Style with our faux leather couch, exuding sleek lines and plush textures inspired by mid-century modern design.Enjoy Unrivaled Comfort: Sink into luxury with our high-density, high-elasticity sponge cushions, promising enduring support and resilience against deformation.Built to Last: Our sofa boasts robust hardware connectors and a sturdy metal frame, guaranteeing longevity and stability with a weight capacity of up to 500 pounds, without any shifting or wear.Effortless Maintenance: Crafted from premium, pet-friendly faux leather, our sofa is not only durable but also easy to clean and resistant to scratches, ensuring lasting beauty.",
        price: 1000,
        info: "NECWOEM Sofa, Faux Leather Couch with Comfortable Cushion for Living Room, Office, Bedroom, Oversize, Black."
        },
        {
        id: 4,
        title: "Sofa Manila",
        stock: "In stock",
        quantity: 3,
        image: img33,
        description: "100%polyester【Flexible Layout】: This sofa combination features a loveseat and interchangeable storage chaise, which can be swapped from side to side to accommodate different types of homes,perfect for apartments, offices,Living Room,and beyond.【Effortless Transformation Sofa Bed】: Experience effortless luxury with a swift pull-out motion that effortlessly converts the sofa into a plush twin bed, , providing additional sleeping space for overnight guests.【Ample Hidden Storage space】: Equipped with a reversible storage chaise, with inner dimensions measuring 47x21.5x10,providing ample room to stow away blankets, pillows, and other essentials, offering convenient storage solutions",
        price: 2500,
        info: "Favfurish 81.5'' L-Shape Sleeper Sectional Sofa with Storage Chaise and Pull, Living Room Convertible Couch Bed,W/ 3 Back Cushions & Breathable Fabric,for Apartment,Office,(Light Grey)."
        },
        {
        id: 5,
        title: "Sofa Brian",
        stock: "In stock",
        quantity: 15,
        image: img34,
        description: "Multi-form Sectional Couch】 Rovibek l shape couch can not only be used as a sofa for normal sitting, but also has a chaise couch design on the side for you to lie down and rest. What's more, the pull-out bed mechanism is designed to quickly and easily convert from a sofa to a double bed for you to sleep on.【Sleeper Sofa with Storage】Our l sofa has storage compartments underneath the chaise area, perfect for storing bedding, pillows and other items to help you save storage space.【Comfy Couch】Made from linen fabric, Rovibek l shaped couch with pull out bed are not only resistant to wear and tear, but are also soft and breathable, making them comfortable for you to sit or sleep on",
        price: 3100,
        info: "Convertible L Shaped Couch Pull Out Bed and Storage Sectional Sleeper Sofa with Chaise for Living Room, Apartment, Bedroom, Office, Dark Gray."
        },
        {
        id: 6,
        title: "Sofa Hugo",
        stock: "In stock",
        quantity: 12,
        image: img35,
        description: "【Top-grain Leather】Upholstered in premium cowhide leather, our sofa's natural color variations, wrinkles and creases develop a vintage patina and soft buttery feel. The sofa structure curves smoothly and gives your living room, apartment and lounge a mid-century modern style.【Durable & Comfortable】The fluffy back cushion and seat cushion are high-resiliency foam cores wrapped in a removable leather cover, formulated for lasting comfort and soft sit. The frame of our loveseat is made of solid wood and the metal legs covered with antique matt black and gold finish, making it strong and durable.【Easy Assembly】Our 2-seater couch measures 70 L x 30.7W x 33 H. Packed in a space-saving box, it only takes about 20 minutes of simple assembly according to the instruction manual. In addition, the cushions are compressed in the package, please pat the cushions for 5 minutes ",
        price: 1700,
        info: "70 Top-Grain Leather Sofa, 2-Seat Upholstered Loveseat Sofa Modern Couch, Luxury Classic for Living Room Bedroom Apartment Office (Brown)."
        },
        {
        id: 7,
        title: "Sofa Bowman",
        stock: "In stock",
        quantity: 3,
        image: img36,
        description: "【100% Genuine Leather】Upholstered in top-grain cowhide leather, our sofa's natural color variations, wrinkles and creases develop a vintage patina and soft buttery feel. The sofa structure curves smoothly and gives your living room, apartment and lounge a mid-century modern style.【Durable & Comfortable】The fluffy back cushion and seat cushion are high-resiliency foam cores wrapped in a removable leather cover, formulated for lasting comfort and soft sit. The frame of our couch is made of solid wood and the metal legs covered with antique matt black and gold finish, making it strong and durable.【Easy Assembly】Our 3-seater couch measures 79 L x 30.7 W x 33.5 H. Packed in a space-saving box, it only takes about 20 minutes of simple assembly according to the instruction manual. In addition, the cushions are compressed in the package, please pat the cushions for 5 minutes or leave it for 24-48 hours to restore the fluffiness.",
        price: 5400,
        info: "79 Genuine Leather Sofa, Top-Grain 3 Seater Leather Couch, Mid-Century Modern Upholstered Sofa for Living Room Bedroom Apartment Office, Cognac Tan"
        },
        {
        id: 8,
        title: "Sofa Letto",
        stock: "In stock",
        quantity: 12,
        image: img37,
        description: "【Elegant And Stylish Sectional Sofa】This modern sectional sofa has a classic design that will never go out of style. The upholstery and sleek lines blend perfectly to create a harmonious appearance that can suit any decor style and enhance your space.【Comfy Cloud Couch】Upholstered in polyester blend fabric with cushions featuring thick foam cushion padding for prime relaxation. Lean back and stretch out your legs out long on the chaise lounge when you or guests need more space. The extra-wide and extra-deep seating makes it perfect for entertaining or relaxing with loved ones",
        price: 900,
        info: "Evedy Sectional Comfy Cloud Living Room,L-Shape Chaise Lounge and Comfortable Waist Pillows,2 Pieces Sofas & Couches Sets with Removable Ottomans, Beige-B."
        }

    ]},
    {
    watches : [
        {
        id: 1,
        title: "Cartier Tank",
        stock: "In stock",
        quantity: 4,
        image: img14,
        description: "Santos watch, medium model, Manufacture mechanical movement with automatic winding, caliber 1847 MC. Steel case, 7-sided crown set with a faceted synthetic spinel, silvered opaline dial, steel sword-shaped hands, sapphire crystal. Steel bracelet with “SmartLink” adjustment system. Second bracelet in calfskin, with interchangeable steel folding buckle. Both bracelets are fitted with the “QuickSwitch” interchangeability system. Case width: 35.1 mm, thickness: 8.83 mm. Water-resistant up to 10 bar (approx. 100 meters/100 feet) 1904, Louis Cartier granted the wish of the famous Brazilian aviator Alberto Santos Dumont: to be able to tell time while flying. The birth of one of the first ever wristwatches sealed the bonds of friendship between these two pioneers. The rounded angles of the dial, the seamless curve of the horns, and the exposed screws made for an iconic watch that would inspire countless reinterpretations.",
        price: 3500,
        info: "Santos De Cartier Watch Medium Model, Automatic Movement, Steel, Interchangeable Metal And Leather Bracelets WSSA0029"
        },
        {
        id: 2,
        title: "Longines Hydroconquest",
        stock: "In stock",
        quantity: 7,
        image: img15,
        description: "Founded in 1832 in Saint-Imier, the famous Swiss watch brand Longines can boast a long tradition characterised by the elegance and performance of its products. Those values are perfectly represented by The Longines Sport Collection. The HydroConquest line is dedicated to men and women looking for a high performance timepiece that combines technical innovation and elegance. Longines now extends this line with new models in bright colours.",
        price: 2400,
        info: "Longines Hydroconquest Mens Watch L3.782.4.96.6 04070003751"
        },
        {
        id: 3,
        title: "MIDO Ocean Star",
        stock: "In stock",
        quantity: 10,
        image: img16,
        description: "The dial of the Ocean Star 200 diving watch offers indexes filled with Super-Luminova® and skeletonised hands. The indexes at 6 and 12 O'clock feature two points for easier readability in the water. This sporty Swiss watch is water resistant up to 20 bar (200 m/656 ft), with the case shape providing extra protection for the screw down crown. The screw down case back is engraved with the Ocean Star logo. Furthermore, the housed automatic movement has an autonomy of up to 80 hours.",
        price: 1800,
        info: "M026.430.44.061.00 - Power Reserve Up To 80 Hours - 20 Bar / 200 M Water Resistance - Rotating Bezel"
        },
        {
        id: 4,
        title: "Omega Speedmaster",
        stock: "In stock",
        quantity: 5,
        image: img17,
        description: "Inspired by the 4th generation Speedmaster style worn on the moon, The Speedmaster Moonwatch is one of Omega’s most iconic timepieces. Having been part of all six moon landings, this legendary watch captures the heart of brand’s pioneering spirit. Demonstrating the brand’s commitment to evolution, this new 2021 edition, offers even more reliability, precision and excellence with Master Chronometer certification. Presented in an asymmetrical stainless steel case, paired with a stainless steel bracelet, this pioneering 42mm watch pays homage to the famous 4th generation model with a black step dial and an anodised aluminium bezel ring with the iconic dot over 90. Powered by the 3861 calibre movement, this chronograph benefits from 30-minute and 12-hour recorders and is water resistant to 5 bar (50 metres).",
        price: 6200,
        info: "New 2021 Speedmaster Moonwatch Professional Co-Axial Master Chronometer 42mm Mens O31030425001001"
        },
        {
        id: 5,
        title: "Rolex Cosmograph Daytona",
        stock: "In stock",
        quantity: 2,
        image: img18,
        description: "The emblematic style and superlative performance of the Oyster Perpetual Cosmograph Daytona have cemented its iconic status well beyond the motor racing circuits. To mark the 60th anniversary of the watch, Rolex ensures the legend lives on by revisiting the entire range, through high-precision reworking that concerns the case and face as well as the movement. The numerous adjustments and evolutions are a reminder that the pursuit of excellence is a race with no finish line.",
        price: 22500 ,
        info: "Movement:Automatic 4130 Case:Stainless steel (40mm) w/ black monobloc Cerachrom bezel, engraved tachymetric scale"
        },
        {
        id: 6,
        title: "Orient Mako 40",
        stock: "In stock",
        quantity: 12,
        image: img19,
        description: "An Orient Mako, but not as you know it! This latest model features a new, smaller 40mm case and clean, contemporary design. The absence of the signature crown guards and a simple date-only window gives the watch a simple and stripped back look, making it ideal for wear in a range of different environments. The watch has 200m of water resistance and is powered by the familiar and reliable F6722 automatic in-house movement.",
        price: 350,
        info: "RA-AC0Q02L Stylish unisex diver-style model with new a compact case size and sleek stainless steel bezel and bracelet"
        },
        {
        id: 7,
        title: "Rolex Daytona Rainbow",
        stock: "In stock",
        quantity: 1,
        image: img20,
        description: "This Rolex Cosmograph Daytona staple is colorful, elegant and exudes luxury with its rainbow bezel. Designed in a 40mm 18-carat rose gold case, it features a rich black dial with snailed counters, rainbow hour markers and rose gold hands. Adding a feminine touch to this classic model, it features an ombre-effect diamond bezel with diamond accents surrounding the case, push pieces and screw-down crown. This beauty is housed on an 18ct rose gold Oyster bracelet with Oysterlock folding-clasp.",
        price: 400000,
        info: "116595RBOW Rainbow Black Dial Rose Gold"
        },
        {
        id: 8,
        title: "Zenith El Primero",
        stock: "In stock",
        quantity: 3,
        image: img21,
        description: "The Chronomaster collection showcases the Manufactures mastery of the automatic high-frequency chronograph movement and the unique design language it established in over 50 years. From faithful reproductions of its most emblematic references from the 1960s and 1970s to reaching new levels of precision with the 1/10 th of a second function in the evolved version of the famed calibre, the Chronomaster collection bridges the past and present of the most prized automatic chronograph ever made.",
        price: 10300,
        info: "Specs: -Fits up to 7.75-inch wrist -Automatic movement-41mm-White dial-18k rose gold"
        }

    ]

    

}]

export default dataProducts