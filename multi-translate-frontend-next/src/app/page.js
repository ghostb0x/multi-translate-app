'use client';
import styles from './page.module.css';
import AppProvider from '@/components/AppProvider';
import styled from 'styled-components';
import QueryInput from '@/components/QueryInput';
import OutputsSection from '@/components/OutputsSection';
import SavedSearches from '@/components/SavedSearches';
import Header from '@/components/Header';
import { QueryRefProvider } from '../components/QueryInput/useQueryRef';

export default function Home() {
  return (
    <AppProvider>
      <MainWrapper>
        <Header />
        <QueryRefProvider>
          <QueryInput />
          <OutputsSection />
          {/* outputs, setoutputs */}
          <SavedSearches />
          {/* saved, setSaved, saveCurrentSearch, loadSave */}
        </QueryRefProvider>
      </MainWrapper>
    </AppProvider>
  );
}

const MainWrapper = styled.main`
  overflow-x: clip;
`;
