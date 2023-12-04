<script>
    import CurrentMonthRevenue from "../lib/components/CurrentMonthRevenue.svelte";
    import Users from "../lib/components/Users.svelte";
    import WebShops from "../lib/components/WebShops.svelte";
    import AdminBody from "./../lib/components/admin-dashboard/AdminBody.svelte";
    import AdminNav from "./../lib/components/admin-dashboard/AdminNav.svelte";


    let adminNavItems = [
        {
            name:"All-Products",
            icon: "circum:shop",
            value:"all-products"
        },
        {
            name:"Add-Products",
            icon: "material-symbols-light:add"  ,
            value:"add-products"
        },
        {
            name:"All-Users",
            icon: "ph:users-thin",
            value:"all-users"
        },
        {
            name:"All-Orders",
            // icon: "fluent-mdl2:reservation-orders",
            icon: "lets-icons:order-light",
            value:"all-orders"
        },
        // {
        //     name:"All-Category",
        //     icon: "material-symbols-light:category-outline" ,
        //     value:"all-category"
        // },

        {
            name:"Analytics",
            icon: "arcticons:adobe-analytics" ,
            value:"analytics"
        },
        {
            name:"Search Engine Optimization",
            icon: "arcticons:auditor"  ,
            value:"seo"
        },
        
    ]
</script>

<div class="p-2 md:p-5 bg-white/60 m-2 md:m-5 rounded-xl shadow min-h-[90vh]">
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center font-light">Admin Dashboard</h1>
    <CurrentMonthRevenue/>
    <div class="flex w-full justify-center flex-col lg:flex-row px-2 md:px-5">
        <WebShops/>
        <Users/>
    </div>
</div>
<!-- <div class="w-full relative flex flex-col md:flex-row gap-2 p-3 md:p-5 bg-slate-100 overflow-hidden">
    <AdminNav {adminNavItems}  />
    <AdminBody/>
</div> -->

