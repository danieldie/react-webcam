import Styled from 'styled-components';

const DataTableStyleWrap = Styled.div`
    .normaltable-title {
        font-weight:700;
        font-size: 18px;
        padding-left: 20px;
        color:black;
    }
    .maintable-title {
        font-weight:700;
        font-size: 24px;
        padding-left: 20px;
        color:black;
    }
    .ninjadash-datatable-filter{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 20px 0 25px 0;
        @media only screen and (max-width: 767px){
            flex-direction: column;
            align-items: flex-start;
        }
        .ninjadash-datatable-filter__left{
            display: inline-flex;
            width: 100%;
            align-items: center;
            @media only screen and (max-width: 767px){
                margin-bottom: 20px;
            }
            @media only screen and (max-width: 900px){
                flex-direction: column;
                align-items: flex-start;
            }
            .ant-form{
                display: inline-flex;
                width: 100%;
                align-items: center;
            }
            span.label{
                white-space: nowrap;
                margin-right: 8px;
                color: ${({ theme }) => theme[theme.mainContent]['gray-text']};
            }
            .ninjadash-datatable-filter__input{
                display: flex;
                align-items: center;
                padding-right: 20px;            
                @media only screen and (max-width: 900px){
                    margin-bottom: 15px;
                    padding-right: 0;
                    width: 100%;
                }
                .ant-input{
                    height: 40px;
                }
                .ant-select{
                    @media only screen and (max-width: 475px){
                        width: 100% !important;
                    }
                }
                .ninjadash-data-ESN{
                    height: 40px !important;
                    min-height: 40px !important;
                    max-height: 40px !important;
                    resize: 'none';
                    padding-top: 8px;
                }
            }
        }
        
        .ninjadash-datatable-filter__right{
            min-width: 280px;
            @media only screen and (max-width: 475px){
                min-width: 100%;
            }
            .ant-input-affix-wrapper{
                padding: 7.22px 20px;
                border-radius: 6px;
                .ant-input-prefix{
                    svg{
                        width: 16px;
                        height: 16px;
                        color: ${({ theme }) => theme[theme.mainContent]['light-text']};
                    }
                }
            }
        }
    }
`;
export { DataTableStyleWrap };
