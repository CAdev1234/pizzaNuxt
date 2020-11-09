import mock from "@/fake-db/mock.js"
import jwt from 'jsonwebtoken'

const data = [
  {
    type: "header-menu",
    items: [
      {
        id: "uippii9998777",
        link: "/login",
        text: "SIGNIN",
        active: true,
        order:1
      },
      {
        id: "uippii9998777",
        link: "/franchising",
        text: "FRANCHISING",
        active: true,
        order:2,
      },
      {
        id: "uippii9998777",
        link: "/catering",
        text: "CATERING",
        active: true,
        order: 3
      },
      {
        id: "uippii9998777",
        link: "/about-us",
        text: "ABOUT US",
        active: true,
        order:4,
      },
      {
        id: "uippii9998777",
        link: "/rewards",
        text: "REWARDS",
        active: true,
        order:5
      },
      {
        id: "uippii9998777",
        link: "/menu",
        text: "MENU",
        active: true,
        order:6
      },
      {
        id: "uippii9998777",
        link: "/locations",
        text: "LOCATIONS",
        active: true,
        order:7
      }
    ]
  }
]

const jwtConfig = {
    "secret"   : "dd5f3089-40c3-403d-af14-d0c228b05cb4",
    "expireTime": 8000
}

mock.onGet("/api/catalog/header").reply(() => {
  return [200, data];
});
