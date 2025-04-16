import DialougeSection from "@/components/Ui/HomePage/DialougeSection/DialougeSection";
import HeroSection from "@/components/Ui/HomePage/HeroSection/HeroSection";
import Container from "@/components/Ui/Shared/Container/Container";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <div className="space-y-4 min-h-[calc(100vh-50px)]">
        <h3>This is Home Page</h3>
        <HeroSection />
        <DialougeSection />
      </div>
    </Container>
  );
};

export default HomePage;
