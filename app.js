var express = require("express");
var bodyParser = require("body-parser");
var app = express();




var campgrounds = [
        {name: "El Cap", image:"https://cdn.vox-cdn.com/thumbor/dG1MZjhVdGUXGSTpWub1cKMOEbM=/0x0:5225x3479/1820x1213/filters:focal(2195x1322:3031x2158):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
        {name: "Al Hill", image:"https://www.robinpopesafaris.net/cms/images/1242/resized/max1100x600.jpg"},
        {name: "Mountain Gold", image:"https://s3.amazonaws.com/imagescloud/images/medias/camping/camping-tente.jpg"},
         {name: "El Cap", image:"https://cdn.vox-cdn.com/thumbor/dG1MZjhVdGUXGSTpWub1cKMOEbM=/0x0:5225x3479/1820x1213/filters:focal(2195x1322:3031x2158):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
        {name: "Al Hill", image:"https://www.robinpopesafaris.net/cms/images/1242/resized/max1100x600.jpg"},
        {name: "Mountain Gold", image:"https://s3.amazonaws.com/imagescloud/images/medias/camping/camping-tente.jpg"},
         {name: "El Cap", image:"https://cdn.vox-cdn.com/thumbor/dG1MZjhVdGUXGSTpWub1cKMOEbM=/0x0:5225x3479/1820x1213/filters:focal(2195x1322:3031x2158):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
        {name: "Al Hill", image:"https://www.robinpopesafaris.net/cms/images/1242/resized/max1100x600.jpg"},
        {name: "Mountain Gold", image:"https://s3.amazonaws.com/imagescloud/images/medias/camping/camping-tente.jpg"},
         {name: "El Cap", image:"https://cdn.vox-cdn.com/thumbor/dG1MZjhVdGUXGSTpWub1cKMOEbM=/0x0:5225x3479/1820x1213/filters:focal(2195x1322:3031x2158):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/54137643/camping_tents.0.jpg"},
        {name: "Al Hill", image:"https://www.robinpopesafaris.net/cms/images/1242/resized/max1100x600.jpg"},
        {name: "Mountain Gold", image:"https://s3.amazonaws.com/imagescloud/images/medias/camping/camping-tente.jpg"}
    ]

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds/new", function(req,res){
   res.render("new.ejs") 
});

app.get("/campgrounds", function(req, res){
  
    
    res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function(req,res){
    var name= req.body.name;
    var image = req.body.image;
    var newcampground = { name: name, image: image} 
    campgrounds.push(newcampground);
    res.redirect("/campgrounds");
    
});

app.listen (3000, function(){
    
    console.log("app started")
});