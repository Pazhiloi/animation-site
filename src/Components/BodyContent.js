import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from "../Layouts";
import BlogsSection from './BlogsSection';
import ContactSection from './ContactSection';
import GradientCardsSection from './GradientCardsSection';
import MainTitle from './MainTitle';
import SellerCard from './SellerCard';
import DemostrationSection from './DemostrationSection';
const BodyContent = () => {
  return (
    <BodyContentStyled>
      <InnerLayout>
        <MainTitle
          title={"Top Sellers This Month"}
          subtitle={"All Entrepreneurs"}
        />
        <div className="sellercards">
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>
        <BlogsSection />
        <GradientCardsSection />
        <DemostrationSection />
      </InnerLayout>
        <ContactSection />
    </BodyContentStyled>
  );
};

const BodyContentStyled = styled.div`
  .sellercards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #020a27;
    padding: 3rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    p {
      text-align: center;
      opacity: 0.7;
    }
  }
`;


export default BodyContent;