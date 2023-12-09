<script>
    import Icon from '@iconify/svelte';

    let webshoptsList = [
        {name: "ISW-Netherlands", color:"bg-[#8A30FE]"},
        {name: "ISW-Belgium", color:"bg-[#F68F30]"},
        {name: "ISW-Germany", color:"bg-[#04975A]"},
        {name: "All-ISW", color:"bg-[#F34545]"},
    ]
</script>


<div class="bg-white/20 rounded p-3 md:p-5 text-xs md:text-sm select-none ">
    <div class="flex items-center justify-between">
        <div class="bg-red-500/90 text-white rounded-full shadow p-2 px-3 flex items-center gap-3 font-bold">
            All Webshops
            <!-- <div>
                <Icon icon="mingcute:down-fill" />
            </div> -->
        </div>
        <div class="flex items-center justify-center gap-3 text-center">
            <div>
                <p>Visitor Today</p>
                <p class="text-lg font-extrabold text-white">232</p>
            </div>
            <div>
                <p>Total Visitors</p>
                <p class="text-lg font-extrabold text-white">232</p>
            </div>
        </div>
    </div>
    <div class="my-5 w-full overflow-hidden">
        <img class="w-full" src="/graph.png" alt="">
    </div>
    <div class="flex w-full gap-3 items-center justify-between mt-5 pt-5 md:w-[90%]">
        {#each webshoptsList as {name,color}}
        <div class="flex flex-col gap-2 items-center justify-center text-xs text-center  opacity-80">
            <p>{name}</p>
            <div class={`${color} h-1 w-[80%] rounded-full animate___progress`} />
        </div>
        {/each}
    </div>
</div>