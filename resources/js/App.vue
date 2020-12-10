<template>
    <main>
        <Header />
        <div id="layoutSidenav">
            <Sidebar/>
            <div id="layoutSidenav_content">
                <main>
                    <router-view></router-view>
                </main>
            <Footer/>
            </div>
        </div>

        <FlashMessage position="right top"></FlashMessage>
    </main>
</template>

<script>
    import Header from './components/Header.vue';
    import Sidebar from './components/Sidebar.vue';
    import Footer from './components/Footer.vue';
    
    export default {
        components: {
            Header,
            Sidebar,
            Footer
        },
        created(){
            document.querySelector("body").style.backgroundColor = "#fff";
        }
    }
</script>