import styled from "styled-components";

export const PrimaryBtn = styled.button`
    outline: none;
    background: none;
    cursor: pointer;
    margin: 1rem;
    border-radius: 1rem;
    padding: .3rem 1.2rem;
    color: ${props => props.color};
    border: 1px solid ${props => props.color};

    &:hover {
        color: ${props => props.hover};
        border: 1px solid ${props => props.hover};
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }


`;

