import React from "react";
import { Container, Content, Holder, NavLink } from "../../../common/container";
import Text from "../../../common/text";


const HowTo = () => {

    return(
            <Container>
                <Content>
                    <Holder style={{width:"80%"}}>
                        <Text as="h1" margin="2rem auto" color="var(--dark)">There are many wways to come to germany</Text>
                        <Text as="p" margin="1rem auto">Nisi dolor irure irure culpa labore quis. Eu aute amet mollit do. Reprehenderit sit quis consequat laborum. Et non cupidatat ut ut fugiat mollit mollit eiusmod aliquip ullamco ea.</Text>
                        <Text as="p" margin="1rem auto">Nisi dolor irure irure culpa labore quis. Eu aute amet mollit do. Reprehenderit sit quis consequat laborum. Et non cupidatat ut ut fugiat mollit mollit eiusmod aliquip ullamco ea.</Text> 
                        <Text as="p" margin="1rem auto">Nisi dolor irure irure culpa labore quis. Eu aute amet mollit do. Reprehenderit sit quis consequat laborum. Et non cupidatat ut ut fugiat mollit mollit eiusmod aliquip ullamco ea.</Text>
                    </Holder>
                    <Holder style={{width:"20%"}}>
                        <fieldset style={{maxWidth:"150px"}}>
                            <legend>Useful Links</legend>
                            <NavLink to="/aupair">Aupair</NavLink> <br/>
                            <NavLink to="/fsj">FSJ/BFD</NavLink> <br/>
                            <NavLink to="/ausbildung">Ausbildung</NavLink> <br/>
                            <NavLink to="/nursing">Nursing</NavLink>
                        </fieldset>
                    </Holder>
                </Content>
            </Container>
        )
}

export default HowTo;