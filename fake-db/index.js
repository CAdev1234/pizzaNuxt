import mock from './mock'
import "./data/catalog/index.js"
import "./data/product/index.js"
import "./data/store/index.js"

mock.onAny().passThrough(); // forwards the matched request over network
