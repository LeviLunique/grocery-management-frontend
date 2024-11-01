import { initLDClient } from 'launchdarkly-react-client-sdk';

export const ldClient = initLDClient({
  clientSideID: process.env.NEXT_PUBLIC_LAUNCHDARKLY_SDK_KEY,
});
