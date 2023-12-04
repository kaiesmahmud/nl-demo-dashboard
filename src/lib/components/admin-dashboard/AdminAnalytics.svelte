<script>
    let visitors = [
      {title:"total visitors",value: 12312},
      {title:"home page visitors",value: 10541},
      {title:"catagory page visitors",value: 1326},
      {title:"product searched",value: 8412},
      // {title:"continues Visitors",value: 2051},
      {title:"android user",value: 8000},
      {title:"IOS user",value: 3000},
      {title:"PC/Laptop user",value: 10000},
    ]

    let Totalredirects = [
      {title:"Webshop A",value: 12312},
      {title:"Webshop B",value: 10541},
      {title:"Webshop C",value: 500},
    ]
</script>

<div>
    <h1 class="font-bold text-xl md:text-2xl pb-3">Analytics</h1>
    <hr>
    <div class="w-2/3 flex flex-col gap-3 p-2 capitalize">
    <!-- <div class="grid grid-cols-2 md:grid-cols-3 gap-3 p-2"> -->
      {#each visitors as {title,value}}
      <div class="capitaliz flex items-center justify-between p-3 border-b border-gray-200">
      <!-- <div class="p-2 capitalize text-center rounded-2xl shadow-lg bg-gray-50 flex flex-col items-center justify-around aspect-square"> -->
        <h1 class="font-semibold">{title}:</h1>
        <p class=" text-lg font-nunito">{value}</p>
      </div>
      {/each}
    </div>
    <h1 class="font-bold text-xl md:text-2xl py-3">Total Redirects:</h1>
    <hr>
    <div class=" w-full md:w-2/3 grid grid-cols-1  gap-3 p-2">
      {#each Totalredirects as {title,value}}
      <div class="capitaliz flex items-center justify-between p-3 border-b border-gray-200">
        <h1 class="font-semibold">{title}:</h1>
        <p class="  text-lg font-nunito">{value}</p>
      </div>
      {/each}
    </div>
    
</div>