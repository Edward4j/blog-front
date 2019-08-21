/*
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
});
*/

import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({

  shouldReloadRecord() {
    return false;
  },

  shouldBackgroundReloadRecord(store, snapshot) {

    console.log("Calling shouldBackgroundReloadRecord");
    const loadedAt = snapshot.record.get('loadedAt');
    console.log(Date.now() - loadedAt);

    // if it was loaded more than an hour ago
    //if (Date.now() - loadedAt > 3600000) {
    //  return true;
    //} else {
    //  return false;
    //}

    return (Date.now() - loadedAt > 3600000);

  }
})
