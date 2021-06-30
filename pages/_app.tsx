import { UniformTracker } from '@uniformdev/optimize-tracker-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/style.css';

// for locally downloaded intent data and tracker from npm
import { analytics, localTracker } from '../lib/local-tracker';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Tracker } from '@uniformdev/optimize-tracker-common';
import { IntentVector } from '@uniformdev/optimize-common';
import { useEffect } from 'react';

export type UniformConfAppProps = AppProps & {
  tracker?: Tracker;
  scoring?: IntentVector;
};

export default function UniformConfApp({ Component, pageProps, tracker, scoring }: UniformConfAppProps) {
  const trackerInstance = tracker || localTracker;

  useEffect(() => {
    if (!pageProps) {
      return;
    }

    analytics.page();
  }, [pageProps]);

  return (
    <UniformTracker trackerInstance={trackerInstance} initialIntentScores={scoring}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UniformTracker>
  );
}
