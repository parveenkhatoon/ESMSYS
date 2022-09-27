
const knex = require('../connectors/db.connection');

module.exports = (Router) => {
    // get tblEMP list
    Router.get('/getemp',(req,res)=>{
        knex.select('*').from("tblEMP")
        .then((data) => {
            res.send(data)
        }).catch((err) => { res.send( err); throw err })
        .finally(() => {
            knex.destroy();
    });
    })


// adding data in EMP 
Router.post("/add/empdetails", (req, res) => {
    var add_data = {
    "FirstName": req.body.FirstName,
    "LastName": req.body.LastName,
    "Email": req.body.Email,
    "MobileNo": req.body.MobileNo,
    "Hobbies": req.body.Hobbies,
    "Gender": req.body.Gender,
    "RegistrationDate": new Date(),
    "CountryID": req.body.CountryID,
    "StateID": req.body.StateID,
    "CityID": req.body.CityID
    }
    { email = req.body.Email }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!filter.email &&  req.body.MobileNo.length == 10  ){
        knex("tblEMP").insert(add_data)
        .then((data) => {
            res.send(data);
            })
        .catch((err) => {
                res.send(err)
        })
    }
    else{
        res.send("Please Enter Valid Email or Mobile NO")
    }
})


   ////Update the EMP by item
   Router.put('/emp/update/:ID',(req,res)=>{
    knex.select('*').from('tblEMP')
    .where('ID',req.params.ID)
    .update(req.body)
    .then((data)=>{
        res.send("data is updated successfully")
    })
    .catch((err)=>{
        res.send(err)
    })
})


// Empth  EMP table
Router.delete('/tblemt/empty/:ID',(req,res)=>{
    knex.select('*').from('tblEMP')
    .where('ID',req.params.ID)
    .delete(req.params.ID)
    .then((data)=>{
        res.send("data is deleted successfully")
    })
    .catch((err)=>{
        res.send(err)
    })
})


} 
