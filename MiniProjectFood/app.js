
// ab itna sb kese bnaya 
// ek folder bnaya hai empty uske andr npm ko initialise kia means node packagees ko or apne aap dependencies ya jisem hm node modules bolte hai download ho gye using npm init -y
// express download kia
// ejs download kia
// mongoose download kia
// method-override download kia
// baaki pdhlo bss


// Dekho ye Project bnaenge hm pura MERN se abhi hm react ka use nahi krenge kyuki starting ke liye complex hojaega mne hrr line mein bta rkha hai kiss line ka kya mtlb hai bs pdhte chlo smjha aa jaega

// Express ko hm install krte hai http request and responses ke liye 
// install  krne ke liye= npm i express bs itna likhna hai or use require krna hai require krna maane hm uske features use krna chahte hai kyuki ye ek framework hai
const express = require("express");
// app ke andr hmne iske features liye
const app = express();

// AB website bna rhe hai toh database chahiye hi uske liye hm MongoDB ka use krenge jo ki non relational hai and comparable aasan hai tmare SQL se jo ki hm sbko easy lgti hai but vo language hai model nahi 
const mongoose = require("mongoose");

// FoodListing hmara ek schema hai 
// Schema kya hota hai jo hrr model ka structure btaye ki iske andr kya kya hai or kese kese hai 
const FoodListing = require("./models/listing");
// path set krne ke liye
const path = require("path");

// Ab routing krni hai mtlb ki navigation toh navigation ke liye hm isme links ka use na krke REST model ko use krenge jo ki bht easy to use hai isme kch nhai hota jese request aati hai user ke paas toh vo kya hui GET request request jana Post request edit krna Edit request iss trah se hoti hai ye but isme na ek problem hai isme sirf get or post hi normally chl skti hai baaki put delete inn sb ke liye hmko alag se method install krna pdta hai method-override isse kya hota hai ye tm form wale page me jb pahuch jao tb dekhna 
const methodOverride=require("method-override");

// Ab ejs kya hota hai jese hm html pdhte hai usi tarah se ejs ek template hai html page ki tarah but html hm dynamic data show nahi kr skte ab dynamic data kya hota hai dynamic data mtlb ek aise data jo ya toh backend se aa rha ho ya user se aa rha ho or webpage pr show ho rha ho jese jese change krte jae hme vo change hota hua dikha de toh uske liye hme view engine set krna hota hai that is EJS fullform yaad nahi search krlena 
// isko bhi install krna pdta hai npm i ejs bss
app.set('view engine', 'ejs');

// Ab aata hai hmara views folder ab hrr page ki styling ek file mein toh krna possible nahi hai toh hm ek public folder bnate hainviews naam se jisme saare folder ki files publically access hoti hai hrr js file ko jisse vo CSS ya js mein changes kr ske toh usi ka path set krne ke liye ye use krte hai ok
app.set('views', path.join(__dirname, 'views'));
// ye btaya hi abhi mne upr kya hota hai 
app.use(methodOverride("_method"));
// ye json data ko parse krta hai jisse hm data fetch kr ske iske baare mein aage baat krte hai 
app.use(express.urlencoded({extended:true}));


// Ab hmara database mongoDB ke andr stored hai toh uska direct link ye hi hota hai bydefault chaho toh yaad krlo 27017 uske bad hm apne database ka naam dete hai jese hmne dia hai Zaika_Zunction
const MONGO_URL = "mongodb://127.0.0.1:27017/Zaika_Zunction";


// Ye mongoose database se connect krta hai using main or ye ek asynchronous function hai hope pta hoga
async function main() {
    await mongoose.connect(MONGO_URL);
}
// ye main ko call kia hai
main();


// Ab hm yahan se start krenge apni routing


// Ye hai home route 
// abhi upr hmne express require kia tha na usi ka use yahan pe hai
// get maane agr user request bhejta hai local host pr toh vo iss path pr jaegi jese isme kahan jaa rhi ("/") yaha pr ok
//  ab iske andr do chezen aati hai req-> request and res-> response
// mtlb user ne kya request bheji hai and user ko kya response hmara backend dega jese agr hm iss route pr abhi request bhejenge toh res mein Hi i am root aayega 
app.get("/", (req, res) => {
    res.send("Hi I am Root");
});

// ye testing ke liye hai chaho toh skip krdo
app.get("/testListing", async (req, res) => {
    try {
        let sampleFood = new FoodListing({
            name: "Margherita Pizza",
            price: 100,
            ingredients: "Onion,Tomato,Special",
            images: "https://images.unsplash.com/photo-1600850056064-a8b380df8395?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVnZXRhYmxlJTIwJTIwcm9sbHxlbnwwfHwwfHx8MA%3D%3D",
            location: "New Delhi",
            DeliveryCharge: 80,
        });
        await sampleFood.save();
        console.log("Food Saved");
        res.send("Testing Successfully");
    } catch (err) {
        console.log("Error saving food:", err);
        res.status(500).send("Error saving food");
    }
});

// Index Route
// Ab aata hai hmara index Route mtlb ki hmara home page jispr sb kch reflect hoga
// toh isme request gyi hmari listings ko kyuki ye asynchronous function hai jese ki upr btaya toh error aane ke bhi chances hai isliye try and catch mein use kr rrhe 
app.get("/listings", async (req, res) => {
    try {
        // FoodListing hmara ek model hai jesa ki upr btaya or find() kya krta hai ye database ke andr jitne bhi items hai hmare unko fetch krta hai ab jaise isme kya hua hai hmne data fetch kia allFoodListing mein ab data toh aa gya or data hai bhi bht saara ab baari baari res.send krke toh data dikha nahi skte hm toh uske liye hm kya krte hai ek pura ka pura webpage pass kkrte hai jisme hmara data hota hai jaise mne paas kia hai isme index.ejs extesion lgana jruri nahi hai dekh lena tmara vsCode support kre toh theek vrna lga lena toh hmne isme ek index .ejs page pass kia jo kahan pr hai hmara views ke andr jaake dekho abhi
        // -----------------------------------------
        // render hmara webpage ko send krta hai isliye likha hai pr ye {} ke andr kya hai ye vhi data haijo hmne fetch kia ab data dikhaoge toh dikhaoge kahan se data hona bhi toh chahiye hmare pas isliye ye as an attribute pass kia hai thik aa gya hog a smjh aage chlo
        const allFoodListing = await FoodListing.find(); // Await the promise
        res.render("listings/index", { allFoodListing }); // Correct path to EJS template
    } catch (err) {
        // vhi mtlb agr error aaa jaye toh kya hona hai bs vhi hai
        console.log("Error fetching food listings:", err);
        res.status(500).send("Error fetching food listings");
    }
});

// New Route
// ye new Route kya hai hmare webpage ke andr agr kisi user ko or data add krna hai usse backedn mein toh add krwa nahi skte isliye hm ye use krte hai jisse user new data bna ske arey jese insta ke post yrr bs vhi hai
// request kahan jaa rhi hai new pr new kya hai ek route hai or response kya aa rha hai new ka response or ye new ek webpage hai confuse mt ho jana chahe toh dobara pdho line
// render kuu likha aa gya hoga smjh ab jao new.ejs pr views ke andr hoga 
app.get("/listings/new",(req,res)=>{
    res.render("listings/new");
})

// create Route
// new se toh nya bn gya pr ye create kyu bnaya fir 
// jb bhi hm user se koi kaam krwate hai toh do baar mein krwate hai ab aise kyu mujhe bhi nhi pta 

//  dekho hmne new route se user ke paas na ek form bheja hai jisme usne use fill toh kia hi hoga ab form toh fill krdia uss form ka data backend mein vapas kese aaye or hmare database mein add kese ho isliye hm ek post route use krte hai mtlb ki data saved isi route mein hota hai 
// isme hmarae paas ek hota hai req.body jisme na jane kitni hi information hoti hai usme se hi ek information hmare model ki bhi hoti hai ab hmare model ka naam hai FoodListing but isme small f se likha hua mtlb ye dono alag alag cheezein hai 

app.post("/listings",async(req,res)=>{ //yahan se toh aa gya hoga kya kra hai request aayi hai hmare paas post krne ki

    let newFoodListing=FoodListing(req.body.foodListing);   //isme kya hua hai ki hmne ek naya item bnaya hai nya item vo kese bnega jb FoodListing ke andr saara data bheja jae or user se vhi data toh hmne lia hai or usko ek temporary var mein store kra lia ab data aise daalne se save nahi hota uske liyesave krna pdta hai 
    await newFoodListing.save(); //toh uske liye ye rha aise hota hai save await kyu ? backend mein agr koi bhi kaam ho rha hai toh mostly cheezon mein async await aata hi hai
    console.log("New Saved"); // ye kch ni bs ek confirmation message
    res.redirect("/listings");// redirect ab ye kya hota hai jese hi hm refresh krte hai kisi page pr ya kch order krte hai toh hmara webpage ek page se dusre page pr kese smoothly jump krta hai bs vhi hai ye cheez hm kisi bhi page pr direct jaa skte hai agr uska path pta ho toh ab isme kya hai user nya data add krke vapas kahan aa jayega hmare home page pr 
})

// Show Route
// iske bad ke route aasan hai jldi ho jayenge 
//  show route maane kisi bhi food item ko ya data item ko details mein dekhna ki uske andr actually kya hai toh uske liye hm use krte hai ye show route 
// isme kya hua request gyi hai hmari ek particular data item pr ab vhi data item open ho ye kese confirm krenge hm uske liye hm use krte hai :id means id ayegi pr vo jispr user click krega arry kul milkr id hmari variable type hai ek bs
app.get("/listings/:id",async(req,res)=>{ //request jaegi listings ke andr jo data items hai unme se kisi ek pr hi toh click kroge na
    let{id}=req.params;// req jaegi toh ek parameter naam ka method hota hai isme kya hai user ka data store rhta hai ki user ne kya request kia
    // yaad rkhna agr hme user ki activity track krni hai toh kya use krte hai params and jo bhi backend pr aata hai use krte hai req.body se track baaki btata rhunga aage
    const currentFoodListing=await FoodListing.findById(id); // ab upr hmne kya kia user ne jis bhi data item ko click kia hmne uski id nikal li or mongoDB hmara databse hai umse search krne ke liye hm findById use krte hai or vo data normally currentFoodListing ke andr aaya ab isko dekkne ko toh normally bhi dekh skte pr hm bna rhe website toh webpage bnana hipdega uske liye fir se nya page show.ejs ye kahan hoga views ke andr hi h na or attribute kyu pass kia kyuki data dikhaoge toh data tmare webpage ke paas hona bhi toh chahiye isliye attribute pass kr rhe jiske andr vo dtaa hai jo user dekhna chahta hai 
    res.render("listings/show",{currentFoodListing});
})
// Edit get
// Yrr ye na ek dm same hai create wale ki trah short m bta rha
// edit krna hai ye bhi do baar mein hoga phle pucho usse kya edit krna hai by rendering form ab edit website ko toh krga nhi apne data ko hi krega edit toh uski bhi id hogi vo id se data lega form bhejega vahan se jo data aaega usko put krdega yaad rkhna agr ek dm new bna rhe tb post hota hai edit kr rhe toh put use hoga okay
app.get("/listings/:id/edit",async(req,res)=>{
    let {id}=req.params;
    const foodListing=await FoodListing.findById(id);
    res.render("listings/edit",{foodListing});
})
// Edit Update
// yahan se user ka data aaya usko database mein daal rhe
app.put("/listings/:id",async(req,res)=>{
    let{id}=req.params;
    await FoodListing.findByIdAndUpdate(id,{...req.body.foodListing}); // ... mtlb jo purana tha usko toh vese ka vese hi rkho or foodLisTing mein agr koi nya data aaya hai toh usko put krdo ...ye hota hai hmara spread operator js ka concept
    res.redirect(`/listings/${id}`); // redirect mtlb vhi ab redirect jese mne btaya khi bhi ho skte hai toh uske liye backtick use krte hai hm again js krlena yr
})

// ab agr kisi ko apna data htana hi ho toh vo kese kreneg with the help of Delete Route
app.delete("/listings/:id",async(req,res)=>{// yahan se delete pr request jaegi
    let{id}=req.params;// kya delete krna hai uski id lega
    const deletedFood=await FoodListing.findByIdAndDelete(id);// uss id ko search krega database mein agr hoga toh delete krdega
    console.log(deletedFood);// again for confirmation
    res.redirect("/listings");// already pta hai hmko
})

// AB upr ki jitni bhi kahani thi sbka conclusion yahan aake khtm hota hai
// ye hai hmara app.listen mtlb jo tmara server hai vo sunta hai hrr second tmari baat jo tm usse bolte ho 3000 kya hai ek point hai jahan pr aake sirf tmara server chlega baaki toh console.ka kaam hai
// ye hmari hrr req res jo jati hai server pr hi jati hai server hi hai hmara main hero jo ye sb kaam krke de pata hai server nahi toh upr ka sb bekaar abhi ye localHost mein hai server mtlb mere device mein development ke time pr toh server tmara bht baar rukega bht baar chlega
//pr normally server kbhi bnd nahi hota or bnd kb nhi hota jb error nahi aate or error kb nahi aate jb website ek fully functional product bnkr delpoy hone ke liye taiyaar ho 
app.listen(3000,() => {
    console.log("Server is running on port 3000");
});

