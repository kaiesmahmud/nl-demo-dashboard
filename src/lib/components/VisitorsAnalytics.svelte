<script>
    import Icon from '@iconify/svelte';
    import { fade } from 'svelte/transition';

    let webshoptsList = [
        {name: "ISW-Netherlands", color:"bg-[#8A30FE]", url:"./violet-graph.png" , visitorToday: 232 ,totalVisitors:4433},
        {name: "ISW-Belgium", color:"bg-[#F68F30]", url:"./yellow-graph.png" , visitorToday: 524 ,totalVisitors:9285},
        {name: "ISW-Germany", color:"bg-[#04975A]", url:"./green-graph.png" , visitorToday: 624 ,totalVisitors:5181},
        {name: "All-ISW", color:"bg-[#F34545]", url:"./graph.png" , visitorToday: 1548 ,totalVisitors:54784},
    ]
    let showGraph ={name: "All-ISW", color:"bg-[#F34545]", url:"./graph.png" , visitorToday: 1548 ,totalVisitors:54784}
    let showList = false
    const handleShowList = () => showList=!showList
    const handleChangeGraph = (obj)=> {
        showGraph = {...showGraph, ...obj};
    }
</script>


<div class="bg-white/20 rounded p-3 md:p-5 text-xs md:text-sm  ">
    <div class="flex items-center justify-between">
        <button on:click={handleShowList} class=" relative text-white  shadow  flex flex-col items-center gap-3 font-bold">
            <div class="flex items-center gap-3 bg-red-500/90 rounded-full p-2 px-3 hover:bg-red-700 transition-all ease-in">
                <p>All Webshops </p>
                <div>
                    <Icon icon="mingcute:down-fill" />
                </div>
            </div>
            {#if showList}
            <div class=" absolute top-[100%] w-full left-0 flex flex-col items-start gap-2 bg-black/50 p-2 rounded-lg z-[100]">
                {#each webshoptsList as list}
                <button class="w-full text-start" on:click={()=>{handleChangeGraph(list)}}>{list.name}</button>
                {/each}
            </div>
            {/if}
        </button>
        <div class="flex items-center justify-center gap-3 text-center">
            <div>
                <p>Visitor Today</p>
                <p class="text-lg font-extrabold text-white">{showGraph.visitorToday}</p>
            </div>
            <div>
                <p>Total Visitors</p>
                <p class="text-lg font-extrabold text-white">{showGraph.totalVisitors}</p>
            </div>
        </div>
    </div>
    <div class="my-5 w-full overflow-hidden faded">
        <img transition:fade class="w-full" src={showGraph.url} alt="">
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