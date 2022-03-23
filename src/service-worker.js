import {  precacheAndRoute } from 'workbox-precaching';
import {
  googleFontsCache,
  imageCache,
  offlineFallback,
  pageCache,
  staticResourceCache,
} from 'workbox-recipes';

precacheAndRoute(self.__WB_MANIFEST || []);

pageCache();

googleFontsCache();

staticResourceCache();

imageCache();

offlineFallback();
