import { useState, useEffect } from 'react';
import browser from 'webextension-polyfill';

export default function useWebsitesList() {
  const [groups, setGroups] = useState([]);
  const [startListener, setStartListener] = useState(false);

  const websitesListener = changes => {
    const { newValue = {}, oldValue = {} } = changes.websites;
    if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
      setGroups(changes.websites.newValue);
    }
  };

  useEffect(() => {
    if (Object.values(groups).length) {
      browser.storage.local.get('groups').then(({ groupsGet = {} }) => {
        setGroups(groupsGet);
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

  return groups;
}
