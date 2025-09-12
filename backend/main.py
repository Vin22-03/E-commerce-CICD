import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from prometheus_fastapi_instrumentator import Instrumentator

app = FastAPI()
Instrumentator().instrument(app).expose(app)

# ✅ CORS for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Can be changed to specific domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Product list synced with ProductList.js
products = [
    {
        "id": 1,
        "name": "MacBook Pro",
        "price": 199900,
        "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1697311085375"
    },
    {
        "id": 2,
        "name": "iPhone 16 Pro",
        "price": 139900,
        "image": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-pro-finish-select-202409-6-9inch-blacktitanium?wid=452&hei=420&fmt=jpeg&qlt=95"
    },
    {
        "id": 3,
        "name": "AirPods Max",
        "price": 59900,
        "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1604022365000"
    }
]

# ✅ GET /products endpoint
@app.get("/products")
def get_products():
    return {"products": products}

# ✅ Dummy POST order (future extensible)
@app.post("/order")
def place_order(order: dict):
    return {
        "message": "Order received!",
        "product_id": order.get("product_id"),
        "quantity": order.get("quantity"),
        "status": "confirmed"
    }

# ✅ Order status for OrderStatus.js
@app.get("/status")
def get_status():
    return {"order_status": "Delivered"}  # Static value for UI

# ✅ App version endpoint
@app.get("/version")
def get_version():
    version = os.getenv("APP_VERSION", "unknown")
    return {"version": version}

# ✅ Health check for DevOps monitoring
@app.get("/health")
def health():
    return {"status": "OK"}
