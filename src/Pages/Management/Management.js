
import React from 'react'

import styled from "styled-components";
import Nav from '../../Components/Nav'
import Title from "../../Components/title/Title";
import ManageCard from '../../Components/management/ManageCard';
import Footer from '../../Components/footer/Footer';

const Wrapper = styled.div`
  display: flex;
  width: 800px;
  margin:auto;
  flex-flow : row wrap;
`
const HallWrapper = styled.div`
  min-height: calc(100% - 240px);
  align-items: center;

  justify-content: center;
  min-height: calc(80vh - 160px);
`


const Management = () => {
    return (
        <div>

            <Nav/>
            <HallWrapper>

                <Title props={'Management'}/>

                <Wrapper>
                    {/*props.map((e)=> (<ManageCard />))*/}
                    <ManageCard/>

                    <ManageCard/>
                    <ManageCard/>

                    <ManageCard/>
                </Wrapper>

            </HallWrapper>
            <Footer/>
        </div>
    )
}


export default Management
