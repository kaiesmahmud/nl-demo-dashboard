<script>
    let data = {
            title: "Total Order ",
            orders: [
                {title:"Total Order:", value:1502 , show:"w-[85%] bg-cyan-500 " },
                {title:"Pending Order", value:200 , show:"w-[25%] bg-cyan-500" },
                {title:"Completed Order", value:1300 , show:"w-[65%] bg-cyan-500 " },
            ],
            totalSales:"$660,252.00"
        }
    const {title,orders,totalSales} = data
</script>

<div class="bg-white/20 rounded p-3 text-xs md:text-sm select-none">
    <p class="text-lg md:text-xl lg:text-3xl font-bold text-white my-2">{title}</p>
    <div class="flex flex-col md:flex-row items-center gap-3 text-base">
        <div class="w-full md:w-3/4" >
            {#each orders as {title,value,show}}
            <div class="my-1">
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
        <div class="w-full md:w-1/4 flex items-center justify-center flex-col gap-5 p-5">
            <p class="text-lg md:text-xl lg:text-3xl font-bold text-white my-2">Total Sales</p>
            <p class="text-lg md:text-xl lg:text-3xl font-bold my-2 text-green-500">{totalSales}</p>
        </div>
    </div>
</div>