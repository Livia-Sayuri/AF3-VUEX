<template>
  <v-app>

  <v-system-bar app>
      <v-spacer></v-spacer>
      <span>v-system-bar</span>
            <v-spacer></v-spacer>
            </v-system-bar>



    <v-app-bar app >
          <v-spacer></v-spacer>
      <span>v-app-bar</span>
       <v-spacer></v-spacer>
    </v-app-bar>
    

    <Toolbar> 
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

          <v-btn icon>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>

    </Toolbar>

  <v-navigation-drawer
      v-model="drawer"
      app
      width="300"
    >
      <v-navigation-drawer
        v-model="drawer"
        absolute
        mini-variant
      >
        
      </v-navigation-drawer>


      <v-list
        class="pl-14"
        shaped
      >
        <v-list-item>
          <v-list-item-content>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

          <v-btn icon>
        <v-icon>mdi-crosshairs-gps</v-icon>
      </v-btn>          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


<v-main >  <v-content app> 
      <span>v-content</span>
      </v-content></v-main>
  


    <v-footer class="mt-5" app>
      <v-spacer></v-spacer>
      <span>v-footer</span>
    <v-spacer></v-spacer>
    </v-footer>

<v-bottom-navigation app> 
  <v-spacer></v-spacer>
  <span>v-bottom-navigation</span>
  <v-spacer></v-spacer>
</v-bottom-navigation>

  </v-app>

  
</template>

<script> 
  import Toolbar from "@/components/Toolbar"

  export default{
    name: 'App',
    components: {
      Toolbar
    },
    data: () => ({
      //
    }),
  };
</script>