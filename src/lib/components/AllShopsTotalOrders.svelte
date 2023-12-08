<script>
    // your script goes here
    let data = [
        {
            title: "Total Order of ISW-Netherlands",
            totalOrder: {
                show:"w-[60%] bg-sky-500" , value: 120
            },
            pendingOrder:{
                show:"w-[30%] bg-orange-500" , value: 20
            },
            completeOrder:{
                show:"w-[30%] bg-green-500" , value: 100
            }
        },
        {
            title: "Total Order of ISW-Belgium",
            totalOrder: {
                show:"w-[60%] bg-sky-500" , value: 120
            },
            pendingOrder:{
                show:"w-[30%] bg-orange-500" , value: 20
            },
            completeOrder:{
                show:"w-[30%] bg-green-500" , value: 100
            }
        },
        {
            title: "Total Order of ISW-Germany",
            totalOrder: {
                show:"w-[60%] bg-sky-500" , value: 120
            },
            pendingOrder:{
                show:"w-[30%] bg-orange-500" , value: 20
            },
            completeOrder:{
                show:"w-[30%] bg-green-500" , value: 100
            }
        },
    ]
</script>

{#each data as {title,totalOrder,pendingOrder,completeOrder}}
    <div class="bg-white/20 rounded p-3 text-xs md:text-sm select-none">
        <p class="font-bold text-base">{title}</p>
         <div class="flex flex-col gap-2 my-2 text-xs">
            <div class=" flex flex-col gap-1">
                <div class="flex items-center justify-between">
                    <p>Total Order:</p>
                    <p class="font-extrabold">{totalOrder.value}</p>
                </div>
                <div class="h-1 w-full bg-white/10 rounded overflow-hidden">
                    <div class={`${totalOrder.show} h-1 `} />
                </div>
            </div>
            <div class=" flex flex-col gap-1">
                <div class="flex items-center justify-between">
                    <p>Pending Order:</p>
                    <p class="font-extrabold">{pendingOrder.value}</p>
                </div>
                <div class="h-1 w-full bg-white/10 rounded overflow-hidden">
                    <div class={`${pendingOrder.show} h-1 `} />
                </div>
            </div>
            <div class=" flex flex-col gap-1">
                <div class="flex items-center justify-between">
                    <p>Completed Order:</p>
                    <p class="font-extrabold">{completeOrder.value}</p>
                </div>
                <div class="h-1 w-full bg-white/10 rounded overflow-hidden">
                    <div class={`${completeOrder.show} h-1 `} />
                </div>
            </div>
         </div>
    </div>
{/each}