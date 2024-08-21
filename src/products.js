const products = [
    {
        id:1,
        type:"electronics",
        image: "images/Apple2023MacBookPro.webp",
        description:"Apple 2023 Macbook Pro",
        price:899
    },
    {
        id:2,
        type:"electronics",
        image:"images/Apple 2024 MacBook Air 13.webp",
        description:"Apple 2024 MacBook Air 13",
        price:799
    },
    {
        id:3,
        type:"electronics",
        image:"images/Apple iPhone 14 Plus (512 GB) - Purple.webp",
        description:"Apple iPhone 14 Plus (512 GB) - Purple",
        price:299
    },
    {
        id:4,
        type:"electronics",
        image:"images/Apple iPhone 15 (128 GB) - Black.webp",
        description:"Apple iPhone 15 (128 GB) - Black",
        price:399
    },
    {
        id:5,
        type:"electronics",
        image:"images/Apple iPhone 15 Pro (256 GB) - Natural Titanium.webp",
        description:"Apple iPhone 15 Pro (256 GB) - Natural Titanium",
        price:499
    },
    {
        id:6,
        type:"electronics",
        image:"images/Apple iPhone 15 Pro Max (256 GB).webp",
        description:"Apple iPhone 15 Pro Max (256 GB)",
        price:559
    },
    {
        id:7,
        type:"electronics",
        image:"images/ASUS ROG Strix G16 (2023).webp",
        description:"ASUS ROG Strix G16 (2023)",
        price:599
    },
    {
        id:8,
        type:"electronics",
        image:"images/ASUS ROG Zephyrus Duo 16.webp",
        description:"ASUS ROG Strix G16 (2023)",
        price:799
    },
    {
        id:9,
        type:"electronics",
        image:"images/ASUS TUF Gaming A15 Series AMD Ryzen 9 NVIDIA RTX 2060.webp",
        description:"ASUS TUF Gaming A15 Series AMD Ryzen 9 NVIDIA RTX 2060",
        price:499
    },
    {
        id:10,
        type:"electronics",
        image:"images/ASUS TUF Gaming F15 (2023).webp",
        description:"ASUS TUF Gaming F15 (2023)",
        price:259
    },
    {
        id:11,
        type:"electronics",
        image:"images/ASUS Vivobook Go 15 OLED (2023).webp",
        description:"ASUS Vivobook Go 15 OLED (2023)",
        price:399
    },
    {
        id:12,
        type:"electronics",
        image:"images/Dell Alienware m16 R1 Gaming Laptop.webp",
        description:"Dell Alienware m16 R1 Gaming Laptop",
        price:699
    },
    {
        id:13,
        type:"electronics",
        image:"images/Dell Alienware x16 Gaming Laptop.webp",
        description:"Dell Alienware x16 Gaming Laptop",
        price:599
    },
    {
        id:14,
        type:"accessories",
        image:"images/Diesel Silicone Mr. Daddy 2 Analog Men Watch.webp",
        description:"Diesel Silicone Mr. Daddy 2 Analog Men Watch",
        price:29
    },
    {
        id:15,
        type:"games",
        image:"images/EA Sports FC 24  Standard Edition  PC.webp",
        description:"EA Sports FC 24 Standard Edition PC",
        price:15
    },
    {
        id:16,
        type:"games",
        image:"images/Elden Ring  Shadow of the Erdtree Edition  PlayStation 5.webp",
        description:"Elden Ring Shadow of the Erdtree Edition (PS5)",
        price:57
    },
    {
        id:17,
        type:"games",
        image:"images/Far Cry 6 - PlayStation 5 Standard Edition.webp",
        description:"Far Cry 6 - (PS5) Standard Edition ",
        price:34
    },
    {
        id:18,
        type:"games",
        image:"images/GTA 5 GRAND THEFT AUTO V PREMIUM EDITION (Enterprise Pack,Cash,DLC's, $1,000,000) PC CODE (NO CDDVD).webp",
        description:"GTA 5 GRAND THEFT AUTO V PREMIUM EDITION (PC)",
        price:15
    },
    {
        id:19,
        type:"games",
        image:"images/HIT-MAN III (PC Game Code) - EMAIL DELIVERY IN 2 HRS - (PC).webp",
        description:"HIT-MAN III (PC)",
        price:12
    },
    {
        id:20,
        type:"accessories",
        image:"images/Hublot Big Bang Ferrari Carbon Red Magic Limited.webp",
        description:"Hublot Big Bang Ferrari Carbon Red Magic Limited",
        price:125
    },
    {
        id:21,
        type:"accessories",
        image:"images/Hublot Classic Fusion 521.Cq.1420.Lr.Juv18 Chronograph Juventus Limited Edition Of 200 Watch.webp",
        description:"Hublot Classic Fusion Chronograph watch",
        price:199
    },
    {
        id:22,
        type:"accessories",
        image:"images/Hublot Classic Fusion Ultra-Thin Skeleton Tourbillon King Unique Piece 45Mm Mení»S Watch.webp",
        description:"Hublot Classic Fusion Skeleton Tourbillon Watch",
        price:154
    },
    {
        id:23,
        type:"accessories",
        image:"images/JBL Cinema SB271, Dolby Digital Soundbar.webp",
        description:"JBL Cinema Dolby Digital Soundbar",
        price:128
    },
    {
        id:24,
        type:"accessories",
        image:"images/JBL Pulse 5, Wireless Portable Bluetooth Speaker.webp",
        description:"JBL Pulse 5 Bluetooth Speaker",
        price:259
    },
    {
        id:25,
        type:"accessories",
        image:"images/Marshall Willen 10 W Portable Bluetooth Speaker - Black & Brass.webp",
        description:"Marshall Willen 10 W Portable Bluetooth Speaker",
        price:150
    },
    {
        id:26,
        type:"accessories",
        image:"images/Marshall Woburn Iii Wireless Bluetooth Powered Speaker (Black), 90 Watts.webp",
        description:"Marshall Woburn Iii Bluetooth Speaker(Black) 90 Watts",
        price:899
    },
    {
        id:27,
        type:"games",
        image:"images/Marvel's Spiderman Miles Morales (PS5).webp",
        description:"Marvel's Spiderman Miles Morales (PS5)",
        price:25
    },
    {
        id:28,
        type:"electronics",
        image:"images/MSI CreatorPro Z16 HX.webp",
        description:"MSI CreatorPro Z16 HX",
        price:599
    },
    {
        id:29,
        type:"accessories",
        image:"images/Philips Audio 5.1 Channel.webp",
        description:"Philips Audio Home Theatre 5.1 Channel speaker",
        price:95
    },
    {
        id:30,
        type:"accessories",
        image:"images/Philips Audio 80 W Bluetooth Party Speaker.webp",
        description:"Philips 80W Bluetooth Party Speaker",
        price:198
    },
    {
        id:31,
        type:"accessories",
        image:"images/Philips Convertible Soundbar.webp",
        description:"Philips Convertible Soundbar",
        price:20
    },
    {
        id:32,
        type:"accessories",
        image:"images/Police Analog Black Dial Men's Watch-PLPEWJG2118104.webp",
        description:"Police Analog Black Dial Men's Watch",
        price:85
    },
    {
        id:33,
        type:"accessories",
        image:"images/Police Analog Yellow Dial Men's Watch-PLPEWJG2118103.webp",
        description:"Police Analog Yellow Dial Men's Watch",
        price:89
    },
    {
        id:34,
        type:"games",
        image:"images/Red Dead Redemption 2 Europe Region(PS4).webp",
        description:"Red Dead Redemption 2(PS4)",
        price:25
    },
    {
        id:35,
        type:"games",
        image:"images/Red Dead Redemption 2 PC Rockstar Launcher code.webp",
        description:"Red Dead Redemption 2 (PC)",
        price:25
    },
    {
        id:36,
        type:"watch",
        image:"images/Rolex Day-Date 41 White Gold Mení»S Watch.webp",
        description:"Rolex Day-Date 41 White Gold MeníS Watch",
        price:699
    },
    {
        id:37,
        type:"accessories",
        image:"images/Rolex Day-Date M228349Rbr-0040 40Mm  Meteorite Diamond Dial Mení»S Watch.webp",
        description:"Rolex Day-Date Meteorite Diamond Dial Mení»S Watch",
        price:899
    },
    {
        id:38,
        type:"electronics",
        image:"images/Samsung Galaxy S23 5G.webp",
        description:"Samsung Galaxy S23 5G",
        price:425
    },
    {
        id:39,
        type:"electronics",
        image:"images/SAMSUNG Galaxy S23 FE 5G.webp",
        description:"SAMSUNG Galaxy S23 FE 5G",
        price:399
    },
    {
        id:40,
        type:"electronics",
        image:"images/Samsung Galaxy S23 Ultra 5G.webp",
        description:"Samsung Galaxy S23 Ultra 5G",
        price:549
    },
    {
        id:41,
        type:"electronics",
        image:"images/Samsung Galaxy S24 5G AI.webp",
        description:"Samsung Galaxy S24 (5G) AI",
        price:498
    },
    {
        id:42,
        type:"electronics",
        image:"images/Samsung Galaxy S24 Ultra 5G AI.webp",
        description:"Samsung Galaxy S24 Ultra (5G) AI",
        price:649
    },
    {
        id:43,
        type:"accessories",
        image:"images/Sony Bravia Theatre Quad (HT-A9M2) Premium Soundbar System.webp",
        description:"Sony Bravia Theatre Quad Premium Soundbar System",
        price:359
    },
    {
        id:44,
        type:"games",
        image:"images/Sony God Of War Ragnarok  Standard Edition  PS5 Game (PlayStation 5).webp",
        description:"God Of War Ragnarok Standard Edition(PS5)",
        price:45
    },
    {
        id:45,
        type:"accessories",
        image:"images/Sony SA-D40 4.1 Channel Multimedia Speaker System with Bluetooth (Black).webp",
        description:"Sony 4.1 Channel Multimedia Speaker System(Black)",
        price:66
    },
    {
        id:46,
        type:"accessories",
        image:"images/Sony Srs-Xb13 Wireless Extra Bass Portable Compact Bluetooth Speaker with 16 Hours Battery Life.webp",
        description:"Sony Portable Bluetooth Speaker",
        price:15
    },
    {
        id:47,
        type:"games",
        image:"images/Sony The Last of Us Part II (PS4).webp",
        description:"The Last of Us Part II(PS4)",
        price:29
    },
    {
        id:48,
        type:"electronics",
        image:"images/Sony Xperia 1 IV 512GB 5G Smartphone.webp",
        description:"Sony Xperia 1 IV 512GB(5G)",
        price:399
    },
    {
        id:49,
        type:"accessories",
        image:"images/Tommy Hilfiger Men Black Dial Analog Watch Analog Black Dial Men's Watch-TH1792030.webp",
        description:"Tommy Hilfiger Men Analog Watch",
        price:22
    },
    {
        id:50,
        type:"accessories",
        image:"images/Tommy Hilfiger Men Leather Analog Blue Dial Watch-Th1791399Neth1791399, Band Color-Brown.webp",
        description:"Tommy Hilfiger Men Leather Analog watch ",
        price:34
    },



];

export default products;