// -------------------- Site Header start -------------------- 

let elHeader = document.createElement("header")
document.body.appendChild(elHeader)
elHeader.className =  "py-[18px] bg-white"

elHeader.innerHTML = `
    <div class="containers flex itmes-center justify-between">
        <a class="flex items-center" href="#">
            <img src="./images/logo.svg" alt="Logo" width="139" height="20" >
        </a>
        <nav class="flex items-center gap-[30px]">
            <a class="text-[14px] text-[#9597A5] href="#" >Home</a>
            <a class="text-[14px] text-[#9597A5] href="#" >About</a>
            <a class="text-[14px] text-[#9597A5] href="#" >Contacts</a>
            <a class="text-[14px] text-[#9597A5] href="#" >Blog</a>
            <a class="text-[14px] text-[#9597A5] href="#" >Careers</a>
        </nav>
        <button class="py-[8px] px-[35px] leading-[28px] text-white text-[14px] btn-bg rounded-[50px]" >Request Invite</button>
    </div>
`


let elMain = document.createElement("main")
document.body.appendChild(elMain)
let elHeroSection = document.createElement("section")
elMain.appendChild(elHeroSection)

elMain.innerHTML = `
    <div class="containers">
        <section>
            <div class="w-[447px]">
                <h1 class="text-[100] text-[#2D314D] text-[56px] font-Public" >Next generation digital banking</h1>
                <p class="text-[400] text=[#9597A5] text-[18px] pt-[24px] pb-[36px] font-Public" >Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button class="py-[8px] px-[35px] leading-[28px] text-white text-[14px] btn-bg rounded-[50px]" >Request Invite</button>
            </div>
        </section>
    </div>
`


let elCategoriesSection = document.createElement("section")
elMain.appendChild(elCategoriesSection)

elCategoriesSection.innerHTML = `
    <section class="bg-[#F4F5F7] pb-[94px]">
        <div class="containers">
            <div>
                <h1 class="text-[100] text-[40px] text-[#2D314D] pt-[96px]">Why choose Easybank?</h1>
                <p class="text-[400] text-[18px] text-[#9597A5] w-[675px]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>

            <div class="flex justify-between">
                <div class="pt-[72px]">
                    <img src="./images/online-banking.svg">
                    <h2 class="text-[#2D314D] text-[100] text-[24px]  pt-[40px] pb-[26px]">Online Banking</h2>
                    <p class="w-[255px] text-[#9597A5] text-[400] text-[16px]">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>

                <div class="pt-[72px]">
                    <img src="./images/simple-budgeting.svg">
                    <h2 class="text-[#2D314D] text-[100] text-[24px]  pt-[40px] pb-[26px]">Online Banking</h2>
                    <p class="w-[255px] text-[#9597A5] text-[400] text-[16px]">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>

                <div class="pt-[72px]">
                    <img src="./images/open-API.svg">
                    <h2 class="text-[#2D314D] text-[100] text-[24px]  pt-[40px] pb-[26px]">Online Banking</h2>
                    <p class="w-[255px] text-[#9597A5] text-[400] text-[16px]">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>

                <div class="pt-[72px]">
                    <img src="./images/fast-onboarding.svg">
                    <h2 class="text-[#2D314D] text-[100] text-[24px]  pt-[40px] pb-[26px]">Online Banking</h2>
                    <p class="w-[255px] text-[#9597A5] text-[400] text-[16px]">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
            </div>
        </div>

    </section>
`


let elArticlesSection = document.createElement("section")
elMain.appendChild(elArticlesSection)

elArticlesSection.innerHTML =`
    <section class="containers">
        <h1>Latest Articles</h1>
        <div class="flex>
            <div>
                <img src="./images/article-img1.png">
                <h2>By Claire Robinson</h2>
                <span>Receive money in any currency with no fees</span>
                <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
            </div>

            <div>
                <img src="./images/article-img2.png">
                <h3>By Wilson Hutton</h3>
                <span>Treat yourself without worrying about money</span>
                <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
            </div>

            <div>
                <img serc="./images/article-img3.png">
                <h4>By Wilson Hutton</h4>
                <span>Take your Easybank card wherever you go</span>
                <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
            </div>

            <div>
                <imgsrc="./images/article-img4.png">
                <h5>By Claire Robinson</h5>
                <span>Our invite-only Beta accounts are now live!</span>
                <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
            </div>
        </div>
    </section>
`

