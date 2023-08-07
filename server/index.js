const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const Stripe = require('stripe')
app.use(cors());
app.use(express.json({ limit: "10mb" }));
 // Add parentheses to use express.json as middleware
const PORT = process.env.PORT || 8080;

console.log(process.env.MONGODB_URL);
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Error connecting to the database:", err));

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true, // Enforce unique constraint
  },
  password: String,
  confirmPassword: String,
  image:String
});

const userModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.post('/signup', (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  userModel
    .findOne({ email: email })
    .then((result) => {
      if (result) {
        res.send({ message: 'Email id is already registered', alert: false });
      } else {
        const data = new userModel(req.body);
        return data.save();
      }
    })
    .then(() => {
      res.send({ message: 'Successfully signed up', alert: true });
    })
    .catch((err) => {
      console.log(err);
      res.send({ message: 'Error occurred', alert: false });
    });
});

app.post('/login', (req, res) => {
  // Extract the email from the request body
  const { email } = req.body;

  // Find a user with the provided email in the userModel collection
  userModel.findOne({ email: email })
    .then((result) => {
      if (result) {
        // If a user is found, create a data object with selected fields
        const dataSend = {
          _id: result._id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          password:result.password,
          image:result.image
        };

        // Log the data and send a success response
        console.log(dataSend);
        res.send({
          message: 'Login is successful',
          alert: true,
          data: dataSend,
        });
      } else {
        // If no user is found, send a message indicating that the email is not available
        res.send({
          message: 'Email is not available, please sign up',
          alert: false,
        });
      }
    })
    .catch((err) => {
      // Handle errors and send an error response
      console.log(err);
      res.send({
        message: 'Error occurred during login',
        alert: false,
      });
    });
})
const schemaProduct = mongoose.Schema({
  name: String,
  category:String,
  image: String,
  price: String,
  
});
const productModel = mongoose.model("product",schemaProduct)



//save product in data 
//api
app.post("/uploadProduct",async(req,res)=>{
    // console.log(req.body)
    const data = await productModel(req.body)
    const datasave = await data.save()
    res.send({message : "Upload successfully"})
})

//
app.get("/products",async(req,res)=>{
  const data = await productModel.find({})
  res.send(JSON.stringify(data))
})
console.log(process.env.FRONTEND_URL)
const stripe  = new Stripe(process.env.STRIPE_SECRET_KEY)

app.post("/create-checkout-session",async(req,res)=>{

     try{
      const params = {
          submit_type : 'pay',
          mode : "payment",
          payment_method_types : ['card'],
          billing_address_collection : "auto",
          shipping_options : [{shipping_rate : "shr_1NboCMSDPHzTDYa5aALKuivL"}],

          line_items : req.body.map((item)=>{
            return{
              price_data : {
                currency : "inr",
                product_data : {
                  name : item.name,
                  // images : [item.image]
                },
                unit_amount : item.price * 100,
              },
              adjustable_quantity : {
                enabled : true,
                minimum : 1,
              },
              quantity : item.qty
            }
          }),
          
          success_url : `${process.env.FRONTEND_URL}/success`,
          cancel_url : `${process.env.FRONTEND_URL}/cancel`,

      }

      
      const session = await stripe.checkout.sessions.create(params)
      // console.log(session)
      res.status(200).json(session.id)
     }
     catch (err){
        res.status(err.statusCode || 500).json(err.message)
     }

})


app.listen(PORT, () => console.log("Server is running at port:" + PORT));
