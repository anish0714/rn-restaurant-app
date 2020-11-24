import BrowseFood from "../../assets/images/BrowseFood.png";
import OrderFood from "../../assets/images/OrderFood.png";
import MakeReservations from "../../assets/images/MakeReservations.png";
import QuickSearch from "../../assets/images/QuickSearch.png";
import ApplePay from "../../assets/images/ApplePay.png";

export const slider = [
  {
    id: 0,
    image: BrowseFood,
    title: "Browse  Food",
    description:
      "Welcome to our restaurant app! Log in and check  out our delicious food.",
  },
  {
    id: 1,
    image: OrderFood,
    title: "Order Food",
    description:
      "Hungry? Order food in just a few clicks and we’ll take care of you..",
  },
  {
    id: 2,
    image: MakeReservations,
    title: "Make Reservations",
    description: "Book a table in advance to avoid waiting in line",
  },
  {
    id: 3,
    image: QuickSearch,
    title: "Quick Search",
    description: "Quickly find food items you like the most",
  },
  {
    id: 4,
    image: ApplePay,
    title: "Apple Pay",
    description:
      "We know you’re busy, so you can pay with your phone in just one click",
  },
];

export const users = [
  {
    id: 0,
    userId: "anish",
    password: "anish123456",
  },
  {
    id: 1,
    userId: "abhishek",
    password: "abhishek123456",
  },
  {
    id: 3,
    userId: "chetan",
    password: "chetan123456",
  },
  {
    id: 4,
    userId: "vishal",
    password: "vishan123456",
  },
  {
    id: 5,
    userId: "pranita",
    password: "pranita123456",
  },
];

export const categories = [
  {
    categoryId: 0,
    title: "Breakfast",
    imageUrl:
      "https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg",
  },
  {
    categoryId: 1,
    title: "Raimen",
    imageUrl:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F4228906cb4af7dccaf0c7809e5e354a1a6f693b0",
  },
  {
    categoryId: 2,
    title: "Sandwitches",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg",
  },
  {
    categoryId: 5,
    title: "Mediterranean",
    imageUrl: "https://i.redd.it/kx2k5ztk2gv21.jpg",
  },
  {
    categoryId: 4,
    title: "Japanese",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/57/Oseti.jpg",
  },
  {
    categoryId: 3,
    title: "Burgers",
    imageUrl:
      "https://www.seriouseats.com/recipes/images/2014/09/20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus.jpg",
  },
  {
    categoryId: 6,
    title: "Sushi",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1200px-Sushi_platter.jpg",
  },
  {
    categoryId: 7,
    title: "New Mexican",
    imageUrl:
      "https://travel.home.sndimg.com/content/dam/images/travel/stock/2018/7/18/0/iStock_491325781_NewMexicoCuisine.jpg.rend.hgtvcom.966.644.suffix/1531951040896.jpeg",
  },
  {
    categoryId: 8,
    title: "Bar Food",
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/9/2018/01/carnitas-and-chutney-grilled-cheese-sandwich-XL-RECIPE0218.jpg",
  },
  {
    categoryId: 9,
    title: "Italian",
    imageUrl:
      "https://static.onecms.io/wp-content/uploads/sites/23/2020/06/23/italian-food-2000.jpg",
  },
];

export const foodItem = [
  {
    foodId: 3,
    categoryId: 3,
    title: "Veggie Burger",
    cost: "100",
    description:
      "A veggie burger is a burger patty that does not contain meat. These burgers may be made from ingredients like beans, especially soybeans and tofu, nuts, grains, seeds or fungi such as mushrooms or mycoprotein. The patties that are the essence of a veggie burger have existed in various Eurasian cuisines for millennia, including in the form of disc-shaped grilled or fried meatballs or as koftas, a commonplace item in Indian cuisine. These may contain meats or be made of entirely vegetarian ingredients such as legumes or other plant-derived proteins.",
    photo_url:
      "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/05/veggie-burger-recipe-5.jpg",
    photosArray: [
      "https://images.immediate.co.uk/production/volatile/sites/2/2018/10/OLI-1018_Everyday-MASHBurger_28549-13fca05.jpg?quality=90&resize=960%2C408",
      "https://assets.bonappetit.com/photos/57acae2d1b33404414975121/16:9/w_3631,h_2042,c_limit/ultimate-veggie-burger.jpg",
      "https://kiipfit.com/wp-content/uploads/2017/06/7-ingredient-green-monster-veggie-burger-featured-image.jpg",
    ],
  },
  {
    foodId: 30,
    categoryId: 3,
    title: "Chicken Burger",
    cost: "150",
    description:
      'A chicken sandwich is a sandwich that typically consists of boneless, skinless chicken breast served between slices of bread, with pickles, on a bun, or on a roll. Variations on the "chicken sandwich" include the chicken burger or chicken on a bun, hot chicken, and chicken salad sandwich.',
    photo_url:
      "https://hips.hearstapps.com/hmg-prod/images/190416-chicken-burger-082-1556204252.jpg",
    photosArray: [
      "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg",
      "https://images.immediate.co.uk/production/volatile/sites/2/2017/06/Butchies-2.jpg?quality=90&crop=10px%2C1099px%2C3819px%2C1643px&resize=960%2C408",
      "https://sifu.unileversolutions.com/image/en-LK/recipe-topvisual/2/1260-709/crispy-fried-chicken-burger-50388014.jpg",
    ],
  },
  {
    foodId: 0,
    categoryId: 0,
    title: "Eggs and Bread",
    cost: "20",
    description:
      "The dish is typically bread with an egg in the center and then cooked with a little butter or oil. ... The bread, sometimes buttered prior to cooking, is fried in a pan with butter, margarine, cooking oil, or other fat. When browned, the bread is flipped, and the egg is cracked into the basket cut into the toast.",
    photo_url:
      "https://du7ybees82p4m.cloudfront.net/5618f8a34a7492.01132141.jpg?width=910&height=512",
    photosArray: [
      "https://www.simplyhappyfoodie.com/wp-content/uploads/2019/05/egg-in-a-hole-1.jpg",
      "https://feelgoodfoodie.net/wp-content/uploads/2019/04/Baked-Eggs-in-Bread-8.jpg",
      "https://realhousemoms.com/wp-content/uploads/Eggs-in-a-Basket-IG.jpg",
    ],
  },
  {
    foodId: 10,
    categoryId: 0,
    title: "Dosa",
    cost: "80",
    description:
      "A dose/dosai is a rice pancake, originating from South India, made from a fermented batter predominantly consisting of lentils and rice. Dosa is the Anglicized name of a variety of South Indian names for the dish, for example dosai in Tamil , dose in Kannada dosa in Malayalam . It is somewhat similar to a crepe in appearance, although savoury flavours are generally emphasized (sweet variants also exist). Its main ingredients are rice and black gram, ground together in a fine, smooth batter with a dash of salt, then fermented. Dosas are a common dish in South Indian cuisine, but have become popular all over the Indian subcontinent in recent times. Traditionally, dosas are served hot along with chutney and in recent times sambar. Other accompaniments include chutney powder (a fine groundnut and lentil powder).",
    photo_url: "https://sukhis.com/wp-content/uploads/2020/01/Dosa-500x400.jpg",
    photosArray: [
      "https://static.toiimg.com/photo/63841432.cms",
      "https://media.cntraveller.in/wp-content/uploads/2020/05/dosa-recipes.jpg",
      "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Dosai_Chutney_Hotel_Saravana_Bhavan.jpg/1200px-Dosai_Chutney_Hotel_Saravana_Bhavan.jpg",
      "https://secureservercdn.net/104.238.69.231/db4.60a.myftpupload.com/wp-content/uploads/2015/12/Masala-Dosa-H1.jpg",
    ],
  },
  {
    foodId: 2,
    categoryId: 2,
    title: "Cheesy Sandwitch",
    cost: "50",
    description:
      "A cheese sandwich is a basic sandwich generally made with one or more varieties of cheese on any sort of bread, such as flat bread or wheat bread, that may also include spreads such as butter or mayonnaise.",
    photo_url:
      "https://culinaryginger.com/wp-content/uploads/Triple-grilled-cheese-14-720x405.jpg",
    photosArray: [
      "https://www.simplyrecipes.com/wp-content/uploads/2019/05/EYF-Italian-Grilled-Cheese-LEAD-3.jpg",
      "https://images-gmi-pmc.edge-generalmills.com/f72774ec-61dc-4e9c-b32f-2da9d28d5b5d.jpg",
      "https://www.ndtv.com/cooks/images/CHEESE.SANDWITCH.765%281%29.jpg",
    ],
  },
  {
    foodId: 20,
    categoryId: 2,
    title: "Grill Sandwitch",
    cost: "30",
    description:
      "A toasted sandwich, grilled cheese sandwich, cheese toastie, or grilled cheese is a hot sandwich made with one or more varieties of cheese (a cheese sandwich) on bread.",
    photo_url:
      "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2014/01/veg-grilled-sandwich-recipe-1.jpg",
    photosArray: [
      "https://www.ndtv.com/cooks/images/grilled.sandwich.jpg",
      "https://img-global.cpcdn.com/recipes/946f47872a4af5f2/1200x630cq70/photo.jpg",
      "https://www.tarladalal.com/members/9306/procstepimgs/vegetable-grilled-sandwich_dsc7221-(23)-24-185569.jpg",
    ],
  },
  {
    foodId: 1,
    categoryId: 1,
    title: "Ramen Noodles",
    cost: "120",
    description:
      "It consists of Chinese wheat noodles served in a meat or (occasionally) fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork (叉焼, chāshū), nori (dried seaweed), menma, and scallions.",
    photo_url:
      "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg",
    photosArray: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDIBLNUkfpfb_y0d7PfFvj84WoezL9Ci-8Q&usqp=CAU",
      "https://assets.bonappetit.com/photos/57ae038653e63daf11a4e122/master/pass/shoyu-ramen.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hcoBs88KWmyKabxpg-HrE0Da1vza4kwVcQ&usqp=CAU",
    ],
  },
  {
    foodId: 4,
    categoryId: 4,
    title: "Miso Soup",
    cost: "200",
    description:
      "Miso soup (味噌汁, misoshiru) is a traditional Japanese soup consisting of a dashi stock into which softened miso paste is mixed. In addition, there are many optional ingredients (various vegetables, tofu, abura-age, etc.) that may be added depending on regional and seasonal recipes, and personal preference. In Japanese food culture, Miso soup is a representative of soup dishes served with rice. Miso soup is also called Omiotsuke (御味御付).",
    photo_url:
      "https://assets.epicurious.com/photos/576450dde047a6cf1ee8268c/2:1/w_1260%2Ch_630/miso-soup.jpg",
    photosArray: [
      "https://tasteasianfood.com/wp-content/uploads/2019/01/miso-soup-3-featured.jpg",
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F365400.jpg&q=85",
      "https://www.justonecookbook.com/wp-content/uploads/2020/01/Vegetable-Miso-Soup-5573-I.jpg",
    ],
  },
];
