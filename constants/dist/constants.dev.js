"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var screens = {
  main_layout: "MainLayout",
  home: "Home",
  search: "Search",
  cart: "Cart",
  favourite: "Favourite",
  notification: "Notification",
  my_wallet: "MyWallet"
};
var bottom_tabs = [{
  id: 0,
  label: screens.home
}, {
  id: 1,
  label: screens.search
}, {
  id: 2,
  label: screens.cart
}, {
  id: 3,
  label: screens.favourite
}, {
  id: 4,
  label: screens.notification
}];
var delivery_time = [{
  id: 1,
  label: "10 Mins"
}, {
  id: 2,
  label: "20 Mins"
}, {
  id: 3,
  label: "30 Mins"
}];
var ratings = [{
  id: 1,
  label: 1
}, {
  id: 2,
  label: 2
}, {
  id: 3,
  label: 3
}, {
  id: 4,
  label: 4
}, {
  id: 5,
  label: 5
}];
var tags = [{
  id: 1,
  label: "Burger"
}, {
  id: 2,
  label: "Fast Food"
}, {
  id: 3,
  label: "Pizza"
}, {
  id: 4,
  label: "Asian"
}, {
  id: 5,
  label: "Dessert"
}, {
  id: 6,
  label: "Breakfast"
}, {
  id: 7,
  label: "Vegetable"
}, {
  id: 8,
  label: "Taccos"
}];
var _default = {
  screens: screens,
  bottom_tabs: bottom_tabs,
  delivery_time: delivery_time,
  ratings: ratings,
  tags: tags
};
exports["default"] = _default;