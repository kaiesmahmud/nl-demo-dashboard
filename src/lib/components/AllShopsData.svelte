<script>
    let data = [
        {
            name: "ISW Netherlands",
            visitors: [
                {title:"Direct", value:200 , show:"w-[45%] bg-violet-500" },
                {title:"Organic", value:566 , show:"w-[85%] bg-violet-500" },
                {title:"Organic Search", value:450 , show:"w-[75%] bg-violet-500 " },
                {title:"Referral", value:10 , show:"w-[25%] bg-violet-500 " },
            ],
            salesRedirects: [
                {title:"Total Sales", value:'101.399,99' , img:"/green-circle-diagram.png"},
                {title:"Total Chats", value:5000 , img:"/orange-circle-diagram.png"},
                {title:"Total Redirects", value:5480 , img:"/blue-circle-diagram.png"},
            ]
        },
        {
            name: "ISW Belgium",
            visitors: [
                {title:"Direct", value:200 , show:"w-[45%] bg-[#F68F30]" },
                {title:"Organic", value:566 , show:"w-[85%] bg-[#F68F30]" },
                {title:"Organic Search", value:450 , show:"w-[75%] bg-[#F68F30] " },
                {title:"Referral", value:10 , show:"w-[25%] bg-[#F68F30] " },
            ],
            salesRedirects: [
                {title:"Total Sales", value:'206.270,99' , img:"/green-circle-diagram.png"},
                {title:"Total Chats", value:5000 , img:"/orange-circle-diagram.png"},
                {title:"Total Redirects", value:5480 , img:"/blue-circle-diagram.png"},
            ]
        },
        {
            name: "ISW Germany",
            visitors: [
                {title:"Direct", value:200 , show:"w-[45%] bg-[#04975A]" },
                {title:"Organic", value:566 , show:"w-[85%] bg-[#04975A]" },
                {title:"Organic Search", value:450 , show:"w-[75%] bg-[#04975A] " },
                {title:"Referral", value:10 , show:"w-[25%] bg-[#04975A] " },
            ],
            salesRedirects: [
                {title:"Total Sales", value:'308.980,99' , img:"/green-circle-diagram.png"},
                {title:"Total Chats", value:5000 , img:"/orange-circle-diagram.png"},
                {title:"Total Redirects", value:5480 , img:"/blue-circle-diagram.png"},
            ]
        },
    ]
</script>
{#each data as {name,visitors,salesRedirects}}
        <!-- content here -->
        <div class="bg-white/20 rounded p-3 text-xs md:text-sm ">
        <p class="font-bold text-base text-white">{name}</p>
        <div class="flex flex-col lg:flex-row gap-3">
            <div class="w-full lg:w-1/2 p-1">
                {#each visitors as {title,value,show}}
                <div>
                    <div class="w-full flex items-center justify-between mb-1">
                        <p>{title}</p>
                        <p class="font-extrabold text-xs">{value}</p>
                    </div>
                    <div class="h-1 w-full bg-white/10 rounded overflow-hidden">
                        <div class={`${show}  h-1 rounded overflow-hidden animate___progress`} />
                    </div>
                </div>
                {/each}
            </div>
            <div class="w-full lg:w-1/2 p-1 flex flex-col md:flex-row items-center justify-between gap-3 md:px-5">
                {#each salesRedirects as {title,value,img}}
                <div class=" flex flex-col items-center justify-between gap-1">
                    <p class="font-bold text-base text-white">{title}</p>
                    <div class="faded">
                        <img src={img} alt={title}>
                    </div>
                    <p class="font-extrabold">
                        {#if title === "Total Sales"}
                                $
                        {/if}
                        {value}
                    </p>
                    
                </div>
                {/each}
            </div>
        </div>
        </div>
{/each}
