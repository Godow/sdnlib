<template>
<div id="e404">
</div>

</template>



<script>
  export default{
    name:'e404',
  }
</script>



<style>
*{
  padding:0;
  margin:0;
}
  #e404{
    
    width:100vw;
    height:100vh;
    background-image:url('../../static/config_files/pc_404.jpg');
    background-size:100% 100%;
    pointer-events: none;
  }

  @media screen and (max-width: 820px) {
    #e404{
        width:100vw;
        height:100vh;
        background-image:url('../../static/config_files/phone_404.jpg');
        background-size:100% 100%;
        pointer-events: none;
    }

    
  }
</style>