import { useState, useEffect } from 'react';
import browser from 'webextension-polyfill';

export default function useWebsitesList() {
  const [groups, setGroups] = useState({});
  const [startListener, setStartListener] = useState(false);

  const websitesListener = changes => {
    const { newValue = {}, oldValue = {} } = changes.groups;
    if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
      setGroups(newValue);
    }
  };

  useEffect(() => {
    if (!Object.keys(groups).length) {
      browser.storage.local.get('groups').then(({ groups: groupsGet = {} }) => {
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
