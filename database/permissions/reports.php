<?php
use App\Models\Permission;

if ( defined( 'NEXO_CREATE_PERMISSIONS' ) ) {
    $permission                 =   new Permission;
    $permission->name           =   __( 'See Sale Report' );
    $permission->namespace      =   'nexopos.report.sales';
    $permission->description    =   __( 'Let you see the sales report' );
    $permission->save();

    $permission                 =   new Permission;
    $permission->name           =   __( 'See Best Report' );
    $permission->namespace      =   'nexopos.report.best_sales';
    $permission->description    =   __( 'Let you see the best_sales report' );
    $permission->save();

    $permission                 =   new Permission;
    $permission->name           =   __( 'See Cash Flow Report' );
    $permission->namespace      =   'nexopos.report.cash_flow';
    $permission->description    =   __( 'Let you see the cash flow report' );
    $permission->save();

    $permission                 =   new Permission;
    $permission->name           =   __( 'See Yearly Sales' );
    $permission->namespace      =   'nexopos.report.yearly';
    $permission->description    =   __( 'Let you see the yearly report' );
    $permission->save();

    $permission                 =   new Permission;
    $permission->name           =   __( 'See Customers' );
    $permission->namespace      =   'nexopos.report.customers';
    $permission->description    =   __( 'Let you see the Yearly report' );
    $permission->save();

    $permission                 =   new Permission;
    $permission->name           =   __( 'See Inventory Tracking' );
    $permission->namespace      =   'nexopos.report.inventory';
    $permission->description    =   __( 'Let you see the Yearly report' );
    $permission->save();
}
