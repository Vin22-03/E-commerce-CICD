
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


products = [
    {"id": 1, "name": "Laptop", "price": 75000},
    {"id": 2, "name": "Phone", "price": 45000},
    {"id": 3, "name": "Headphones", "price": 3000}
]

@app.get("/products")
def get_products():
    return {"products": products}

class Order(BaseModel):
    product_id: int
    quantity: int

@app.post("/order")
def place_order(order: Order):
    return {
        "message": "Order received!",
        "product_id": order.product_id,
        "quantity": order.quantity,
        "status": "confirmed"
    }

@app.get("/status")
def status():
    return {"order_status": "delivered"}

@app.get("/version")
def version():
    return {"version": "v1.0-blue"}

@app.get("/health")
def health():
    return {"status": "OK"}
