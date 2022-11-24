//creamos un objeto controller
const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) {
      res.json(err);
    }
    conn.query("SELECT * FROM customers", (err, customers) => {
      if (err) {
        res.json(err);
      }
      res.render("customers", {
        data: customers,
      });
    });
  });
};
controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO customers set ?", [data], (err, customer) => {
      console.log(customer);
      res.redirect("/");
    });
  });
};
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM customers WHERE id=  ?",
      [id],
      (err, customer) => {
        res.render("customer_edit", {
          data: customer[0],
        });
      }
    );
  });
};
controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE customers set ? WHERE id = ?",
      [newCustomer, id],
      (err, rows) => {
        //pr cada signo ? es un parametro
        res.redirect("/");
      }
    );
  });
};
controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("DELETE FROM customers WHERE id=?", [id], (err, rows) => {
      res.redirect("/");
    });
  });
};
module.exports = controller;
