"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
const products = [{ id: 1, title: "tomato" }, { id: 2, title: "orange" }];
const adresses = [
    { id: 1, value: "gastello 9" },
    { id: 2, value: "kirova 12" },
];
app.get("/", (req, res) => {
    res.send("Hello World!!!!");
});
app.get("/products", (req, res) => {
    if (req.query.title) {
        let searchString = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(searchString) > -1));
    }
    else {
        res.send(products);
    }
});
app.get("/products/:id", (req, res) => {
    let product = products.find((p) => p.id === +req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.send(404);
    }
});
app.get("/adresses", (req, res) => {
    res.send(adresses);
});
app.get("/adresses/:id", (req, res) => {
    let adress = adresses.find((p) => p.id === +req.params.id);
    if (adress) {
        res.send(adress);
    }
    else {
        res.send(404);
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
