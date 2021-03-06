import Vue from 'vue';
import * as baseComponents from './components/components';

import {
    nsCurrency
}   from './filters/declarations';

/**
 * Will bootstrap time and 
 * start counting
 */
import './shared/time';

import NsRewardsSystem   from './pages/dashboard/rewards-system.vue';
import NsCreateCoupons   from './pages/dashboard/create-coupons.vue';
import NsManageProducts  from './pages/dashboard/manage-products.vue';
import NsSettings        from './pages/dashboard/settings.vue';
import NsReset           from './pages/dashboard/reset.vue';
import NsModules         from './pages/dashboard/modules.vue';
import NsPermissions     from './pages/dashboard/ns-permissions.vue';
import NsProcurement     from './pages/dashboard/ns-procurement.vue';
import NsMedia           from './pages/dashboard/ns-media.vue';

declare const nsState;
declare const nsScreen;
declare const nsExtraComponents;

(<any>window).nsDashboardAside  =   new Vue({
    el: '#dashboard-aside',
    data: {
        sidebar: 'visible'
    },
    components: {...baseComponents},
    mounted() {
        nsState.behaviorState.subscribe(({ object }) => {
            this.sidebar    =   object.sidebar;
        })
    }
});

(<any>window).nsDashboardOverlay    =   new Vue({
    el: '#dashboard-overlay',
    data: {
        sidebar: null
    },
    components: {...baseComponents},
    mounted() {
        nsState.behaviorState.subscribe(({ object }) => {
            this.sidebar    =   object.sidebar;
        })
    },
    methods: {
        /**
         * this is mean to appear only on mobile.
         * If it's clicked, the menu should hide
         */
        closeMenu() {
            nsState.setState({
                sidebar: this.sidebar === 'hidden' ? 'visible' : 'hidden'
            });
        }
    }
});

(<any>window).nsDashboardHeader     =   new Vue({
    el: '#dashboard-header',
    data: {
        menuToggled: false,
    },
    components: {...baseComponents},
    methods: {
        toggleMenu() {
            this.menuToggled    =   !this.menuToggled;
        },
        toggleSideMenu() {
            if ([ 'lg', 'xl' ].includes( nsScreen.breakpoint ) ) {
                nsState.setState({ sidebar: this.sidebar === 'collapsed' ? 'visible': 'collapsed' });    
            } else {
                nsState.setState({ sidebar: this.sidebar === 'hidden' ? 'visible': 'hidden' });
            }
        }
    },
    mounted() {
        nsState.behaviorState.subscribe( ({ object }) => {
            this.sidebar    =   object.sidebar;
        })
    }
});

const components    =   {
    NsModules,
    NsRewardsSystem,
    NsCreateCoupons,
    NsManageProducts,
    NsSettings,
    NsReset,
    NsPermissions,
    NsProcurement,
    NsMedia,
    ...nsExtraComponents, // add extra components provided by plugins.
};

(<any>window).nsDashboardContent    =   new Vue({
    el: '#dashboard-content',
    components
});