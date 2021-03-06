import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router'
const Recommends = (props) => {

    const history = useHistory()
    return(
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <Wrap onClick={()=> history.push('/detail')}>
                    <Link to ="/">
                        <img src="https://i.insider.com/5dcab15f7eece56e7e307d83?width=1136&format=jpeg" alt=""/>
                    </Link>
                </Wrap>
                 <Wrap>
                    <Link to ="/">
                        <img src="https://i.insider.com/5dcab15f7eece56e7e307d83?width=1136&format=jpeg" alt=""/>
                    </Link>
                </Wrap>
                 <Wrap>
                    <Link to ="/">
                        <img src="https://i.insider.com/5dcab15f7eece56e7e307d83?width=1136&format=jpeg" alt=""/>
                    </Link>
                </Wrap>
                 <Wrap>
                    <Link to ="/">
                        <img src="https://i.insider.com/5dcab15f7eece56e7e307d83?width=1136&format=jpeg" alt=""/>
                    </Link>
                </Wrap>
               
            </Content>
        </Container>
    )
}

const Container = styled.div `
padding: 0 0 26px;

h4{
    padding: 20px 0;
}
`;
const Content = styled.div `
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));

@media (max-width:768px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
`;

const Wrap = styled.div `
padding-top: 56.25%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
position: relative;
overflow: hidden;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
border: 3px solid rgba(249, 249, 249, 0.1);

img{
    inset: 0px;
    display: block;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
}

&:hover{
 box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
 transform: scale(1.05);
 border-color: rgba(249, 249, 249, 0.8);
}

`;

export default Recommends