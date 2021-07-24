import styled from "styled-components";

export const Container = styled.div`
width: 80%;
margin: auto;

.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart {
       display: flex;
       justify-content: center;
       align-items: center;
       padding-right: 3.5em;
    }
}


section {
    height: 100%;
    width: 95%;
    background: #e2e2;
    display: flex;
    
    flex-wrap: wrap;

    .product-content{
        display: grid;
        text-align: center;
        margin: 1em;
        height: 300px;
        background: #fff;
        border-radius: 12px;
        padding: 12px;
    }
}

`