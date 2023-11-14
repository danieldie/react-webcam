import Styled from 'styled-components';

const SalesSearchWrapper = Styled.div`
    border-radius: 10px;
    margin-bottom: 30px;
    .ant-card-body{
        max-width:700px;
    }
    .ant-card-head{
        border:0 !important;
    }
    .ant-card-body{
        padding-top:0 !important;
    }
    .ninjadash-card-nav{
        display:flex;
        align-items:center;
        gap:10px;
        margin-bottom:20px;
        span{
            flex:1;
        }
        div{
            flex:2;
        }
        .ninjadash-filter-action{
            span{
                text-align:right;
            }
        }
       
    }
    .date-filter{
        gap:10px;
        margin-bottom:12px;
        justify-content:right;
        flex-wrap:wrap;
        label{
            flex:1;
        }
        .date-pick{
            flex:2;
        }
        
    }
    
`;

const Main = Styled.div`
    padding: 0px 30px 20px;
    min-height: 715px;
    background-color: transparent;
    .ant-table-autoH{
        .ant-table{
            min-height:auto !important;
        }
    }
    .dashboard-summary-table{
        .ant-table-thead{
            display:none;
        }
    }
    &.grid-boxed{
        padding: 0px 180px 20px;
        @media only screen and (max-width: 1599px){
            padding: 0px 130px 20px;
        }
        @media only screen and (max-width: 1399px){
            padding: 0px 50px 20px;
        }
        @media only screen and (max-width: 991px){
            padding: 0px 30px 20px;
        }
    }

    .doughnutchart-inner{
        position: relative;
        .doughnutchart-inner-text{
            position: absolute;
            top: 50%;
            left: 50%;
            text-align: center;
            width: 200px;
            line-height: 1;
            margin-bottom: 0px;
            display: inline-block;
            transform: translate(-50%, -50%);
            .doughnutchart-inner-content{
                font-size: 30px;
                font-weight: 600;
                line-height: 1;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                display: block;
            }
            .doughnutchart-inner-label{
                font-size: 15px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        canvas{
            margin: 0 auto;
        }
    }
    .ant-switch{
        .anticon svg{
            color: #fff;
        }
    }
    /* ant breadcrumb */
    .ant-breadcrumb {
        a{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    
    .page-header-actions{
        .ant-btn-white{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']} !important;
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            &:hover{
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']} !important;
            }
        }
    }
    /* Card Title */
    .ant-card{
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-card{
        &.ninjadash-ghost-card{
            .ant-card-body{
                background: linear-gradient(90deg, rgb(95, 99, 242), rgb(255, 105, 165));
            }
        }
    }
    
    .ant-card-head-title{
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
    }
    .ant-card-bordered{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    .ant-card-head{
        border-bottom-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        .ninjadash-card-title-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .ninjadash-card-title-text{
                font-size: 18px;
                font-weight: 600;
                display: inline-block;
                ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 0;
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                .ninjadash-card-subtitile{
                    font-size: 12px;
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 6px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            .ninjadash-card-title-extra-text{
                display: flex;
                align-items: center;
                position: relative;
                top: 3px;
                .ninjadash-total-chart-total{
                    font-size: 18px;
                    font-weight: 600;
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                    @media only screen and (max-width: 991px){
                        font-size: 15px;
                    }
                }
                .ninjadash-total-chart-status{
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 500;
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
                    @media only screen and (max-width: 991px){
                        font-size: 12px;
                    }
                    i,
                    svg{
                        width: 22px;
                        height: 22px;
                        margin-right: -1px;
                        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: -1px;
                        @media only screen and (max-width: 991px){
                            width: 18px;
                            height: 18px;
                        }
                    }
                    &.ninjadash-total-chart-status-growth{
                        color: ${({ theme }) => theme['success-color']};
                    }
                    &.ninjadash-total-chart-status-down{
                        color: ${({ theme }) => theme['danger-color']};
                    }
                }
            }
        }
    }

    .ant-card-body{
        p{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    .ninjadash-card-nav{
        ul{
            display: flex;
            align-items: center;
            margin: 0 -10px 2px 0;
            margin: ${({ theme }) => (!theme.rtl ? '0 -10px 2px 0' : '0 0 2px -10px')};
            li{
                margin: 5px 0;
                a{
                    font-size: 13px;
                    font-weight: 500;
                    display: inline-flex;
                    align-items: center;
                    border-radius: 6px;
                    min-height: 30px;
                    padding: 0 12px;
                    transition: .3s;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
                    &:hover{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
                &.ninjadash-active{
                    a{
                        background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                        color: ${({ theme }) => theme['primary-color']};
                    }
                }
            }
        }
    }

    .ant-card-rtl .ant-card-extra{
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0 !important;
        
    }
    .ant-tabs-tab span svg {        
        ${({ theme }) => (theme.rtl ? 'padding-left' : 'padding-right')}: 5px;
    }
    .ant-btn{
        &.ant-btn-light{
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
            &.btn-transparent,
            &.btn-outlined{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            &.btn-outlined:hover{
                color: ${({ theme }) => theme['primary-color']};
            }
        }
    }
    /* Pagination Style */
    .ant-pagination-item{
        border-radius: 4px;
    }
    .ant-pagination-item a{
        font-weight: 400;
    }
    .ant-pagination-next svg{
        fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-pagination-options .ant-select-selector{
        padding: 0 6.5px
    }
    .ant-pagination-options .ant-select .ant-select-arrow{
        svg{
            width: 10px;
            fill: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    
    /* Picker Under Input */
    .ant-form-item-control-input .ant-picker {
        padding: ${({ theme }) => (theme.rtl ? '0 0 0 12px' : '0 12px 0 0')} !important;
    }

    /* progressbars */

    .ant-progress {
        display: inline-flex !important;
        align-items: center;
        .ant-progress-inner{
            /* background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']}; */
            background-color: transparent;
        }
        .ant-progress-text{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ant-progress-circle-trail{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        }
    }

    .ant-progress>div {
        display: flex;
        flex-direction: column;
    }

    .ant-progress .ant-progress-outer {
        ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0 !important;
        ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 0 !important;
    }

    .ant-progress .ant-progress-text {
        order: 0;
        align-self: flex-end;
        text-align: center;
    }

    .ant-progress-status-warning .ant-progress-bg {
        background: #fa8b0c;
    }

    /* progress bars */
    
    @media only screen and (max-width: 1199px){
        padding: 0px 15px;
    }
    @media only screen and (max-width: 991px){
        min-height: 580px;
    }
    .w-100{
        width: 100%;
    }
    .product-sidebar-col{
        @media only screen and (max-width: 767px){
            order: 2;
        }
    }
    .ant-skeleton-paragraph{
        margin-bottom: 0;
    }

    /* Button Group */
    .ant-btn-group{
        .ant-btn-default{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']}; 
        }
    }

    /* ant skeleton */
    .ant-skeleton{
        &.ant-skeleton-active{
            .ant-skeleton-content {
                .ant-skeleton-title{
                    background: linear-gradient(90deg, ${({ theme }) =>
                      theme[theme.mainContent]['border-color-default']} 25%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']} 37%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} 63%);
                    background-size: 400% 100%;
                }
                .ant-skeleton-paragraph{
                    >li{
                        background: linear-gradient(90deg, ${({ theme }) =>
                          theme[theme.mainContent]['border-color-default']} 25%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']} 37%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} 63%);
                        background-size: 400% 100%;
                    }
                }
            }
            .ant-skeleton-avatar{
                background: linear-gradient(90deg, ${({ theme }) =>
                  theme[theme.mainContent]['border-color-default']} 25%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-secondary']} 37%, ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} 63%);
                background-size: 400% 100%;
            }
        }
        .ant-skeleton-content {
            .ant-skeleton-title{
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
            .ant-skeleton-paragraph{
                >li{
                    background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                }
            }
        }
        .ant-skeleton-header{
            .ant-skeleton-avatar{
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
    }

    /* ant picker */
    .ant-picker{
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        input{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &::placeholder{
                color: ${({ theme }) => theme[theme.mainContent]['light-text']};
            }
        }
        .ant-picker-suffix{
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    /* ant checkbox */
    .ant-checkbox{
        &:hover{
            .ant-checkbox-inner{
                border-radius: 4px;
            }
        }
        &.ant-checkbox-checked{
            &:after{
                border-color: ${({ theme }) => theme['primary-color']};
                border-radius: 4px;
            }
            .ant-checkbox-inner{
                background-color: ${({ theme }) => theme['primary-color']};
                border-color: ${({ theme }) => theme['primary-color']};
                &:after{
                    top: 44%;
                    border-color: #fff;
                }
            }
        }
        &.ant-checkbox-indeterminate{
            .ant-checkbox-inner{
                &:after{
                    background-color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }
    .ant-checkbox-wrapper{
        &.ant-checkbox-wrapper-disabled{
            opacity: .5;
        }
        .ant-checkbox{
            &+span{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-checkbox-wrapper,
    .ant-checkbox{
        &:hover{
            .ant-checkbox-inner{
                border-color: ${({ theme }) => theme['primary-color']};
            }
        }
        .ant-checkbox-input{
            &:focus{
                &+.ant-checkbox-inner{
                    border-color: ${({ theme }) => theme['primary-color']};
                }
            }
        }
    }
    .ant-checkbox-inner{
        border-radius: 4px;
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-checkbox']};
    }

    /* ant alert */
    .ant-alert-closable{
        .ant-alert-message{
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        }
    }

    .ant-alert-with-description .ant-alert-description{
        display: inline-block;
    }

    /* ant Calendar Picker */
    .ant-picker-calendar{
        .ant-badge-status-text{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }
    .ant-picker-calendar-header .ant-picker-calendar-year-select{
        @media only screen and (max-width: 400px){
            width: 50% !important;
        }
    }
    .ant-picker-calendar-header .ant-picker-calendar-month-select{
        @media only screen and (max-width: 400px){
            width: calc(50% - 8px) !important
        }
    }

    /* Card Grid */
    .card-grid-wrap{
        .ant-card-grid{
            @media only screen and (max-width: 575px){
                width: 50% !important
            }
        }
    }

    /* Drawer */
    .atbd-drawer{
        .ant-card-body{
            text-align: center;
            .ant-drawer-wrapper-body {
                text-align: ${({ theme }) => (!theme.rtl ? 'left' : 'right')};
            }
        }
    }
    .drawer-placement{
        @media only screen and (max-width: 400px){
            text-align: center;
        }
        .ant-radio-group{
            @media only screen and (max-width: 400px){
                margin-bottom: 15px;
            }
        }
    }
    .ant-drawer-content-wrapper{
        @media only screen and (max-width: 400px){
            width: 260px !important;
        }
        @media only screen and (max-width: 375px){
            width: 220px !important;
        }
    }

    /* Input */
    .input-wrap{
        @media only screen and (max-width: 991px){
            min-height: 500px;
        }
        input::placeholder{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
    }
    /* Modal Buttons */
    .modal-btns-wrap{
        margin: 0 -5px;
    }
    /* spinner */
    .ant-spin{
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
        &:last-child{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 0;
        }
    }

    /* Column Cards Wrapper */
    .columnCardsWrapper{
        background: ${({ theme }) => theme[theme.mainContent]['dark-background']};
        border-radius: 4px;
        padding: 50px 30px 25px;
    }
    .columnCardsWrapper .ant-card{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    .columnCardsWrapper .ant-card-head{
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }
    .ant-card-grid{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        box-shadow: 1px 0 0 0 ${({ theme }) => theme[theme.mainContent]['border-color-default']}, 0 1px 0 0 ${({
  theme,
}) => theme[theme.mainContent]['border-color-default']}, 1px 1px 0 0 ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']}, 1px 0 0 0 ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} inset, 0 1px 0 0 ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']} inset     
    }

    /* Ant Collapse */
    .ant-collapse{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        border-radius: 6px;
        > .ant-collapse-item{
            &:last-child{
                border-radius: 0 0 6px 6px;
                background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
                >.ant-collapse-header{
                    border-radius: 0 0 6px 6px;
                }
            }
            .ant-collapse-item{
                &:last-child{
                    background-color: transparent;
                }
                .ant-collapse-header{
                    border-radius: 6px;
                }
            }
            .ant-collapse-content{
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                .ant-collapse-content-box{
                    background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                }
            }
        }
        .ant-collapse-header{
            .ant-collapse-header-text{
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .ant-collapse.ant-collapse-icon-position-left .ant-collapse-header{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        padding: 12px 16px 10px 45px;
        background-color: ${({ theme }) => theme[theme.mainContent]['light-background']};
        @media only screen and (max-width: 1299px){
            padding: 12px 16px 10px 30px;
        }
    }
    .ant-collapse-content p{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        margin-bottom: 0;
    }
    .ant-collapse-content > .ant-collapse-content-box {
        padding: 20px 20px 20px;
    }
    .ant-collapse-content > .ant-collapse-content-box .ant-collapse-content-box{
        padding: 10.5px 20px;
    }
    .ant-collapse.ant-collapse-borderless{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        > .ant-collapse-item{
            &:last-child{
                border-radius: 0px;
            }
        }
    }
    .ant-collapse > .ant-collapse-item,
    .ant-collapse .ant-collapse-content{
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }
    .ant-collapse > .ant-collapse-item.ant-collapse-item-disabled .ant-collapse-header{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']} !important;
    }

    .ant-collapse > .ant-collapse-item .ant-collapse-header .ant-collapse-arrow{
        font-size: 8px;
        position: relative;
        top: ${({ theme }) => (!theme.rtl ? '-3px' : '0')};
        right: 0;
    }

    .ant-collapse .ant-collapse {
        border: 0 none;
        background: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }

    .ant-collapse .ant-collapse > .ant-collapse-item {
        border-bottom: 0;
    }
    .ant-collapse .ant-collapse .ant-collapse-header{
        border-radius: 6px 6px 0 0;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        background: ${({ theme }) => theme[theme.mainContent]['light-background']};
    }
    .ant-collapse .ant-collapse .ant-collapse-content{
        margin: 20px 0 0 0;
        border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        border-radius: 0;
    }

    /* Ant Radio */
    .ant-radio-wrapper{
        .ant-radio{
            &+span{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within{
        box-shadow: 0 0;
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){
        background-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child{
        border-right-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):first-child{
        border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
    }
    .ant-radio-button-wrapper{
        height: 48px;
        line-height: 46px;
        padding: 0 25.25px;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        @media only screen and (max-width: 1024px){
            padding: 0 10px;
        }
        @media only screen and (max-width: 379px){
            height: 40px !important;
            line-height: 38px !important;
            font-size: 12px;
            padding: 0 6px;
        }
        &:not(:first-child){
            &:before{
                background-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            }
        }
        &.ant-radio-button-wrapper-checked{
            color: ${({ theme }) => theme[theme.mainContent]['white-text']};
        }
    }

    /* Select */
    .ant-tree-select .ant-select-selector{
        height: 42px;
    }
    .ant-select:not(.ant-select-customize-input) {
        .ant-select-selector{
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
    }
    .tag-select-list{
        margin-bottom: -10px;
        .ant-select{
            margin-bottom: 10px;
        }
    }
    .ant-select-selector{
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']} !important;
    }

    .ant-select{
        .ant-select-selector {
            .ant-select-selection-item{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
        &.ant-select-disabled{
            opacity: .6;
        }
        &.ant-select-multiple{
            .ant-select-selection-item{
                height: 24px;
                align-items: center;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 8px;
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
        
        &.ant-select-lg{
            height: 50px;
            line-height: 48px;
            .ant-select-selector{
                height: 50px !important;
                line-height: 48px;
            }
            .ant-select-selection-item{
                line-height: 48px !important;
                ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 8px;
            }
            &.ant-select-multiple.ant-select-lg .ant-select-selection-item{
                height: 32px;
                line-height: 32px !important;
            }
        }
        &.ant-select-multiple.ant-select-sm{
            .ant-select-selection-item{
                height: 16px;
                line-height: 14px;
                font-size: 11px;
            }
        }
        .ant-select-arrow{
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    /* Slider */
    .slider-with-input{
        .ant-slider{
            ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        }
        .slider-with-input__single{
            margin-bottom: 15px;
        }
        .ant-input-number{
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        .ant-input-number-input{
            background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
    }

    .ant-slider-mark-text{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .anticon svg{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }

    .ant-slider-handle{
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']}
    }

    /* ant input */
    .ant-input,
    .ant-input-affix-wrapper{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        &:focus{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            box-shadow: 0 0;
        }
        input.ant-input{
            &:focus{
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
                box-shadow: 0 0 !important;
            }
        }
    }

    .ant-input-affix-wrapper{
        &:not(.ant-input-affix-wrapper-disabled){
            &:hover{
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            }
        }
    }
    .ant-input-affix-wrapper-focused{
        box-shadow: 0 0;
    }

    /* Taglist */
    .ant-tag{
        margin: 5px;
    }
    .taglist-wrap{
        margin: -5px;
        .ant-tag {
            line-height: 22px;
            padding: 0 10.2px;
            border: 0 none;
            margin: 5px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &.ant-tag-has-color{
                color: #fff !important;
            }
            &.ant-tag-magenta{
                color: #eb2f96;
            }
            &.ant-tag-red{
                color: #f5222d;
            }
            &.ant-tag-volcano{
                color: #fa541c;
            }
            &.ant-tag-orange{
                color: #fa8c16;
            }
            &.ant-tag-gold{
                color: #faad14;
            }
            &.ant-tag-line{
                color: #a0d911;
            }
            &.ant-tag-green{
                color: #a0d911;
            }
            &.ant-tag-cyan{
                color: #13c2c2;
            }
            &.ant-tag-blue{
                color: #1890ff;
            }
            &.ant-tag-geekbule{
                color: #2f54eb;
            }
            &.ant-tag-purple{
                color: #722ed1;
            }
        }
    }

    .ant-tag {
        color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        background-color: ${({ theme }) => theme[theme.mainContent]['dark-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        a{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        svg{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    /* ant empty */

    .ant-empty-description{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    /* Steps style */
    .ant-steps-item-finish,
    .ant-steps-item-wait {
        .ant-steps-item-icon{
            background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        }
        > .ant-steps-item-container {
            > .ant-steps-item-content {
                > .ant-steps-item-title{
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
        }
    }

    .steps-content{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-steps-item-wait {
        .ant-steps-item-icon{
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
            .ant-steps-icon{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    .ant-steps-item-process{
        > .ant-steps-item-container {
            > .ant-steps-item-content {
                > .ant-steps-item-title{
                    color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
                }
            }
        }
    }

    /* Timepicker List */
    .timepicker-list{
        margin: -5px;
        .ant-picker{
            margin: 5px;
        }
    }

    /* ant statistics */

    .ant-statistic {
        .ant-statistic-title{
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
        .ant-statistic-content{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
    }
    .ant-statistic-content{
        .anticon {
            &.anticon-arrow-up{
                svg{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
            &.anticon-arrow-down{
                svg{
                    color: ${({ theme }) => theme['danger-color']};
                }
            }
        }
    }

    /* Ant Menu */
    .ant-menu-submenu {
        & > .ant-menu-submenu-title {
            color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
        }
        &.ant-menu-submenu-selected{
            .ant-menu-submenu-title{
                span{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
        }
    }

    .ant-menu{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        .ant-menu-submenu-title{
            svg,
            .ant-menu-title-content,
            .ant-menu-submenu-arrow{
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
            &:active{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
            }
        }
        .ant-menu-item{
            &:active{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
            }
            &.ant-menu-item-selected{
                &:after{
                    border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
                .ant-menu-item-icon{
                    svg{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
                .ant-menu-title-content{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
            &.ant-menu-item-disabled{
                .ant-menu-item-icon{
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
                .ant-menu-title-content{
                    opacity: .5;
                    color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
                }
            }
            &.ant-menu-item-active{
                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
        .ant-menu-submenu {
            & > .ant-menu-submenu-title {
                color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
            }
            &.ant-menu-submenu-selected{
                .ant-menu-submenu-title{
                    span{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
        &.ant-menu-inline{
            .ant-menu-submenu-title svg{
                position: relative;
                top: 2px;
            }
            .ant-menu-submenu {
                &.ant-menu-submenu-open,
                &.ant-menu-submenu-active{
                    .anticon {
                        svg{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                    svg{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                    .ant-menu-submenu-arrow{
                        color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
        &:not(.ant-menu-horizontal){
            .ant-menu-item-selected,
            .ant-menu-submenu-open{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active-bg']};
                &.ant-menu-item-active{
                    color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                }
            }
        }
    }

    .ant-menu-horizontal{
        &:not(.ant-menu-dark){
            > .ant-menu-submenu{
                &:hover{
                    .ant-menu-submenu-title{
                        svg,
                        .ant-menu-title-content{
                            color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                        }
                    }
                    &:after{
                        border-bottom-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
                    }
                }
            }
        }
    }

    /* ant result */
    .ant-result{
        &.ant-result-success{
            .anticon svg{
                color: ${({ theme }) => theme['success-color']};
            }
        }
        &.ant-result-info{
            .anticon svg{
                color: ${({ theme }) => theme['info-color']};
            }
        }
        &.ant-result-warning{
            .anticon svg{
                color: ${({ theme }) => theme['warning-color']};
            }
        }
        &.ant-result-error{
            .anticon svg{
                color: ${({ theme }) => theme['danger-color']};
            }
        }
        .ant-result-title{
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .ant-result-subtitle{
            font-size: 13px;
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
        .ant-result-content{
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
            .ant-typography{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                a{
                    margin-left: 4px;
                    ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')}: 4px;
                }
            }
        }
    }

    .ant-result-extra{
        .ant-btn-default{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
            background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
        }
    }

    /* Ant Comment */
    .ant-comment-inner{
        padding: 0;
        .ant-comment-content-author,
        .ant-comment-content-author-name{
            >*{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }
    .ant-comment-content-detail p{
        color: ${({ theme }) => theme[theme.mainContent]['gray-light-text']};
    }
    .ant-list-items{
        padding-top: 22px;
    }
    .ant-list-items li:not(:last-child){
        margin-bottom: 22px;
    }
    .ant-comment:not(:last-child){
        margin-bottom: 22px;
    }
    .ant-comment-nested{
        margin-top: 22px;
    }
    .ant-comment-actions li span{
        color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
    }
    .ant-comment-content-detail textarea{
        resize: none;
        min-height: 170px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
    }
    .nested-comment-wrapper  {
        .comment-title{
            font-size: 12px;
            padding-bottom: 10px;
            margin-bottom: 22px;
            border-bottom: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
        
    }

    .ant-list-split .ant-list-header{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }

    /* ant list */
    .ant-list{
        &.ant-list-bordered{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        }
        .ant-list-item-meta{
            padding: 10px 24px; 
            border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
        }
        .ant-list-item-meta-description{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        }
    }

    /* Vector Map */
    .rsm_map{
        min-height: 505px;
        .world-map{
            width: 100%;
            height: auto;
            @media only screen and (max-width: 1599px){
                height: 480px;
            }
            @media only screen and (max-width: 1399px){
                height: 400px;
            }
            @media only screen and (max-width: 575px){
                height: 400px;
            }
            @media only screen and (max-width: 767px){
                height: 300px;
            }
            @media only screen and (max-width: 575px){
                height: 250px;
            }
            @media only screen and (max-width: 479px){
                height: 350px;
            }
            @media only screen and (max-width: 375px){
                height: 240px;
            }
        }
        .controls{
            position: absolute;
            right: 30px;
            bottom: 30px;
            button{
                display: block;
                width: 27px;
                height: 27px;
                background: none;
                color: ${({ theme }) => theme[theme.mainContent]['white-text']};
                border: 1px solid ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                padding: 0;
                font-size: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                cursor: pointer;
                &:first-child{
                    border-radius: 6px 6px 0 0;
                }
                &:last-child{
                    border-radius: 0 0 6px 6px;
                }
                &:focus{
                    outline: none;
                }
                svg{
                    width: 10px;
                    color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
                }
            }
            button + button{
                border-top: 0 none;
            }
        }
    }

    /* Checkout Wrapper */
    .checkoutWraper{
        .ant-card-body{
            padding: 50px 50px 50px 30px !important;
            @media only screen and (max-width: 575px){
                padding: 15px !important;
            }
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px){
                    padding: 15px !important;
                }
            }
        }
        .ant-steps{
            margin-top: 0;
        }
        .step-action-wrap{
            @media only screen and (max-width: 1599px){
                margin-bottom: 50px;
            }
            @media only screen and (max-width: 767px){
                margin-bottom: 30px;
            }
        }
    }

    /* Star Active */
    a{
        i,
        span.fa{
          font-size: 16px;
          color: ${({ theme }) => theme[theme.mainContent]['extra-light-text']};
        }
        &.starDeactivate{
          i:before{
            content: "\f31b";
          }
        }
        &.starActive{
          i,
          span.fa{
            color: ${({ theme }) => theme['warning-color']};
          }
          i:before,
          span.fa:before{
            color: ${({ theme }) => theme['warning-color']};
            content: "\f005";
    
          }
        }
    }

    .ant-timeline{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        .ant-timeline-item-content{
            font-size: 16px;
        }
    }

    .ant-timeline-item-tail{
        border-width: 3px;
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
    }

    
    .ant-rate-content{
        font-weight: 500;
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-rate-text{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
    }

    .ant-rate{
        .anticon {
            svg{
                color: #FA8B0C;
            }
        }
    }

    .ant-rate-star.ant-rate-star-zero span svg{
        color: #c6d0dc;
    }

    .account-card{
        .ant-card-head{
            .ant-card-extra{
                @media only screen and (max-width: 575px){
                   padding-top: 0 !important;
                }
            }
            
        }
                
    }

    /* Rechart */
    .recharts-default-legend{
        .recharts-legend-item{
            min-width: 100px !important;
        }
    }

    /*  Radio */
    .ant-radio{
        &.ant-radio-disabled{
            opacity: .4;
            &+span{
                opacity: .4;
            }
        }
    }
    .radio-size-wrap{
            .ant-radio-button-wrapper{
                @media only screen and (max-width: 1450px){
                    padding: 0 11.5px;
            }
        }
    }
    .ant-radio-wrapper:hover .ant-radio, 
    .ant-radio:hover .ant-radio-inner, 
    .ant-radio-input:focus + .ant-radio-inner{
        border-color: ${({ theme }) => theme['primary-color']};
        outline: none;
        box-shadow: 0 0;
    }

    .ant-radio-inner{
        transition: 0s;
        background-color: ${({ theme }) => theme[theme.mainContent]['input-bg']};
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
    }
    .ant-radio-checked{
        .ant-radio-inner{
            border-color: ${({ theme }) => theme['primary-color']};
        }
    }

    .ant-radio-button-wrapper{
        &.ant-radio-button-wrapper-disabled{
            opacity: .4;
        }
    }

    .ant-radio-button-wrapper{
        &.ant-radio-button-wrapper-checked{
            &.ant-radio-button-wrapper-disabled{
                background-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
    }
    

    /* Message  */
    .message-button-list{
        margin: -4px;
        .ant-btn {
            margin: 4px;
        }
    }
    /* Chart Label */

    .chart-label {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 6px;
        color: #5a5f7d;
    }

    .chart-label .label-dot {
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 8px;
        width: 7px;
        height: 7px;
        border-radius: 50%;
    }

    .chart-label .label-dot.dot-success {
        background: #20c997;
    }

    .chart-label .label-dot.dot-info {
        background: #5f63f2;
    }

    .chart-label .label-dot.dot-warning {
        background: #fa8b0c;
    }

    .chart-label .label-dot {
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 10px;
    }

    // Ant comment action
    .ant-comment-actions{
        li{
            position: relative;
            &:not(:last-child){
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 8px;
                ${({ theme }) => (!theme.rtl ? 'padding-right' : 'padding-left')}: 8px;
                &:after{
                    position: absolute;
                    ${({ theme }) => (!theme.rtl ? 'right' : 'left')}: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 1px;
                    height: 12px;
                    background-color: #C6D0DC;
                    content: '';
                }
            }
            .com-time{
                cursor: default;
            }
            span{
                ${({ theme }) => (!theme.rtl ? 'margin-right' : 'margin-left')}: 0;
            }
        }
    }

    // Emoji Picker React
    .emoji-picker-react{
        top: 15px;
        right: 25px;
        box-shadow: 0 5px 10px #efefef10;
        @media only screen and (max-width: 479px){
            top: 25px;
            right: -50px;
            width: 260px;
        }
        .emoji-categories{
            padding: 0 10px;
        }
        .emoji-search{
            margin: 0 10px;
        }
        .content-wrapper:before{
            display: none;
        }
        .emoji-group{
            padding: 0 10px;
        }
        .emoji-group:before{
            font-size: 12px;
            font-weight: 600;
            color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
        }
        .emoji-group .emoji-img{
            margin: 5px !important;
        }
    }

    .wizard-side-border{
        >.ant-card{
            .ant-card-body{
                padding: 0 25px !important;
            }
        }
        .checkout-successful{
            >.ant-card{
                .ant-card-body{
                    padding: 25px !important;
                    @media only screen and (max-width: 575px){
                        padding: 15px !important;
                    }
                }
            }
        }
        .payment-method-form.theme-light{
            .shipping-selection__card{
                .ant-card-body{
                    padding: 25px 0 !important;
                }
            }
        }
        .shipping-selection__card{
            .ant-card-body{
                padding: 25px !important;
                @media only screen and (max-width: 575px){
                    padding: 15px !important;
                }
            }
        }
        .atbd-review-order{
            .ant-card-body{
                padding: 25px 25px 0 !important;
                @media only screen and (max-width: 767px) {
                    padding: 15px 15px 0 !important;
                }
            }
        }
        
        .ant-steps {
            padding: 50px;
            @media only screen and (max-width: 1399px) {
                padding: 25px;
            }
        }
        .steps-wrapper{
            padding: 50px;
            @media only screen and (max-width: 1399px) {
                padding: 25px;
            }
            ${({ theme }) => (theme.rtl ? 'border-right' : 'border-left')}: 1px solid ${({ theme }) =>
  theme[theme.mainContent]['border-color-default']};
        }
    }
    .editor-compose > div {
        position: static;
        max-width: 100%;
        margin: 0 0 25px;
    }

    // Ant Dragger
    .ant-upload-drag{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']} !important;
        border-radius: 10px !important;
        display: flex;
        align-items: center;
        min-height: 100px;
        border-color: #C6D0DC;
        &.ninjadash-uploader-large{
            min-height: 180px;
        }
        .ant-upload-drag-container{
            .ant-upload-text{
                margin-bottom: 0;
                font-size: 15px;
                color: #9299B8;
            }
        }
    }

    .ant-upload{
        .ant-btn-light{
            color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            &:hover{
                border-color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
        }
    }

    .ant-upload-list-item{
        .ant-upload-list-item-info{
            border-radius: 6px;
            padding: 0px 8px;
            background-color: transparent;
            svg{
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            a{
                color: ${({ theme }) => theme[theme.mainContent]['menu-active']};
            }
        }
    }

    // Form Validation
    .ant-form-item{
        &.ant-form-item-has-success{
            .ant-input{
                border-color: ${({ theme }) => theme['success-color']};
            }
            &.ant-form-item-with-help{
                .ant-form-item-explain{
                    color: ${({ theme }) => theme['success-color']};
                }
            }
        }
        &.ant-form-item-with-help{
            .ant-form-item-explain{
                margin-top: 6px;
            }
        }
    }
    /* Order Summery */
    .ninjadash-order-summery{
        background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
    }

    .ant-table{
        background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
    }

    .ant-table-thead {
        > tr {
            > th{
                background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                color: ${({ theme }) => theme[theme.mainContent]['dark-text']};
            }
        }
    }
    .ant-table-tbody{
        >tr{
            >td{
                border-color: ${({ theme }) => theme[theme.mainContent]['border-color-default']};
                background-color: ${({ theme }) => theme[theme.mainContent]['white-background']};
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            &:hover{
                >td{
                    background-color: ${({ theme }) => theme[theme.mainContent]['main-background-light']};
                }
            }
        }
    }
    .ant-btn-transparent,
    .btn-outlined,
    .ant-btn-white
    {
        .anticon-loading{
            svg{
                color: ${({ theme }) => theme['primary-color']};
            }
        } 
    }
    .anticon-loading{
        svg{
            color: #fff;
        }
    }

    .ninjadash-action-count{
        ${({ theme }) => (!theme.rtl ? 'padding-left' : 'padding-right')}: 8px;
    }
    .calc-height-card{
        >div{
            height:100%;
            .ant-card{
                min-height: calc(100% - 25px);
            }
        }
    }
`;
const DatePickerWrappers = Styled.div`
    .ant-picker{
        padding: 6px 11px 6px;
        width: 100%;
        border-color: ${({ theme }) => theme[theme.mainContent]['border-color-secondary']};
        border-radius: 5px;
    }
    .ant-picker:not(:last-child){
        margin-bottom: 20px;
    }
    .ant-picker-input > input{
        color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
        &::placeholder{
            color: ${({ theme }) => theme[theme.mainContent]['light-text']};
        }
    }
    .ant-picker-input > input[disabled]{
        opacity: .6;
    }
    .ant-picker-range .ant-picker-input > input{
        text-align: center;
    }
`;
export {
  Main,
  SalesSearchWrapper,
  DatePickerWrappers,
};
