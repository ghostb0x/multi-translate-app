'use client';
import AppProvider from '@/components/AppProvider';
import styled from 'styled-components';
import QueryInput from '@/components/QueryInput';
import OutputsSection from '@/components/OutputsSection';
import SavedSearches from '@/components/SavedSearches';
import Header from '@/components/Header';
import { QueryRefProvider } from '../components/QueryInput/useQueryRef';

export default function Home() {
  return (
    <MainWrapper>
      <Header />
      <QueryRefProvider>
        <AppProvider>
          <QueryInput />
          <OutputsSection />
          {/* outputs, setoutputs */}
          <SavedSearches />
          {/* saved, setSaved, saveCurrentSearch, loadSave */}
        </AppProvider>
      </QueryRefProvider>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  overflow-x: clip;
`;
