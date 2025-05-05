const app = require('express').Router();

const cors = require('cors');

app.use(cors)


const items = [
  { id: 1, name: 'iPhone 15 Pro Max', price: 1199.99, stock: 3, },
  { id: 2, name: 'Biski', price: 5.99, stock: 10, },
  { id: 3, name: 'Knark', price: 7.99, stock: 3, },
];

app.get('/items', async (req, res) => {
  try {
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items' });
  }
});

app.get('/items/:id', async  (req, res) => {
  try {
    const id = req.params.id;
    const item =  items.find((item) => item.id === parseInt(id));
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item' });
  }
});

app.post('/items/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price, stock } = req.query;
    const newItem = { id: id, name, price, stock };
    items.push(newItem);
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Error creating item' });
  }
});

app.put('/items/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const item = items.find((item) => item.id === parseInt(id));
    if (item) {
      const { name, price, stock } = req.body;
      item.name = name;
      item.price = price;
      item.stock = stock;
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating item' });
  }
});

app.delete('/items/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const index = items.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
      items.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item' });
  }
});

module.exports = app;