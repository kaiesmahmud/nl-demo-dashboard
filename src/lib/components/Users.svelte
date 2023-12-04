<script>
    let userData = [
        {title:"total Users", value:"2312",text:" text-slate-700"},
        {title:"New Users", value:"500",text:" text-green-700"},
        {title:"Banned Users", value:"150",text:" text-red-500"},
    ]
</script>
<div class="w-full lg:w-1/2 my-2 md:my-5 p-3 ">
    <div class="w-full h-full p-3 overflow-hidden flex flex-col gap-4 md:flex-row items-center justify-center">
        {#each userData as {title,value,text}}
        <div class={`w-2/3 md:w-full bg-white/90 text-center aspect-square flex items-center justify-center flex-col rounded-full border shadow-lg font-bold capitalize ${text}`} >
            <h1 class="text-3xl md:text-6xl font-light">{value}</h1>
            <h1 class=" ">{title}</h1>
        </div>
        {/each}

    </div>
</div>