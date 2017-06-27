import Services from '../../../src/services';
import autocomplete from '../../../src/services/autocomplete';
import collections from '../../../src/services/collections';
import details from '../../../src/services/details';
import logging from '../../../src/services/logging';
import search from '../../../src/services/search';
import tracker from '../../../src/services/tracker';
import url from '../../../src/services/url';
import suite from '../_suite';

suite('Services', ({ expect }) => {

  describe('SERVICES', () => {
    it('should export system services', () => {
      expect(Services).to.eql({
        autocomplete,
        collections,
        details,
        logging,
        search,
        tracker,
        url
      });
    });
  });
});
