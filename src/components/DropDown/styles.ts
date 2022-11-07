import styled from 'styled-components';

export const DropDownContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;
  
  .dropdown {
    border-radius: 10px;
    position: absolute;
    background-color: black;
    min-width: 180px;
    left: -180px;
    top: 30px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    text-align: left;

    h3 {
      text-align: center;
    }
  }

  .dropdown a {
    color: white;
    padding: 12px 16px;
    display: block;
    border-top: 1px solid #2f2e2e;
    
    div { 
      float: left;
      height: 20px;
      width: 20px;
      margin: 0 5px;
    }
  }

  .dropdown h3 {
    padding: 12px 16px;
    margin: 0 auto;
    
  }
`;
