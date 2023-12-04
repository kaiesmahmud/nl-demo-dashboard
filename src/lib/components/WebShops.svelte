<script>
    import Icon from '@iconify/svelte';
    let webshopsData = [
        {
            name:"Webshop A",
            totalRedirects: "23242",
            icon: "",
            css:" bg-gradient-to-tr from-cyan-600 to-teal-700  ",
            details: [
                {redirect_link : "webshop-a.com/", visited:"2993"},
                {redirect_link : "webshop-a.com/category", visited:"2993"},
                {redirect_link : "webshop-a.com/men", visited:"6564"},
                {redirect_link : "webshop-a.com/women", visited:"2332"},
                {redirect_link : "webshop-a.com/rings", visited:"2993"},
                {redirect_link : "webshop-a.com/watches", visited:"4543"},
            ]
        },
        {
            name:"Webshop B",
            totalRedirects: "43433",
            icon: "",
            css:" bg-gradient-to-tr from-cyan-600 to-teal-700  ",
            details: [
                {redirect_link : "webshop-a.com/", visited:"22342"},
                {redirect_link : "webshop-a.com/category", visited:"3422"},
                {redirect_link : "webshop-a.com/men", visited:"2324"},
                {redirect_link : "webshop-a.com/women", visited:"4343"},
                {redirect_link : "webshop-a.com/rings", visited:"2323"},
                {redirect_link : "webshop-a.com/watches", visited:"3432"},
            ]
        },
    ]
</script>

<div class="w-full lg:w-1/2 my-2 md:my-5 p-1 md:p-3 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5">
    {#each webshopsData as {name,totalRedirects,icon,css,details}}
    <div class="w-full  bg-white/80 rounded-lg overflow-hidden shadow-lg ">
        <div class={`flex items-center justify-between gap-5 ${css} p-5 text-white`}>
            <p class="text-lg md:text-xl lg:text-2xl font-bold">{name}</p>
            <div class="flex items-center justify-center gap-2 font-bold">
                <div class="text-2xl">
                    <Icon icon="ic:baseline-people" />
                </div>
                <p>{totalRedirects}</p>
            </div>
        </div>
        <div class=" flex flex-col gap-3 p-3 lg:-5 ">
            {#each details as {redirect_link,visited}}
            <div class=" text-xs md:text-sm lg:text-base flex items-center justify-between border-b border-slate-800/50 p-1 text-black/80">
                <p >{redirect_link}</p>
                <p>{visited}</p>
            </div>
            {/each}
        </div>
    </div>
    {/each} 
</div>