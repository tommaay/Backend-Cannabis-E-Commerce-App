define({ "api": [  {    "type": "post",    "url": "/api/users/login",    "title": "User login",    "group": "Authentication",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Password</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Object containing the user's info</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "202 Accepted\n{\n    \"id\": 1,\n    \"firstname\": \"Admin\",\n    \"lastname\": \"One\",\n    \"email\": \"admin@test.com\",\n    \"password\": \"$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW\",\n    \"zipcode\": 95123,\n    \"phone\": 5552227777,\n    \"birthday\": 511171200000,\n    \"is_admin\": 1\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "401",            "optional": false,            "field": "Unauthorized",            "description": "<p>Unauthorized credentials</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/apidoc/authDoc.js",    "groupTitle": "Authentication",    "name": "PostApiUsersLogin"  },  {    "type": "post",    "url": "/api/users/register",    "title": "Create a new user",    "group": "Authentication",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "firstname",            "description": "<p>The user's first name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "lastname",            "description": "<p>The user's last name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>Password</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "zipcode",            "description": "<p>The user's zipcode</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "phone",            "description": "<p>The user's phone number</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "birthday",            "description": "<p>The user's birthday</p>"          },          {            "group": "Parameter",            "type": "Boolean",            "optional": false,            "field": "is_admin",            "description": "<p>Set to True if the user is an admin</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Object containing the user's info</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "201 Created\n{\n    \"id\": 1,\n    \"firstname\": \"Admin\",\n    \"lastname\": \"One\",\n    \"email\": \"admin@test.com\",\n    \"password\": \"$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW\",\n    \"zipcode\": 95123,\n    \"phone\": 5552227777,\n    \"birthday\": 511171200000,\n    \"is_admin\": 1\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/apidoc/authDoc.js",    "groupTitle": "Authentication",    "name": "PostApiUsersRegister"  },  {    "type": "delete",    "url": "/api/products/:id",    "title": "Delete product",    "group": "Products",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The product's id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Should return the product's id</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "202 Accepted\n\n1",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "404",            "optional": false,            "field": "productNotFound",            "description": "<p>The id of the product was not found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/apidoc/productDoc.js",    "groupTitle": "Products",    "name": "DeleteApiProductsId"  },  {    "type": "get",    "url": "/api/products",    "title": "Get list of all products",    "group": "Products",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "products",            "description": "<p>List of product objects</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "200 OK\n[\n    {\n        \"id\": 1,\n        \"name\": \"Kiva Chocolate Bar-0\",\n        \"description\": \"Meet KIVA: California’s premier cannabis-infused confectioner. With a variety of flavors and forms, KIVA delivers a carefully curated edible experience with every bite – every time. The KIVA Vanilla Chai Chocolate Bar is no exception – sprinkled with chai spice and hints of vanilla bean, this dreamy dessert is sure to elevate your tastebuds and your mind. Ingredients: Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Potassium Carbonate, Lecithin (Sunflower and/or Soya), Vanilla), Cannabis Extract. Allergy Warning: May Contain Traces of Nuts and Milk.\",\n        \"image\": \"https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE1kIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7989ee32cb1ca2f2de8cd1caee8855dba65fc118/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--06afb311380d7cc3fcc597107955bd30149b6764/vanilla%20kiva.png\",\n        \"thc\": \"15%\",\n        \"cbd\": \"5%\",\n        \"category\": 1,\n        \"type\": 3\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Boss OG Pre-Ground-0\",\n        \"description\": \"Boss OG is a fragrant OG Kush pheno with similar qualities to Fire OG. This strain has OG aromas of lemon, lime, and fuel, and offers consumers happy, relaxing effects.\",\n        \"image\": \"https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaW9mIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e0d42ff6385b473929de6ad07106fb15cd78d725/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTmpBd2VEWXdNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--23feaba46ad0db49d6ebdab3718f32d89781e821/preground.png\",\n        \"thc\": \"15%\",\n        \"cbd\": \"5%\",\n        \"category\": 2,\n        \"type\": 1\n    },\n]",          "type": "Array"        }      ]    },    "version": "0.0.0",    "filename": "api/apidoc/productDoc.js",    "groupTitle": "Products",    "name": "GetApiProducts"  },  {    "type": "get",    "url": "/api/products/:id",    "title": "Get product by ID",    "group": "Products",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The product's id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "product",            "description": "<p>Object containing the product's info</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "200 OK\n{\n    \"id\": 1,\n    \"name\": \"Kiva Chocolate Bar-0\",\n    \"description\": \"Meet KIVA: California’s premier cannabis-infused confectioner. With a variety of flavors and forms, KIVA delivers a carefully curated edible experience with every bite – every time. The KIVA Vanilla Chai Chocolate Bar is no exception – sprinkled with chai spice and hints of vanilla bean, this dreamy dessert is sure to elevate your tastebuds and your mind. Ingredients: Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Potassium Carbonate, Lecithin (Sunflower and/or Soya), Vanilla), Cannabis Extract. Allergy Warning: May Contain Traces of Nuts and Milk.\",\n    \"image\": \"https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE1kIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7989ee32cb1ca2f2de8cd1caee8855dba65fc118/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--06afb311380d7cc3fcc597107955bd30149b6764/vanilla%20kiva.png\",\n    \"thc\": \"15%\",\n    \"cbd\": \"5%\",\n    \"category\": 1,\n    \"type\": 3\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "404",            "optional": false,            "field": "productNotFound",            "description": "<p>The id of the product was not found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/apidoc/productDoc.js",    "groupTitle": "Products",    "name": "GetApiProductsId"  },  {    "type": "patch",    "url": "/api/products/:id",    "title": "Update product",    "group": "Products",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The product's id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "product",            "description": "<p>Should return the updated product object</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "202 Accepted\n{\n    \"id\": 1,\n    \"name\": \"Kiva Chocolate Bar-0\",\n    \"description\": \"Meet KIVA: California’s premier cannabis-infused confectioner. With a variety of flavors and forms, KIVA delivers a carefully curated edible experience with every bite – every time. The KIVA Vanilla Chai Chocolate Bar is no exception – sprinkled with chai spice and hints of vanilla bean, this dreamy dessert is sure to elevate your tastebuds and your mind. Ingredients: Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Potassium Carbonate, Lecithin (Sunflower and/or Soya), Vanilla), Cannabis Extract. Allergy Warning: May Contain Traces of Nuts and Milk.\",\n    \"image\": \"https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE1kIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7989ee32cb1ca2f2de8cd1caee8855dba65fc118/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--06afb311380d7cc3fcc597107955bd30149b6764/vanilla%20kiva.png\",\n    \"thc\": \"15%\",\n    \"cbd\": \"5%\",\n    \"category\": 1,\n    \"type\": 3\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "404",            "optional": false,            "field": "productNotFound",            "description": "<p>The id of the product was not found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/apidoc/productDoc.js",    "groupTitle": "Products",    "name": "PatchApiProductsId"  },  {    "type": "post",    "url": "/api/products",    "title": "Add a new product",    "group": "Products",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Product name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>The description of the product</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "image",            "description": "<p>The image url</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "thc",            "description": "<p>The amount of THC</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "cbd",            "description": "<p>The amount of CBD</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "category",            "description": "<p>The product category</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "type",            "description": "<p>The product type</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "product",            "description": "<p>Object containing the product's info</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "201 Created\n{\n    \"id\": 1,\n    \"name\": \"Kiva Chocolate Bar-0\",\n    \"description\": \"Meet KIVA: California’s premier cannabis-infused confectioner. With a variety of flavors and forms, KIVA delivers a carefully curated edible experience with every bite – every time. The KIVA Vanilla Chai Chocolate Bar is no exception – sprinkled with chai spice and hints of vanilla bean, this dreamy dessert is sure to elevate your tastebuds and your mind. Ingredients: Semisweet Chocolate (Sugar, Unsweetened Chocolate, Cocoa Butter, Potassium Carbonate, Lecithin (Sunflower and/or Soya), Vanilla), Cannabis Extract. Allergy Warning: May Contain Traces of Nuts and Milk.\",\n    \"image\": \"https://flowercompany.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbE1kIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7989ee32cb1ca2f2de8cd1caee8855dba65fc118/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lOTWpRd2VESTBNRDRHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--06afb311380d7cc3fcc597107955bd30149b6764/vanilla%20kiva.png\",\n    \"thc\": \"15%\",\n    \"cbd\": \"5%\",\n    \"category\": 1,\n    \"type\": 3\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "api/apidoc/productDoc.js",    "groupTitle": "Products",    "name": "PostApiProducts"  },  {    "type": "delete",    "url": "/api/users/:id",    "title": "Delete user",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The user's id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>Should return the user's id</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "202 Accepted\n\n1",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "404",            "optional": false,            "field": "UserNotFound",            "description": "<p>The id of the user was not found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/apidoc/userDoc.js",    "groupTitle": "Users",    "name": "DeleteApiUsersId"  },  {    "type": "get",    "url": "/api/users",    "title": "Get list of all users",    "group": "Users",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "users",            "description": "<p>List of user objects</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "200 OK\n[\n    {\n        \"id\": 1,\n        \"firstname\": \"Admin\",\n        \"lastname\": \"One\",\n        \"email\": \"admin@test.com\",\n        \"password\": \"$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW\",\n        \"zipcode\": 95123,\n        \"phone\": 5552227777,\n        \"birthday\": 511171200000,\n        \"is_admin\": 1\n    },\n    {\n        \"id\": 2,\n        \"firstname\": \"Customer\",\n        \"lastname\": \"One\",\n        \"email\": \"customer@test.com\",\n        \"password\": \"$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW\",\n        \"zipcode\": 95133,\n        \"phone\": 2225557777,\n        \"birthday\": 651481200000,\n        \"is_admin\": 0\n    }\n]",          "type": "Array"        }      ]    },    "version": "0.0.0",    "filename": "api/apidoc/userDoc.js",    "groupTitle": "Users",    "name": "GetApiUsers"  },  {    "type": "get",    "url": "/api/users/:id",    "title": "Get user by ID",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The user's id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Object containing the user's info</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "200 OK\n{\n    \"id\": 1,\n    \"firstname\": \"Admin\",\n    \"lastname\": \"One\",\n    \"email\": \"admin@test.com\",\n    \"password\": \"$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW\",\n    \"zipcode\": 95123,\n    \"phone\": 5552227777,\n    \"birthday\": 511171200000,\n    \"is_admin\": 1\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "404",            "optional": false,            "field": "UserNotFound",            "description": "<p>The id of the user was not found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/apidoc/userDoc.js",    "groupTitle": "Users",    "name": "GetApiUsersId"  },  {    "type": "patch",    "url": "/api/users/:id",    "title": "Update user",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The user's id</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Should return the updated user object</p>"          }        ]      },      "examples": [        {          "title": "Success Response:",          "content": "202 Accepted\n{\n    \"id\": 1,\n    \"firstname\": \"Admin1\",\n    \"lastname\": \"One\",\n    \"email\": \"admin@test.com\",\n    \"password\": \"$2a$11$geHxdA7OyRMRQ.NHhAEWXe0ydQkF4RTLuILVcZhKpgDL0U4WxMqZW\",\n    \"zipcode\": 95123,\n    \"phone\": 5552227777,\n    \"birthday\": 511171200000,\n    \"is_admin\": 1\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "404",            "optional": false,            "field": "UserNotFound",            "description": "<p>The id of the user was not found</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "api/apidoc/userDoc.js",    "groupTitle": "Users",    "name": "PatchApiUsersId"  }] });
