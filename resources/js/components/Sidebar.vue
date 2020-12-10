<template>
    <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
                <div class="nav">
                    <div class="sb-sidenav-menu-heading">Core</div>
                        <router-link to ="/" class="nav-link" exact>
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                        </router-link>

                        <router-link to ="/categories" class="nav-link" exact>
                            <div class="sb-nav-link-icon"><i class="fas fa-fw fa-chart-area"></i></div>
                                Categories
                        </router-link>
                    </div>
                </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Start Bootstrap
            </div>
        </nav>
    </div>
</template>
    
        
        
        