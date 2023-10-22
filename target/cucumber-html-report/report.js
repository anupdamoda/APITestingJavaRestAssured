$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GetProducts.feature");
formatter.feature({
  "line": 2,
  "name": "Get all products from the api",
  "description": "",
  "id": "get-all-products-from-the-api",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the get api for the products",
  "description": "",
  "id": "get-all-products-from-the-api;verify-the-get-api-for-the-products",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I hit the url of get products api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I pass the url of products in the request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I receive the response code as 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify the rate of the first product is correct",
  "description": "",
  "id": "get-all-products-from-the-api;verify-the-rate-of-the-first-product-is-correct",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I hit the url of get products api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I pass the url of products in the request",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify that the rate of the first product is \u003cFirstProductRate\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "get-all-products-from-the-api;verify-the-rate-of-the-first-product-is-correct;",
  "rows": [
    {
      "cells": [
        "FirstProductRate"
      ],
      "line": 15,
      "id": "get-all-products-from-the-api;verify-the-rate-of-the-first-product-is-correct;;1"
    },
    {
      "cells": [
        "3.9"
      ],
      "line": 16,
      "id": "get-all-products-from-the-api;verify-the-rate-of-the-first-product-is-correct;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Verify the rate of the first product is correct",
  "description": "",
  "id": "get-all-products-from-the-api;verify-the-rate-of-the-first-product-is-correct;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I hit the url of get products api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I pass the url of products in the request",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I verify that the rate of the first product is 3.9",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("InsertProduct.feature");
formatter.feature({
  "line": 1,
  "name": "insert products using POST API",
  "description": "",
  "id": "insert-products-using-post-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "validate post product api status code works correctly",
  "description": "",
  "id": "insert-products-using-post-api;validate-post-product-api-status-code-works-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I hit the url of post product api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I pass the url of products in the request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I pass the request body of product title \u003cProductTitle\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I receive the response code as 200",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "insert-products-using-post-api;validate-post-product-api-status-code-works-correctly;",
  "rows": [
    {
      "cells": [
        "ProductTitle"
      ],
      "line": 9,
      "id": "insert-products-using-post-api;validate-post-product-api-status-code-works-correctly;;1"
    },
    {
      "cells": [
        "Shoes"
      ],
      "line": 10,
      "id": "insert-products-using-post-api;validate-post-product-api-status-code-works-correctly;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "validate post product api status code works correctly",
  "description": "",
  "id": "insert-products-using-post-api;validate-post-product-api-status-code-works-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I hit the url of post product api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I pass the url of products in the request",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I pass the request body of product title Shoes",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I receive the response code as 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "validate post product api response body works correctly",
  "description": "",
  "id": "insert-products-using-post-api;validate-post-product-api-response-body-works-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I hit the url of post product api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I pass the url of products in the request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I pass the request body of product title \u003cProductTitle\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I receive the response body with id as \u003cid\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "insert-products-using-post-api;validate-post-product-api-response-body-works-correctly;",
  "rows": [
    {
      "cells": [
        "ProductTitle",
        "id"
      ],
      "line": 18,
      "id": "insert-products-using-post-api;validate-post-product-api-response-body-works-correctly;;1"
    },
    {
      "cells": [
        "Shoes",
        "21"
      ],
      "line": 19,
      "id": "insert-products-using-post-api;validate-post-product-api-response-body-works-correctly;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "validate post product api response body works correctly",
  "description": "",
  "id": "insert-products-using-post-api;validate-post-product-api-response-body-works-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I hit the url of post product api endpoint",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I pass the url of products in the request",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I pass the request body of product title Shoes",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I receive the response body with id as 21",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});