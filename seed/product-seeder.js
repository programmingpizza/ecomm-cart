var Product=require('../models/product');

var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products=[
    new Product({
    image: "https://upload.wikimedia.org/wikipedia/en/4/41/Deadpool_video_game_cover.png",
    title: "Deadpool",
    description:"Deadpool is an antihero action comedy beat 'em up video game based on the Marvel Comics character of the same name. The game was developed by High Moon Studios and published by Activision for Microsoft Windows, PlayStation 3 and Xbox 360. Former Deadpool comic writer Daniel Way created the game's plot, and Nolan North voiced the character. The game received mixed reviews, praising plot elements while finding gameplay itself lacking.",
    price:"1100"
    }),
    new Product({
        image : "https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg",
        title: "Assasins Creed",
        description:"ssassin's Creed is a franchise centered on an action-adventure video game series developed by Ubisoft. It depicts a centuries-old struggle pitting the Assassins, who fight for peace and free will, against the Templars, who believe peace comes through control of humanity. The series features historical fiction mixed with real-world historical events and figures. The series took inspiration from the novel Alamut by the Slovenian writer Vladimir Bartol, while building upon concepts from the Prince of Persia series.",
        price:"200"
    }),
    
    new Product({
        image : "https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg",
        title: "Spiderman",
        description:"Spider-Man is an upcoming action-adventure game based on the Marvel Comics superhero Spider-Man, developed by Insomniac Games and published by Sony Interactive Entertainment for PlayStation 4. It will be the first licensed game developed by Insomniac. The game will tell a new story about Spider-Man that is not tied to an existing comic book, video game, or film. It will cover both the Peter Parker and Spider-Man aspects of the character and will feature an older and more experienced Spider-Man. The game is scheduled to be released worldwide on September 7, 2018.",
        price:"2000"
    }),


    

    new Product({
    image: "http://www.theisozone.com/images/cover/windows_1399.jpg",
    title: "Farcry",
    description:"Far Cry 5 is an action-adventure first-person shooter game developed by Ubisoft Montreal and Ubisoft Toronto and published by Ubisoft for Microsoft Windows, PlayStation 4 and Xbox One. It is the eleventh entry and the fifth main title in the Far Cry series, and was released on March 27, 2018.",
    price:"1000"
    }),
    
    new Product({
        image : "https://upload.wikimedia.org/wikipedia/commons/d/dc/74892143_f94145facb.jpg",
        title: "Nike shoes",
        description:"Drawing inspiration from the iconic Air Jordan 1, the Air Jordan 1 Mid features similar design elements as the original, but is updated with modern materials for a spin on the shoe that started an on-court sensation back in 1985. The AJ 1 is a piece of basketball and sneaker history. The timeless design is still popular today decades after the original debuted, so make sure you add this historic shoe to your rotation.",
        price:"100"
    }),
    
    new Product({
        image : "https://library.sfsu.edu/sites/default/files/Dell-Latitude-6442-600x400-Transparent.png",
        title: "Dell laptop",
        description:"The Dell Inspiron is a computer product line produced by Dell as a range of ultra-portable laptop computers. Early models were equipped with Mobile Celeron or Mobile Pentium II processors and SDRAM. The Inspiron mainly competes against computers such as Acer's Aspire, Asus' Transformer Book Flip, VivoBook and Zenbook, HP's Pavilion and Envy, Lenovo's IdeaPad and Toshiba's Satellite.",
        price:"1000"
    }),

    new Product({
        image : "https://www.theiphonewiki.com/w/images/thumb/c/cd/IPhone_X.png/300px-IPhone_X.png",
        title: "Iphone x",
        description:"The iPhone X is intended to showcase what Apple considers technology of the future, specifically adopting OLED screen technology for the first time in iPhone history, as well as using a glass and stainless-steel form factor, offering wireless charging, and removing the home button in favor of introducing Face ID, a new authentication method using advanced technologies to scan the user's face to unlock the device, as well as for the use of animated emojis called Animoji.",
        price:"1010"
    }),
    new Product({
        image : "https://upload.wikimedia.org/wikipedia/commons/6/67/DJI_Matrice_600_Pro_UAS_unit_by_D_Ramey_Logan.jpg",
        title: "DJI Drone",
        description:"The Phantom series are DJI's consumer flagship quadcopters. They are currently the most popular product, and since launch, have evolved to integrated flight programming with a camera, Wi-Fi or Lightbridge connectivity, and the pilot’s mobile device. Phantoms are made for aerial cinematography and photography applications, but are also used in recreational use.",
        price:"800"
    }),
    new Product({
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/EOS_650D.jpg/1024px-EOS_650D.jpg",
        title: "Canon DSLR",
        description:"The Canon EOS 650D, known as the Kiss X6i in Japan or the Rebel T4i in the Americas, is an 18.0 megapixels digital single-lens reflex camera (DSLR), announced by Canon on June 8, 2012. It is the successor of the EOS 600D/Kiss X5/Rebel T3i and is the predecessor of the EOS 700D/Kiss X7i/Rebel T5i. Sales began on June 15, 2012.",
        price:"500"
    }),        
]



// let products = [
//     {
//         image : "http://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/15_7577/global_spi/red/notebook-inspiron-15-7577-bestof-500-ng.psd?fmt=jpg&wid=115",
//         title: "Dell Inspiron 17' Laptop",
//         description:"Dell Inspiron Laptop",
//         price:"1100"
//     },
//     {
//         image : "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05653726.png",
//         title: "HP Spectre 17' Laptop",
//         description:"HP Spectre Laptop",
//         price:"1200"
//     },
//     {
//         image : "https://www3.lenovo.com/medias/resized-images-for-yoga-730-15-features-1.jpg?context=bWFzdGVyfHJvb3R8MjA2NTh8aW1hZ2UvanBlZ3xoNDkvaDM4Lzk2NzkwNzY3NTM0MzguanBnfDkwNDA3MWYzZDJiNzQ0MDIyMzgzMGM2MGI4ZWJjZWQ5ZGNlZmNiNTgzZGZiYzU1MWVlMjMyNjQ0Yzk5YTgyZjI&w=1920",
//         title: "Lenovo Yoga 15' Laptop",
//         description:"Lenovo Yoga 730 Laptop",
//         price:"1100"
//     }
// ]

// for(let element of products) {
//     let { image, title, description, price } = element
//     let product = new Product({
//         image,
//         title,
//         description,
//         price
//     })
//
//     product.save()
// }
var done=0;
for (var i=0;i<products.length;i++){
    products[i].save( function (err,result) {
        done++;
        if(done=== products.length){
            exit();
        }
    });

}

function exit(){
    mongoose.disconnect();
}

module.exports = products





