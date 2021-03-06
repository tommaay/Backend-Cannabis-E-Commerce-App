/**
 * @api {post} https://flower-co.herokuapp.com/api/products Add a new product
 * @apiGroup Products
 * @apiParam {String} name Product name
 * @apiParam {String} description The description of the product
 * @apiParam {String} image The image url
 * @apiParam {String} thc The amount of THC
 * @apiParam {String} cbd The amount of CBD
 * @apiParam {Integer} category The product category
 * @apiParam {Integer} type The product type
 * @apiSuccess {Object} product Object containing the product's info
 * @apiSuccessExample {json} Success Response:
 *      201 Created
 *      {
 *          "id": 1,
 *          "name": "Kiva Chocolate Bar-0",
 *          "description": "Meet KIVA: California’s premier cannabis-infused confectioner. With a variety of flavors and forms, KIVA delivers a carefully curated edible experience with every bite – every time. The KIVA Vanilla Chai Chocolate Bar is no exception – sprinkled with chai spice and hints of vanilla bean, this dreamy dessert is sure to elevate your tastebuds and your mind. Ingredients: Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Potassium Carbonate, Lecithin (Sunflower and/or Soya), Vanilla), Cannabis Extract. Allergy Warning: May Contain Traces of Nuts and Milk.",
 *          "image": "https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE1kIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7989ee32cb1ca2f2de8cd1caee8855dba65fc118/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--06afb311380d7cc3fcc597107955bd30149b6764/vanilla%20kiva.png",
 *          "thc": "15%",
 *          "cbd": "5%",
 *          "category": 1,
 *          "type": 3
 *      }
 */

/**
 * @api {get} https://flower-co.herokuapp.com/api/products Get list of all products
 * @apiGroup Products
 * @apiSuccess {Array} products List of product objects
 * @apiSuccessExample {Array} Success Response:
 *      200 OK
 *       [
 *           {
 *               "id": 1,
 *               "name": "Kiva Chocolate Bar-0",
 *               "description": "Meet KIVA: California’s premier cannabis-infused confectioner. With a variety of flavors and forms, KIVA delivers a carefully curated edible experience with every bite – every time. The KIVA Vanilla Chai Chocolate Bar is no exception – sprinkled with chai spice and hints of vanilla bean, this dreamy dessert is sure to elevate your tastebuds and your mind. Ingredients: Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Potassium Carbonate, Lecithin (Sunflower and/or Soya), Vanilla), Cannabis Extract. Allergy Warning: May Contain Traces of Nuts and Milk.",
 *               "image": "https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE1kIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7989ee32cb1ca2f2de8cd1caee8855dba65fc118/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--06afb311380d7cc3fcc597107955bd30149b6764/vanilla%20kiva.png",
 *               "thc": "15%",
 *               "cbd": "5%",
 *               "category": {
 *                   "id": 1,
 *                   "name": "Edibles",
 *                   "description": "Our edibles are the easiest way to dose efficiently and consistently. With these, any day can be a relaxed and trusted experience. Before you realize, you'll be hungry for more."
 *               },
 *               "type": {
 *                   "id": 3,
 *                   "name": "Indica"
 *               },
 *               "specs": [
 *                   {
 *                       "id": 1,
 *                       "product_id": 1,
 *                       "size": "1 bar",
 *                       "price": 1200,
 *                       "inventory": 100
 *                   }
 *               ]
 *           },
 *           {
 *               "id": 2,
 *               "name": "Boss OG Pre-Ground-0",
 *               "description": "Boss OG is a fragrant OG Kush pheno with similar qualities to Fire OG. This strain has OG aromas of lemon, lime, and fuel, and offers consumers happy, relaxing effects.",
 *               "image": "https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaW9mIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e0d42ff6385b473929de6ad07106fb15cd78d725/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/preground.png",
 *               "thc": "15%",
 *               "cbd": "5%",
 *               "category": {
 *                   "id": 2,
 *                   "name": "Ready to Roll",
 *                   "description": "Our Ready to Roll flower is all you need to roll one up at a moment's notice. These half ounces of pre-ground quality cannabis are convenient, potent, and priced to make any day a cheap vacation."
 *               },
 *               "type": {
 *                   "id": 1,
 *                   "name": "Hybrid"
 *               },
 *               "specs": [
 *                   {
 *                       "id": 2,
 *                       "product_id": 2,
 *                       "size": "Half Oz",
 *                       "price": 2000,
 *                       "inventory": 100
 *                   }
 *               ]
 *           }
 *      ]
 */

/**
 * @api {get} https://flower-co.herokuapp.com/api/products/:id Get product by ID
 * @apiGroup Products
 * @apiParam {Integer} id The product's id
 * @apiSuccess {Object} product Object containing the product's info
 * @apiError {404} productNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      200 OK
 *      {
 *          "id": 2,
 *          "name": "Boss OG Pre-Ground-0",
 *          "description": "Boss OG is a fragrant OG Kush pheno with similar qualities to Fire OG. This strain has OG aromas of lemon, lime, and fuel, and offers consumers happy, relaxing effects.",
 *          "image": "https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaW9mIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e0d42ff6385b473929de6ad07106fb15cd78d725/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/preground.png",
 *          "thc": "15%",
 *          "cbd": "5%",
 *          "category": {
 *              "id": 2,
 *              "name": "Ready to Roll",
 *              "description": "Our Ready to Roll flower is all you need to roll one up at a moment's notice. These half ounces of pre-ground quality cannabis are convenient, potent, and priced to make any day a cheap vacation."
 *          },
 *          "type": {
 *              "id": 1,
 *              "name": "Hybrid"
 *          },
 *          "specs": [
 *              {
 *                  "id": 2,
 *                  "product_id": 2,
 *                  "size": "Half Oz",
 *                  "price": 2000,
 *                  "inventory": 100
 *              }
 *          ]
 *      }
 */

/**
 * @api {delete} https://flower-co.herokuapp.com/api/products/:id Delete product
 * @apiGroup Products
 * @apiParam {Integer} id The product's id
 * @apiSuccess {Integer} id Should return the product's id
 * @apiError {404} productNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *
 *      1
 */

/**
 * @api {patch} https://flower-co.herokuapp.com/api/products/:id Update product
 * @apiGroup Products
 * @apiParam {Integer} id The product's id
 * @apiSuccess {Object} product Should return the updated product object
 * @apiError {404} productNotFound The requested content does not exist
 * @apiSuccessExample {json} Success Response:
 *      202 Accepted
 *      {
 *          "id": 1,
 *          "name": "Kiva Chocolate Bar-0",
 *          "description": "Meet KIVA: California’s premier cannabis-infused confectioner. With a variety of flavors and forms, KIVA delivers a carefully curated edible experience with every bite – every time. The KIVA Vanilla Chai Chocolate Bar is no exception – sprinkled with chai spice and hints of vanilla bean, this dreamy dessert is sure to elevate your tastebuds and your mind. Ingredients: Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Potassium Carbonate, Lecithin (Sunflower and/or Soya), Vanilla), Cannabis Extract. Allergy Warning: May Contain Traces of Nuts and Milk.",
 *          "image": "https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE1kIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7989ee32cb1ca2f2de8cd1caee8855dba65fc118/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--06afb311380d7cc3fcc597107955bd30149b6764/vanilla%20kiva.png",
 *          "thc": "15%",
 *          "cbd": "5%",
 *          "category": {
 *              "id": 1,
 *              "name": "Edibles",
 *              "description": "Our edibles are the easiest way to dose efficiently and consistently. With these, any day can be a relaxed and trusted experience. Before you realize, you'll be hungry for more."
 *          },
 *          "type": {
 *              "id": 3,
 *              "name": "Indica"
 *          }
 *      }
 */
