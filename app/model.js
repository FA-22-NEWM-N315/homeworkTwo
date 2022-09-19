//This is the model and it handles on the service calls 

var homeContent = `<div class="home">
<div class="banner"></div>

<div class="header">
<h1>Nova Photography</h1>
</div>


<div class="wrapper">
<div class="box1"></div>
<div class="box2"></div>
<div class="box3"></div>
</div>

<div class="htxt">
<h2>About Us</h2>
<hr>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci animi id aspernatur hic blanditiis, nihil quo doloribus odio vel soluta dolor quis, quia eveniet unde. Quos error ipsum repellat corrupti tempore fugiat ipsam rerum in, esse laudantium sint delectus, reiciendis optio provident harum praesentium dignissimos soluta ducimus doloribus accusamus. Et.</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ab dignissimos, voluptates placeat quae delectus alias tempore eius! Distinctio officia illo repellendus, temporibus aliquam dolorum placeat, eos tempora culpa eum quis laborum modi nihil inventore. Amet, dignissimos natus possimus aliquid tenetur, dolore ad deleniti doloribus blanditiis nostrum eligendi. Fugiat deserunt doloribus distinctio officia illo consequuntur. Vel eos debitis corrupti nam reiciendis possimus enim quibusdam recusandae delectus fuga. Debitis odit quisquam delectus ex? Excepturi cum suscipit possimus perferendis autem eius, ipsam inventore esse earum mollitia omnis? Aperiam at consequuntur ea temporibus ducimus deleniti, placeat, eum dignissimos autem ipsa quo, beatae similique!</p>
</div>
</div>`;

var meetusContent = `<div class="meetus">
<div class="banner2"></div>

<div class="meet">
<h1>From behind the lense</h1>
</div>

<div class="meet_wrapper">
<div class="creator1">
    <div class="pic1"></div>
    <div class="txt1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iste ratione debitis id architecto odit, at et ea, nam, quam dolores veniam facilis. Libero soluta cum officia dicta debitis quisquam ipsum quia corrupti adipisci vitae dolores deserunt quam ipsam, ad deleniti dolorum, pariatur sed quas nobis praesentium alias asperiores vel?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quis.sed quas nobis praesentium alias asperiores vel?</p>
        <h4>-Blair Smith</h4>
    </div>
</div>
<div class="creator2">
    <div class="pic2"></div>
    <div class="txt2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iste ratione debitis id architecto odit, at et ea, nam, quam dolores veniam facilis. Libero soluta cum officia dicta debitis quisquam ipsum quia corrupti adipisci vitae dolores deserunt quam ipsam, ad deleniti dolorum, pariatur sed quas nobis praesentium alias asperiores vel?</p>
        <h4>-Zoe Reed</h4>
    </div>
</div>
</div>
</div>`;

var galleryContent = ` <div class="gallery">
<div class="banner3"></div>

<div class="gal">
<h1>Gallery</h1>
</div>



<div class="wrapper1">
<div class="b1"></div>
<div class="b2"></div>
<div class="b3"></div>
</div>

<div class="wrapper2">
<div class="b4"></div>
<div class="b5"></div>
<div class="b6"></div>
</div>

</div>`;

var contactContent = ` <div class="contact">
<div class="banner4"></div>

<div class="con">
<h1>Contact</h1>
</div>

<div class="wrapper4">
<div class="map"></div>
<div class="inputs">
   <div class="top-boxes">
       <input class="fName" type="text" name="" id="" placeholder="First Name...">
       <input class="lName" type="text" name="" id="" placeholder="Last Name...">
   </div>
   <input class="email" type="text" name="" id="" placeholder="Email...">
   <input class="message" type="text" name="" id="" placeholder="Message...">

   <button class="btn">
       <p>Submit!</p>
   </button>
</div>

</div>

</div>`;

export function setCurrentPageContent(pageID) {
    let contentName = pageID + "Content";
    $("#app").html(eval(contentName));
}


// creating a listener for the navigation links 