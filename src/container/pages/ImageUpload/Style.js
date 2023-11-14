import Styled from 'styled-components';

const ImageUploadWrapper = Styled.div`
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
    display:flex;
    justify-content:center;
    padding: 50px 30px 20px;
    min-height: 715px;
    background-color: transparent;
    .upload-btn{
        display:flex;
        justify-content:end;
        margin-top:30px;
    }
    .ant-modal{
        width:688px!important
    }
    .ant-upload{
        border:none
    }
    .ant-upload-drag{
        padding:40px0!important
    }
    .ant-card-head-title{
        display:flex;
        justify-content:center;
    }
    .ant-card-body{
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:100%;
        padding:30px!important
    }
    .ant-upload-list-text{
        display:none!important
    }
`;
const SerialInputWrapper = Styled.div`
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
  ImageUploadWrapper,
  SerialInputWrapper,
};