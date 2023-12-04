<script>
    let revenueData = [
        {title: "Total Sales", price: "120490", css:" bg-gradient-to-tr from-cyan-600 to-violet-500  "},
        {title: "Profit Sales", price: "32490", css:" bg-gradient-to-tr from-green-600 to-teal-700  "},
        {title: "Monthly Target", price: "120490", css:" bg-gradient-to-tr from-cyan-600 to-violet-500  "},
        {title: "My Share", price: "49080", css:" bg-gradient-to-tr from-pink-600 to-red-500  "},
    ]
</script>

<div class="m-2 md:m-5 p-1 md:p-3 ">
    <!-- <h1 class="text-xl md:text-2xl font-bold">Current Month Revenue</h1> -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
        {#each revenueData as {title,price,css}}
        <div class="w-full  bg-white/80 rounded-lg overflow-hidden shadow-lg">
            <div class={`w-full p-3 ${css}`}>
                <h2 class="text-center text-lg md:text-xl font-bold text-white">{title}</h2>
            </div>
            <div>
                <p class="text-2xl md:text-4xl font-light text-center p-10">${price}</p>
            </div>
        </div>
        {/each}

    </div>
</div>