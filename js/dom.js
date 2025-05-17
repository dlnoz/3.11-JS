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
            <div class="w-[447px] pb-[170px]">
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
                    <h2 class="text-[#2D314D] text-[100] text-[24px]  pt-[40px] pb-[26px]">Simple Budgeting</h2>
                    <p class="w-[255px] text-[#9597A5] text-[400] text-[16px]">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                </div>

                <div class="pt-[72px]">
                    <img src="./images/open-API.svg">
                    <h2 class="text-[#2D314D] text-[100] text-[24px]  pt-[40px] pb-[26px]">Fast Onboarding</h2>
                    <p class="w-[260px] text-[#9597A5] text-[400] text-[16px]">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>

                <div class="pt-[72px]">
                    <img src="./images/fast-onboarding.svg">
                    <h2 class="text-[#2D314D] text-[100] text-[24px]  pt-[40px] pb-[26px]">Open API</h2>
                    <p class="w-[270px] text-[#9597A5] text-[400] text-[16px]">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>
        </div>

    </section>
`


let elArticlesSection = document.createElement("section")
elMain.appendChild(elArticlesSection)

elArticlesSection.innerHTML =`
    <section class="containers">
        <h1 class="pt-[80px]">Latest Articles</h1>
        <div class="flex pt-[40px] pb-[80px] justify-between">
            <div>
                <img src="./images/article-img1.png">
                <div class="w-[207px]">
                    <h2 class="text-[#9597A5] text-[400] text-[10px] pt-[25px] pb-[8px]">By Claire Robinson</h2>
                    <span class="text-[#2D314D] text-[100] text-[16px] pb-[8px]">Receive money in any currency with no fees</span>
                    <p class="text-[#9597A5] text-[400] text-[13px]">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                </div>
            </div>

            <div>
                <img src="./images/article-img2.png">
                <div class="w-[207px]">
                    <h3 class="text-[#9597A5] text-[400] text-[10px] pt-[25px] pb-[8px]">By Wilson Hutton</h3>
                    <span class="text-[#2D314D] text-[100] text-[16px] pb-[8px]">Treat yourself without worrying about money</span>
                    <p class="text-[#9597A5] text-[400] text-[13px]">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                </div>
            </div>

            <div>
                <img src="./images/article-img3.png">
                <div class="w-[207px]">
                    <h4 class="text-[#9597A5] text-[400] text-[10px] pt-[25px] pb-[8px]">By Wilson Hutton</h4>
                    <span class="text-[#2D314D] text-[100] text-[16px] pb-[8px]">Take your Easybank card wherever you go</span>
                    <p class="text-[#9597A5] text-[400] text-[13px]">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                </div>
            </div>

            <div>
                <img src="./images/article-img4.png">
                <div class="w-[207px]">
                    <h5 class="text-[#9597A5] text-[400] text-[10px] pt-[25px] pb-[8px]">By Claire Robinson</h5>
                    <span class="text-[#2D314D] text-[100] text-[16px] pb-[8px]">Our invite-only Beta accounts are now live!</span>
                    <p class="text-[#9597A5] text-[400] text-[13px]">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                </divw>
            </div>
        </div>
    </section>
`


let elFooterPart = document.createElement("footer")
document.body.appendChild(elFooterPart)

elFooterPart.innerHTML = `
    <footer>

    </footer>
`

