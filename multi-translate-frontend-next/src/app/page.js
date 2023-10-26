'use client';
import styles from './page.module.css';
import AppProvider from '@/components/AppProvider';
import MainBody from '@/components/MainBody';

export default function Home() {
  return (
    <AppProvider>
      <MainBody />
    </AppProvider>
  );
}
