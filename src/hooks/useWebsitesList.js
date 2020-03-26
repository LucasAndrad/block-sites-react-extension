import { useState, useEffect } from 'react';
import browser from 'webextension-polyfill';

export default function useWebsitesList() {
  const [sitesList, setSitesList] = useState([]);
  const [startListener, setStartListener] = useState(false);

  const websitesListener = changes => {
    const { newValue = [], oldValue = [] } = changes.websites;
    if (newValue.lenght !== oldValue.length) {
      setSitesList(changes.websites.newValue);
    }
  };
  useEffect(() => {
    if (!sitesList.length) {
      browser.storage.local.get('websites').then(({ websites = [] }) => {
        setSitesList(websites);
      });
    }
  }, []);

  useEffect(() => {
    if (!startListener) {
      browser.storage.onChanged.addListener(websitesListener);
      setStartListener(true);
    }
  }, []);

  useEffect(() => {
    return function removeListener() {
      if (startListener) {
        browser.storage.onChanged.removeListener(websitesListener);
      }
    };
  });

  return sitesList;
}
