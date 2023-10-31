'use client';
import styles from './page.module.css';
import AppProvider from '@/components/AppProvider';
import styled from 'styled-components';
import QueryInput from '@/components/QueryInput';
import OutputsSection from '@/components/OutputsSection';
import SavedSearches from '@/components/SavedSearches';
import Header from '@/components/Header';

export default function Home() {
  return (
    <AppProvider>
      <MainWrapper>
        <Header />
        <QueryInput />
        <OutputsSection />
        <SavedSearches />
      </MainWrapper>
    </AppProvider>
  );
}

const MainWrapper = styled.main`
  overflow-x: clip;
`;
