import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://lh3.googleusercontent.com/proxy/xCc9RK1VwRiMstSll5CvZobcN1oIyedDMHqmCEke0GmVGGjDvE-gRY6gFUnYrVtvFPtPN75uW1oTJR8jV8RxlgT32bu8p_vmZNs0LalEU8a6SYt4LOEKaecq3Av1IT5ucnl01g" alt=""/>
            </Background>
            <ImageTitle>
                <img src="/images/logo (1).svg" alt="" />              
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt=""/>   
                    <span>PLAY</span>                 
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt=""/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt=""/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 . 7m . Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A Chinese mom who's sad when her grown son leaves home gets another
                chance at motherhood when one of her dumplings springs to life. But she finds
                that nothing stays cute and small forever.
            </Description>
        </Container>
    )
}

const Container = styled.div `
min-height: calc(100 -70px);
margin-top: 80px;
padding: 0 calc(3.5vw + 5px);
position: relative;
`;


const Background = styled.div `
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
z-index: -1;
opacity: 0.8; 

img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
` ; 


const ImageTitle = styled.div `
height: 30vh;
width: 35vw;
min-height: 170px;
min-width: 200px;

img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
`;

const Controls = styled.button `
display: flex;
align-items: center;
background: none;
border: none;
outline: none;
`;
const PlayButton = styled.button `
border-radius: 4px;
font-size: 14px;
display: flex;
align-items: center;
height: 56px;
border: none;
padding: 0 24px;
outline: none;
margin-right: 22px;
letter-spacing: 1.8px;
cursor: pointer;
background-color: rgb(249, 249, 249);

&:hover{
  background: rgb(198, 198, 198);
}
`;


const TrailerButton = styled(PlayButton) `
background: rgba(0, 0, 0 ,0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`;


const AddButton = styled.button `
height: 44px;
width: 44px;
display: flex;
align-items: center;
outline: none;
justify-content: center;
border-radius: 50%;
border:2px solid white;
background-color: rgba(0,0,0,0.6);
margin-right: 16px;
cursor: pointer;
span{
    font-size: 30px;
    color: rgb(249,249,249);
}
`;
const GroupWatchButton = styled.button `
border-radius: 50%;
background: rgb(0,0,0);
cursor:pointer;
border:2px solid white;
outline: none;
`;

const SubTitle = styled.div `
color: rgb(249,249,249);
font-size: 15px;
min-height: 20px;
margin-top: 26px;
`;

const Description = styled.div `
line-height: 1.4;
font-size: 20px;
margin-top: 16px;
color: rgb(249,249,249);
max-width: 500px;
`;

export default Detail
