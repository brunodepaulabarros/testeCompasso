import styled from 'styled-components/native';

export const Container = styled.View`
    background-color:${props => props.containerColor};
    flex: 2;
    flex-basis: 0;
    height:150px;
    margin-right:5px;
    border-radius:15px;
    border-width: 2px;
    border-color: #ddd;
    border-bottom-width: 0;
    margin:0 10px 15px 10px;
    padding: 5px 0 20px 5px;
`;