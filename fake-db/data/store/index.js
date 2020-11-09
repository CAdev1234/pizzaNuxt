import mock from "@/fake-db/mock.js"
import jwt from 'jsonwebtoken'

const data = [
  {
    "shash": "b498547ae9457c90d541",
    "permalink": "/production-way",
    "name": "Production Way",
    "address": "160-3292 Production Way Burnaby, BC V5A4R4 ",
    "phone": "(604) 444-4410",
    "picture": "r212321321321.jpg",
    "d_status": "0",
    "c_status": "0",
    "pl_cc": "1",
    "pl_ca": "1",
    "pn_cc": "1",
    "lat": "49.25425100",
    "lng": "-122.91859400"
  },
  {
    "shash": "a4598b980e9578d8a759",
    "permalink": "/davie",
    "name": "Davie",
    "address": "1112 Davie Street Vancouver, BC V6E1N1",
    "phone": "(604) 620-2400",
    "picture": "r212321321323.jpg",
    "d_status": "0",
    "c_status": "0",
    "pl_cc": "1",
    "pl_ca": "1",
    "pn_cc": "1",
    "lat": "49.28070000",
    "lng": "-123.13173800"
  },
  {
    "shash": "b459824334da343298b8",
    "permalink": "/granville",
    "name": "Granville & Nelson",
    "address": "1005 Granville St. Vancouver, BC V6Z1L4",
    "phone": "(604) 687-0002",
    "picture": "r212321321324.jpg",
    "d_status": "0",
    "c_status": "0",
    "pl_cc": "1",
    "pl_ca": "1",
    "pn_cc": "1",
    "lat": "49.27944100",
    "lng": "-123.12332700"
  },
  {
    "shash": "d954781ac854098a0e45",
    "permalink": "/port-coquitlam",
    "name": "Port Coquitlam",
    "address": "102-2540 Mary Hill Rd. Port Coquitlam, BC V3C3B2",
    "phone": "(604) 468-2500",
    "picture": "r212321321324.jpg",
    "d_status": "0",
    "c_status": "0",
    "pl_cc": "1",
    "pl_ca": "1",
    "pn_cc": "1",
    "lat": "49.26135700",
    "lng": "-122.77799100"
  },
  {
    "shash": "a96837be4598123c38a6",
    "permalink": "/commercial",
    "name": "Commercial & Broadway",
    "address": "2440 Commercial Drv. Vancouver, BC V5N4B9",
    "phone": "(604) 874-8758",
    "picture": "r212321321324.jpg",
    "d_status": "0",
    "c_status": "0",
    "pl_cc": "1",
    "pl_ca": "1",
    "pn_cc": "1",
    "lat": "49.26307400",
    "lng": "-123.06947100"
  }
]
const jwtConfig = {
    "secret"   : "dd5f3089-40c3-403d-af14-d0c228b05cb4",
    "expireTime": 8000
}

mock.onGet("/api/stores").reply(() => {
  return [200, data];
});
