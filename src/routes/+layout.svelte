<script>
	import { fetchAllUsers } from './../lib/functions/fetchAllUsers.js';
	import { fetchAllProductsData } from './../lib/functions/fetchAllProductsData.js';
    import "../app.css";
    import { onMount } from 'svelte';
    onMount(()=>{
      fetchAllProductsData();
      fetchAllUsers();
    })
  </script>
  
  <div class="w-full relative max-w-[2480px] min-h-[100vh]  overflow-hidden ">
    <slot />
    <!-- <div class="absolute shade-1 bg-teal-400/50 left-1 opacity-40 " /> -->
  <!-- <div class='absolute gradient-01 opacity-50 left-0 bottom-0 ' />
  <div class='absolute gradient-02 opacity-50 bottom-0 right-0 ' />
  <div class='absolute gradient-03 opacity-50 top-0 right-0 ' />
  <div class='absolute gradient-04 opacity-50 top-0 left-0 ' /> -->
  </div>