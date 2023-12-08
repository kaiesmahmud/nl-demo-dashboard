<script>
    import AllShopsData from "../lib/components/AllShopsData.svelte";
    import AllShopsTotalOrders from "../lib/components/AllShopsTotalOrders.svelte";
    import VisitorsAnalytics from "../lib/components/VisitorsAnalytics.svelte";

</script>

<div class="p-2 md:p-4 text-white/80  rounded-xl shadow min-h-[90vh]">

    <!-- =========Logo & Title Part=========== -->
    <div class="text-2xl md:text-3xl lg:text-4xl  font-semibold flex items-center gap-2 pb-3">
        <img class="w-10 md:w-14 " src="https://d186vdbjetg11u.cloudfront.net/static/media/logo.d6d00ab41593f9e46540095c8affeac4.svg" alt="">
        <span class="text-red-500">TRAXNYC</span> Reports Dashboard
    </div>

    <div class="flex flex-col lg:flex-row gap-3">
        <div class="w-full lg:w-1/3  flex flex-col gap-3">
            <VisitorsAnalytics/>
            <AllShopsTotalOrders/>
        </div>
        <div class=" w-full lg:w-2/3">
            <AllShopsData/>
        </div>

    </div>


    
</div>


